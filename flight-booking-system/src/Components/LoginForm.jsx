import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import checkUserFromData from './checkUsernamePass'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [userExist,setUserExist]=useState(false)
  const checkUser = () => {
    const { email, password } = formData;
    if (checkUserFromData(email, password)) {
      alert("Welcome");
      setUserExist(true);
    } else {
      alert("User does not exist");
      setUserExist(false);
    }
  };

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });

    setFormErrors({ ...formErrors, [event.target.name]: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const user =signup.find(user => signup.email === email && signup.password === password);
    // if(user){
    //     alert("Your have Been Logged In! Welcome");
    // }

    if (validateForm()) {
      console.log(formData);
      // alert("Your have Been Logged In! Welcome");

      setFormData({
        email: "",
        password: "",
      });
    } else {
      // console.log("Form has errors. Cannot submit.");
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      email: "",
      password: "",
    };

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "55vh" }}
    >
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography
            variant="h5"
            gutterBottom
            style={{ padding: "10px", textAlign: "center", fontWeight: "bold" }}
            id="text-head"
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
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  id="login-btn"
                  // onClick={handleSubmit}
                  onClick={checkUser}
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Link
                      href="#"
                      variant="body2"
                      to="/signup"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "18px",
                      }}
                    >
                      Sign-up Here
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="#"
                      variant="body2"
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
