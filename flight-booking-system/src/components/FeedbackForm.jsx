import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Grid,
  Box,
  MenuItem,
  InputLabel,
  Select,
  Button,
  Card,
  CardContent,
} from "@mui/material";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    genralqueries: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData); // Print form data to console
    alert("Message sent successfully!");

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
      genralqueries: "",
    });
  };

  return (
    <Container
      sx={{
        border: "1px solid black",
        padding: "20px",
        maxWidth: "1200px",
        marginTop: 11,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      }}
    >
      <Card sx={{ boxShadow: 3, padding: 2 }}>
        <CardContent>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{
                fontSize: "40px",
                fontWeight: "bold",
                fontFamily: "sans-serif",
                marginBottom: "20px",
              }}
            >
              Contact Us
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{ backgroundColor: 'white', borderRadius: 1 }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="abc.xyz@example.com"
                    required
                    sx={{ backgroundColor: 'white', borderRadius: 1 }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <InputLabel id="select-label">General Query</InputLabel>
                  <Select
                    required
                    fullWidth
                    labelId="select-label"
                    variant="outlined"
                    name="genralqueries"
                    value={formData.genralqueries}
                    onChange={handleChange}
                    sx={{ backgroundColor: 'white', borderRadius: 1 }}
                  >
                    <MenuItem value={1}>Help to cancel my reservation</MenuItem>
                    <MenuItem value={2}>What is your refund policy?</MenuItem>
                    <MenuItem value={3}>What's a hacker fare?</MenuItem>
                    <MenuItem value={4}>Do flight prices include baggage fees?</MenuItem>
                  </Select>
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Your Feedback Message"
                    variant="outlined"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    sx={{ backgroundColor: 'white', borderRadius: 1 }}
                  />
                </Grid>

                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ 
                      padding: '8px 16px', 
                      fontSize: '14px', 
                      borderRadius: 1,
                      boxShadow: 2,
                    }}
                  >
                    Submit Feedback
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FeedbackForm;
