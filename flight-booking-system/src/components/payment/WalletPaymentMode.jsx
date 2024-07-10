import React, { useState } from 'react';
import { Grid, Paper, Typography, Button, Box } from '@mui/material';

const WalletPaymentMode = () => {
  const [selectedWallet, setSelectedWallet] = useState('');

  const handleWalletSelection = (wallet) => {
    setSelectedWallet(wallet);
  };

  const handleProceedPayment = () => {
    if (selectedWallet) {
      alert(`Proceeding with payment using ${selectedWallet}.`);
    } else {
      alert('Please select a wallet to proceed.');
    }
  };

  return (
    <Grid item xs={8}>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Select Wallet for Payment
        </Typography>
        <Box display="flex" flexDirection="column">
          <Button
            variant="outlined"
            onClick={() => handleWalletSelection('Paytm')}
            style={{ marginBottom: '10px' }}
          >
            Paytm
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleWalletSelection('Google Pay')}
            style={{ marginBottom: '10px' }}
          >
            Google Pay
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleWalletSelection('Apple Pay')}
            style={{ marginBottom: '10px' }}
          >
            Apple Pay
          </Button>
          {/* Add more wallet options as needed */}

          <Button
            variant="contained"
            color="primary"
            onClick={handleProceedPayment}
            disabled={!selectedWallet}
          >
            Proceed with Payment
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default WalletPaymentMode;