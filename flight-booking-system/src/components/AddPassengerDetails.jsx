import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Paper,
} from "@mui/material";

const AddPassengerDetails = ({ numberOfPassengers, onSubmit,departureTrip,returnTrip }) => {
  const initialPassenger = {
    fullName: "",
    age: "",
    salutation: "",
    gender: "",
    mobileNumber: "",
    email: "",
    address: "",
  };

  const [passengerDetails, setPassengerDetails] = useState([initialPassenger]);

  const handleAddPassenger = () => {
    setPassengerDetails((prevDetails) => [...prevDetails, initialPassenger]);
  };

  const handleChange = (index, field, value) => {
    setPassengerDetails((prevDetails) =>
      prevDetails.map((passenger, i) =>
        i === index ? { ...passenger, [field]: value } : passenger
      )
    );
  };

  const handleSubmit = () => {
    onSubmit(passengerDetails);
  };
  console.log("Departure trip :",departureTrip)
  console.log("Return trip :",returnTrip)

  return (
    <Paper sx={{ padding: 2, marginTop: 2 }}>
      <Typography variant="h6" gutterBottom>
        Add Passenger Details
      </Typography>
      <Grid container spacing={2}>
        {passengerDetails.map((passenger, index) => (
          <Grid item xs={12} key={index}>
            <FormControl fullWidth sx={{ marginBottom: 1 }}>
              <InputLabel>Salutation</InputLabel>
              <Select
                value={passenger.salutation}
                onChange={(e) =>
                  handleChange(index, "salutation", e.target.value)
                }
              >
                <MenuItem value="Mr">Mr</MenuItem>
                <MenuItem value="Mrs">Mrs</MenuItem>
                <MenuItem value="Miss">Miss</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="subtitle1">Passenger {index + 1}</Typography>
            <TextField
              label="Full Name"
              fullWidth
              value={passenger.fullName}
              onChange={(e) => handleChange(index, "fullName", e.target.value)}
              sx={{ marginBottom: 1 }}
            />
            <TextField
              label="Age"
              type="number"
              fullWidth
              value={passenger.age}
              onChange={(e) => handleChange(index, "age", e.target.value)}
              sx={{ marginBottom: 1 }}
            />
            
            <FormControl component="fieldset" sx={{ marginBottom: 1 }}>
              <RadioGroup
                row
                value={passenger.gender}
                onChange={(e) => handleChange(index, "gender", e.target.value)}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              label="Mobile Number"
              fullWidth
              value={passenger.mobileNumber}
              onChange={(e) =>
                handleChange(index, "mobileNumber", e.target.value)
              }
              sx={{ marginBottom: 1 }}
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={passenger.email}
              onChange={(e) => handleChange(index, "email", e.target.value)}
              sx={{ marginBottom: 1 }}
            />
            <TextField
              label="Address"
              multiline
              fullWidth
              value={passenger.address}
              onChange={(e) => handleChange(index, "address", e.target.value)}
              sx={{ marginBottom: 1 }}
            />
          </Grid>
        ))}
        {numberOfPassengers > 1 && (
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddPassenger}
            >
              Add Another Passenger
            </Button>
          </Grid>
        )}
        {passengerDetails.length > 0 && (
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Submit Passengers
            </Button>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

export default AddPassengerDetails;
