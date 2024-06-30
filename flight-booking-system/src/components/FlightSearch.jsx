import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Autocomplete,
  MenuItem,
  Select,
  Button,
  InputLabel,
  FormControl,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import airportData from "./database/airportData";
import FlightSearchResult from "./FlightSearchResult";
import FlightResultcard from "./FlightResultcard";

const FlightSearch = () => {
  const [flightDetails, setFlightDetails] = useState({
    from: "",
    to: "",
    departureDate: null,
    returnDate: null,
    returnTrip: false,
    flightClass: "",
    travellers: 1,
  });

  const handleChangeFlightDetails = (field, value) => {
    setFlightDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleChangeReturnTrip = (event) => {
    const isChecked = event.target.checked;
    setFlightDetails((prev) => ({
      ...prev,
      returnTrip: isChecked,
      returnDate: isChecked ? prev.returnDate : null,
    }));
  };

  const formatDayjsDate = (date) => {
    return date ? dayjs(date).format("DD-MM-YYYY") : null;
  };

  const handleDateChange = (date, field) => {
    setFlightDetails((prev) => ({
      ...prev,
      [field]: date instanceof Date || dayjs.isDayjs(date) ? date : null,
    }));
  };

  const handleTravellersChange = (event) => {
    const value = event.target.value;
    if (value >= 1 && value <= 20) {
      handleChangeFlightDetails("travellers", value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Validation
    const { from, to, departureDate, returnDate, returnTrip } = flightDetails;
    if (!from || !to || !departureDate || (returnTrip && !returnDate)) {
      alert("Please fill out all required fields.");
      return;
    }

    if (from === to) {
      alert("Departure and destination airports cannot be the same.");
      return;
    }

    if (returnTrip && dayjs(returnDate).isSame(dayjs(departureDate), "day")) {
      alert("Return date cannot be the same as the departure date.");
      return;
    }

    if (returnTrip && dayjs(returnDate).isBefore(dayjs(departureDate), "day")) {
      alert("Return date cannot be before the departure date.");
      return;
    }

    // If all validations pass, proceed with search logic
    // console.log(flightDetails.returnDate.$d)
    // Implement your search logic here
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2, padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Autocomplete
              disablePortal
              options={airportData}
              getOptionLabel={(option) =>
                `${option.airport_name} (${option.IATA_code})`
              }
              onChange={(event, value) =>
                handleChangeFlightDetails(
                  "from",
                  value ? value.IATA_code : ""
                )
              }
              renderInput={(params) => (
                <TextField {...params} label="From" fullWidth />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Autocomplete
              disablePortal
              options={airportData}
              getOptionLabel={(option) =>
                `${option.airport_name} (${option.IATA_code})`
              }
              onChange={(event, value) =>
                handleChangeFlightDetails("to", value ? value.IATA_code : "")
              }
              renderInput={(params) => (
                <TextField {...params} label="To" fullWidth />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={flightDetails.returnTrip}
                  onChange={handleChangeReturnTrip}
                />
              }
              label="Round Trip"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                disablePast
                label="Departure"
                value={flightDetails.departureDate}
                onChange={(date) => handleDateChange(date, "departureDate")}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                disablePast
                label="Return"
                value={flightDetails.returnDate}
                onChange={(date) => handleDateChange(date, "returnDate")}
                disabled={!flightDetails.returnTrip}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Travellers"
              type="number"
              inputProps={{ min: 1, max: 20 }}
              value={flightDetails.travellers}
              onChange={handleTravellersChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Class</InputLabel>
              <Select
                required
                value={flightDetails.flightClass}
                onChange={(event) =>
                  handleChangeFlightDetails("flightClass", event.target.value)
                }
              >
                <MenuItem value="Economy">Economy</MenuItem>
                <MenuItem value="Premium Economy">Premium Economy</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              type="submit"
              sx={{ width: "100%", height: "100%" }}
              variant="contained"
              color="primary"
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid container marginTop={3} spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <FlightSearchResult flight={flightDetails}/>
          <FlightResultcard/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FlightSearch;
