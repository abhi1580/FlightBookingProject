import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, TextField, Box, Button } from '@mui/material';

const CardPaymentMode = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [errors, setErrors] = useState({});

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    setCardNumber('');
    setCardExpiry('');
    setCardCVV('');
    setErrors({});
  };

  const validateCardNumber = (number) => {
    const cardNumberRegex = /^[0-9]{16}$/; // 16 digits
    return cardNumberRegex.test(number);
  };

  const validateCardExpiry = (expiry) => {
    const cardExpiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; // MM/YY format
    return cardExpiryRegex.test(expiry);
  };

  const validateCardCVV = (cvv) => {
    const cardCVVRegex = /^[0-9]{3}$/; // 3 digits
    return cardCVVRegex.test(cvv);
  };

  const handleValidation = () => {
    let tempErrors = {};
    if (!validateCardNumber(cardNumber)) {
      tempErrors.cardNumber = "Invalid card number. Must be 16 digits.";
    }
    if (!validateCardExpiry(cardExpiry)) {
      tempErrors.cardExpiry = "Invalid expiry date. Must be in MM/YY format.";
    }
    if (!validateCardCVV(cardCVV)) {
      tempErrors.cardCVV = "Invalid CVV. Must be 3 digits.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleValidation()) {
      // Log details to the console
      console.log({
        paymentMethod,
        cardNumber,
        cardExpiry,
        cardCVV,
      });
      // Handle form submission
      alert('Payment details are valid and submitted.');
    } else {
      alert('Please correct the errors in the form.');
    }
  };

  const handleInputChange = (setter) => (event) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) { // Only allow numeric input
      setter(value);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Payment Method</FormLabel>
        <RadioGroup
          aria-label="payment method"
          name="payment-method"
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
        >
          <FormControlLabel value="credit" control={<Radio />} label="Credit Card" />
          <FormControlLabel value="debit" control={<Radio />} label="Debit Card" />
        </RadioGroup>
      </FormControl>

      {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
        <Box>
          <TextField
            label={`${paymentMethod === 'credit' ? 'Credit' : 'Debit'} Card Number`}
            variant="outlined"
            fullWidth
            margin="normal"
            value={cardNumber}
            onChange={handleInputChange(setCardNumber)}
            error={!!errors.cardNumber}
            helperText={errors.cardNumber}
            inputProps={{ maxLength: 16 }}
          />
          <TextField
            label="Card Expiry Date (MM/YY)"
            variant="outlined"
            fullWidth
            margin="normal"
            value={cardExpiry}
            onChange={handleInputChange(setCardExpiry)}
            error={!!errors.cardExpiry}
            helperText={errors.cardExpiry}
            inputProps={{ maxLength: 5 }}
          />
          <TextField
            label="Card CVV"
            variant="outlined"
            fullWidth
            margin="normal"
            value={cardCVV}
            onChange={handleInputChange(setCardCVV)}
            error={!!errors.cardCVV}
            helperText={errors.cardCVV}
            inputProps={{ maxLength: 3 }}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CardPaymentMode;
