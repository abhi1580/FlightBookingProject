import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import checkUserFromData from './checkUsernamePass';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [userExist, setUserExist] = useState(false); // State variable for user existence

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setFormErrors({ ...formErrors, [event.target.name]: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      if (checkUser()) {
        alert("Welcome");
        setUserExist(true); // Set userExist to true if user is authenticated
        // Redirect to home or dashboard, e.g., window.location.href = '/home';
      } else {
        alert("User does not exist");
        setUserExist(false); // Set userExist to false if user does not exist
      }
    }
  };

  const checkUser = () => {
    const { email, password } = formData;
    return checkUserFromData(email, password);
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ flexGrow: 1, marginTop: 9, padding: "20px" }}
    >
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography
            variant="h5"
            gutterBottom
            style={{ padding: "10px", textAlign: "center", fontWeight: "bold" }}
          >
            Login Here
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!formErrors.email}
                  helperText={formErrors.email}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!formErrors.password}
                  helperText={formErrors.password}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Link
                      to="/signup"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "18px",
                      }}
                    >
                      Register here!
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      to="/forgotpass"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "18px",
                      }}
                    >
                      Forgot Password?
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
