import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Paper } from "@mui/material";
import signup from "./database/signup_data";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const checkUserEmail = (email) => {
    for (const user in signup) {
      if (signup[user].email === email) {
        alert("Password has been sent to your email address");
        return true;
      }
    }
    alert("User email does not exist");
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setErrors({ email: "Email is required" });
      return;
    }
    checkUserEmail(email);

    setEmail("");
    setErrors({});
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (errors.email) {
      setErrors({ ...errors, email: "" });
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ flexGrow: 1, marginTop: 9, padding: "20px" }}>
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h5" gutterBottom style={{ padding: "10px", textAlign: "center", fontWeight: "bold" }}>
            Forgot Password
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  fullWidth
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={handleEmailChange}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  style={{ marginTop: "18px" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ForgotPasswordForm;
