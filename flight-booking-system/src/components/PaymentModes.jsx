import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";

import CardPaymentMode from "./CardPaymentMode";
import UpiPaymentMode from "./UpiPaymentMode";
import NetBankingPaymentMode from "./NetBankingPaymentMode";
import WalletPaymentMode from "./WalletPaymentMode"; // Import WalletPaymentMode component

const PaymentModes = () => {
  const [typeOfPayment, setTypeOfPayment] = useState('Upi');

  // Function to render the selected payment mode component
  const renderPaymentMode = () => {
    switch (typeOfPayment) {
      case 'Upi':
        return <UpiPaymentMode />;
      case 'Card':
        return <CardPaymentMode />;
      case 'NetBanking':
        return <NetBankingPaymentMode />;
      case 'Wallet': // Render WalletPaymentMode component
        return <WalletPaymentMode />;
      default:
        return null; // Handle default case if needed
    }
  };

  return (
    <Box style={{ marginTop: "50px" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Payment Mode
              </Typography>
              <Button
                onClick={() => setTypeOfPayment('Upi')}
                variant="outlined"
                fullWidth
                style={{ marginBottom: "10px" }}
              >
                UPI Pay
              </Button>
              <Button
                onClick={() => setTypeOfPayment('Card')}
                variant="outlined"
                fullWidth
                style={{ marginBottom: "10px" }}
              >
                Debit Card / Credit Card
              </Button>
              <Button
                onClick={() => setTypeOfPayment('NetBanking')}
                variant="outlined"
                fullWidth
                style={{ marginBottom: "10px" }}
              >
                Net Banking
              </Button>
              <Button
                onClick={() => setTypeOfPayment('Wallet')} 
                variant="outlined"
                fullWidth
                style={{ marginBottom: "10px" }}
              >
                Wallet
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          {renderPaymentMode()} {/* Call the function to render selected payment mode */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentModes;
