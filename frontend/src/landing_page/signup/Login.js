import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
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

// Fallback values for local development
const API = process.env.REACT_APP_API_URL || "http://localhost:5000";
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

      if (res.status === 200) {
        setFormData({ email: "", password: "" });
        
        // Save auth data to localStorage (shared across localhost ports)
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        toast.success("Login successful!", { position: "top-right" });
        setSuccessLoading(true);
        
        // Redirect to your SEPARATE Dashboard application
        setTimeout(() => {
          window.location.href = DASHBOARD_URL; 
        }, 1500);
      } else {
        toast.error(res.data?.message || "Login failed!");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid email or password!");
      console.error(err);
    } finally {
      setLoading(false); // Clear loading state even if request fails
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
              autoComplete="current-password" // Fixed: browser credentials match standard login form
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

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signup" style={{ textDecoration: 'none', color: '#1976d2', fontSize: '14px' }}>
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
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






