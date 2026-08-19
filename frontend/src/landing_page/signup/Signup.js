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
} from "@mui/material";
import axios from "axios";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultTheme = createTheme();
const API = process.env.REACT_APP_API_URL || "http://localhost:3002";

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
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
      const res = await axios.post(`${API}/signup`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 200 || res.status === 201) {
        toast.success(res.data?.message || "Signup successful!");
        setFormData({ name: "", email: "", password: "" });

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer />
      <CssBaseline />

      {/* Container wrapper ensuring footer stays at bottom */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "80vh",
          justifyContent: "center",
          alignItems: "center",
          py: 6,
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            my: 8, // Adds top & bottom spacing from Navbar and Footer
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#0288d1" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ mb: 2, fontWeight: 500 }}>
              Create Your Account
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
                id="name"
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
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
                  mt: 3,
                  mb: 2,
                  py: 1.2,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: "16px",
                  backgroundColor: "#1976d2",
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Sign Up"}
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
                  to="/login" // Login page mein isko "/signup" kar dein
                  style={{
                    display: "inline-block",
                    textDecoration: "none",
                    color: "#1976d2",
                    fontSize: "14px",
                    fontWeight: 500,
                    textAlign: "center"
                  }}
                >
                  Already have an account? Login
                </Link>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}