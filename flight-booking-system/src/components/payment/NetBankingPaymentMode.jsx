import React, { useState } from 'react';
import { Grid, Paper, Typography, Radio, Button, FormControlLabel, FormControl, RadioGroup, Box, TextField } from '@mui/material';
import allBanks from '../database/all_banks' // Adjust path as per your project structure

const NetBankingPaymentMode = () => {
  const [showAllBanks, setShowAllBanks] = useState(false);
  const [selectedBank, setSelectedBank] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleViewAllBanks = () => {
    setShowAllBanks(!showAllBanks);
  };

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
    setUsername('');
    setPassword('');
    setErrors({});
  };

  const validateForm = () => {
    let tempErrors = {};
    if (username.trim() === '') {
      tempErrors.username = 'Username is required.';
    }
    if (password.trim() === '') {
      tempErrors.password = 'Password is required.';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Log details to the console
      console.log({
        bank: selectedBank,
        username,
        password,
      });
      // Handle form submission
      alert('Net banking credentials are valid and submitted.');
    }
  };

  return (
    <Grid item xs={8}>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Select Bank for Net Banking
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup value={selectedBank} onChange={handleBankChange}>
            {allBanks.slice(0, showAllBanks ? allBanks.length : 5).map((bank) => (
              <FormControlLabel
                key={bank.value}
                value={bank.value}
                control={<Radio />}
                label={bank.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
        {allBanks.length > 5 && (
          <Box mt={2} display="flex" justifyContent="center">
            <Button variant="outlined" onClick={handleViewAllBanks}>
              {showAllBanks ? 'Show Less' : 'View All Banks'}
            </Button>
          </Box>
        )}
        {selectedBank && (
          <Box mt={2}>
            <Typography variant="h6" gutterBottom>
              Enter Net Banking Credentials for {allBanks.find((bank) => bank.value === selectedBank)?.label}
            </Typography>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={!!errors.username}
              helperText={errors.username}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        )}
      </Paper>
    </Grid>
  );
};

export default NetBankingPaymentMode;