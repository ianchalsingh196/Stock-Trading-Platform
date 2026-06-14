require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser");
const cors = require("cors");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");
const authMiddleware = require("./middleware/auth");
const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Signup route
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body, "req body in signup");
    
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    // FIXED: Removed 'new' and added 'await' for the Mongoose operation
    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error); // Helpful to log errors locally while debugging
    res.status(500).json({ message: "Server error" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // generate JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });

    const { password: userPassword, ...userData } = user.toObject();

    res.json({
      message: "login successfull",
      token,
      user: userData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/me", authMiddleware, async (req, res) => {
  try {
    // req.user.id matches the token payload token key perfectly
    const user = await UserModel.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// Get all orders
app.get("/allOrders", async (req, res) => {
  try {
    const orders = await OrdersModel.find({});
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// app.post("/newOrder", async (req, res) => {
//   let newOrder = new OrdersModel({
//     name: req.body.name,
//     qty: req.body.qty,
//     price: req.body.price,
//     mode: req.body.mode,
//   });

//   newOrder.save();

//   res.send("Order saved!");
// });

app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;
  console.log(req.body, "new order");

  try {
    let holding = await HoldingsModel.findOne({ name });

    if (mode === "SELL") {
      if (!holding || holding.qty < qty) {
        return res.status(400).json({
          message: "Insufficient quantity available to SELL",
        });
      }

      // SELL: reduce holdings
      holding.qty -= qty;
      await holding.save();
    } else if (mode === "BUY") {
      if (!holding) {
        holding = new HoldingsModel({ name, qty });
      } else {
        holding.qty += qty;
      }
      await holding.save();
    }

    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
    });
    await newOrder.save();

    res.status(201).json({
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  mongoose.connect(MONGO_URI);
  console.log("DB Connected");
});