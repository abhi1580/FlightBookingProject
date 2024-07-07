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

const AddPassengerDetails = ({
  numberOfPassengers,
  onSubmit,
  departureTrip,
  returnTrip,
}) => {
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
    if (passengerDetails.length < numberOfPassengers) {
      setPassengerDetails((prevDetails) => [...prevDetails, initialPassenger]);
    }
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

  const renderPassengerForms = () => {
    let rows = [];
    for (let i = 0; i < Math.ceil(passengerDetails.length / 2); i++) {
      const start = i * 2;
      const end = Math.min(start + 2, passengerDetails.length);
      const rowPassengers = passengerDetails.slice(start, end);
      rows.push(
        <Grid container spacing={2} key={i}>
          {rowPassengers.map((passenger, index) => (
            <Grid item xs={12} sm={6} key={start + index}>
              <Typography variant="subtitle1">
                Passenger {start + index + 1}
              </Typography>
              <FormControl fullWidth sx={{ marginBottom: 1 }}>
                <InputLabel>Salutation</InputLabel>
                <Select
                  value={passenger.salutation}
                  onChange={(e) =>
                    handleChange(start + index, "salutation", e.target.value)
                  }
                >
                  <MenuItem value="Mr">Mr</MenuItem>
                  <MenuItem value="Mrs">Mrs</MenuItem>
                  <MenuItem value="Miss">Miss</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Full Name"
                fullWidth
                value={passenger.fullName}
                onChange={(e) =>
                  handleChange(start + index, "fullName", e.target.value)
                }
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Age"
                type="number"
                fullWidth
                value={passenger.age}
                onChange={(e) =>
                  handleChange(start + index, "age", e.target.value)
                }
                sx={{ marginBottom: 1 }}
              />

              <FormControl component="fieldset" sx={{ marginBottom: 1 }}>
                <RadioGroup
                  row
                  value={passenger.gender}
                  onChange={(e) =>
                    handleChange(start + index, "gender", e.target.value)
                  }
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
                  handleChange(start + index, "mobileNumber", e.target.value)
                }
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                value={passenger.email}
                onChange={(e) =>
                  handleChange(start + index, "email", e.target.value)
                }
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Address"
                multiline
                fullWidth
                value={passenger.address}
                onChange={(e) =>
                  handleChange(start + index, "address", e.target.value)
                }
                sx={{ marginBottom: 1 }}
              />
            </Grid>
          ))}
        </Grid>
      );
    }
    return rows;
  };

  return (
    <Paper sx={{ padding: 2, marginTop: 2 }}>
      <Typography variant="h6" gutterBottom>
        Add Passenger Details
      </Typography>
      {renderPassengerForms()}
      {passengerDetails.length < numberOfPassengers && (
        <Grid container justifyContent="flex-end" spacing={2}>
          <Grid item>
            <Button  sx={{margin:2}}
              variant="contained"
              color="primary"
              onClick={handleAddPassenger}
            >
              Add Another Passenger
            </Button>
          </Grid>
        </Grid>
      )}
      {passengerDetails.length > 0 && (
        <Grid container justifyContent="flex-end" spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit Passengers
            </Button>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};

export default AddPassengerDetails;
