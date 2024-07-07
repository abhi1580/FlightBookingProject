import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Paper } from "@mui/material";


const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setErrors({ email: "Email is required" });
      return;
    }
    console.log("Submitting with email:", email);
    alert("Your Password Has Been Sent To Your Email Address");
    
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
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "40vh" }}
    >
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography
            variant="h5"
            gutterBottom
            style={{ padding: "10px", textAlign: "center", fontWeight: "bold" }}
            id="text-head"
          >
            Forgot Password
          </Typography>
          <form onSubmit={handleSubmit}>
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
                id="login-btn"
                style={{marginTop:"18px"}}
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ForgotPasswordForm;
