import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  Paper,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import axios from "axios";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultTheme = createTheme();

const API = process.env.REACT_APP_API_URL || "http://localhost:3002";
const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [successLoading, setSuccessLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await axios.post(`${API}/login`, formData, {
      headers: { "Content-Type": "application/json" },
    });

    // Flexible status & token check
    if ((res.status === 200 || res.status === 201) && res.data?.token) {
      
      // 1. Save auth details first
      localStorage.setItem("token", res.data.token);
      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      // 2. Show success indicators
      toast.success("Login successful!", { position: "top-right" });
      setSuccessLoading(true);

      // 3. Clear state AFTER securing token
      setFormData({ email: "", password: "" });

      // 4. Redirect to Dashboard Port 3001
      setTimeout(() => {
        window.location.href = DASHBOARD_URL; // "http://localhost:3001"
      }, 1200);

    } else {
      // Handles status 200 but missing token
      toast.error(res.data?.message || "Invalid credentials!");
    }
  } catch (err) {
    // Exact error message sent from Backend express controller
    const serverMessage = err.response?.data?.message || err.response?.data?.error;
    toast.error(serverMessage || "Invalid email or password!", { position: "top-right" });
    console.error("Login catch block triggered:", err);
  } finally {
    setLoading(false);
  }
};

  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper
          elevation={6}
          sx={{
            mt: 8,
            p: 4,
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
            Login Your Account
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1, width: "100%" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={loading}
              sx={{
                mt: 4,
                mb: 2,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
            </Button>

            {/* Fully Centered Bottom Link */}
            <Box
              sx={{
                width: "100%",
                textAlign: "center",
                mt: 2
              }}
            >
              <Link
                to="/signup" // Signup page mein isko "/login" kar dein
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                  color: "#1976d2",
                  fontSize: "14px",
                  fontWeight: 500,
                  textAlign: "center"
                }}
              >
                Don't have an account? Sign up
              </Link>
            </Box>
          </Box>

          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={successLoading}
          >
            <CircularProgress color="inherit" />
            <Typography sx={{ ml: 2 }}>Opening Trading Dashboard...</Typography>
          </Backdrop>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}