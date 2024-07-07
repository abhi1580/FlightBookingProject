import React, { useState } from 'react';
import { Grid, Paper, Typography, TextField, Button, Box } from '@mui/material';

const UpiPaymentMode = () => {
  const [upiId, setUpiId] = useState('');
  const [error, setError] = useState('');

  const validateUpiId = (upiId) => {
    const upiIdRegex = /^[a-zA-Z0-9.\-_]{2,}@[a-zA-Z]{2,}$/; // Basic UPI ID format
    return upiIdRegex.test(upiId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateUpiId(upiId)) {
      // Log details to the console
      console.log({ upiId });
      // Handle form submission
      alert('UPI ID is valid and submitted.');
    } else {
      setError('Invalid UPI ID. Must be in the format name@bank.');
    }
  };

  const handleInputChange = (event) => {
    setUpiId(event.target.value);
    setError('');
  };

  return (
    <Grid item xs={8}>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Enter UPI ID Manually
        </Typography>
        <Box component="form" onSubmit={handleSubmit} display="flex" alignItems="center">
          <TextField
            variant="outlined"
            placeholder="e.g: name@bank"
            size="small"
            value={upiId}
            onChange={handleInputChange}
            error={!!error}
            helperText={error}
            style={{ marginRight: 10 }}
          />
          <Button variant="contained" type="submit">Pay ₹6,447</Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default UpiPaymentMode;
