import * as React from "react";
import { useState } from "react";
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
import dayjs from "dayjs"; // Import dayjs for date manipulation
import airportData from "./database/airportData";

const FlightSearch = () => {
  const [flightDetails, setFlightDetails] = useState({
    from: "",
    to: "",
    departureDate: null,
    returnDate: null,
    returnTrip: false,
    flightClass: "",
  });

  const handleChangeFlightDetails = (field, value) => {
    setFlightDetails({
      ...flightDetails,
      [field]: value,
    });
  };

  const handleChangeReturnTrip = (event) => {
    const isChecked = event.target.checked;
    if (!isChecked) {
      setFlightDetails({
        ...flightDetails,
        returnDate: null,
      });
    }
    setFlightDetails({
      ...flightDetails,
      returnTrip: isChecked,
    });
  };

  const handleChangeFlightClass = (event) => {
    handleChangeFlightDetails("flightClass", event.target.value);
  };

  const handleDepartureDateChange = (date) => {
    if (dayjs(date).isValid()) {
      setFlightDetails({
        ...flightDetails,
        departureDate: date,
      });
    }
  };

  const handleReturnDateChange = (date) => {
    if (dayjs(date).isValid()) {
      setFlightDetails({
        ...flightDetails,
        returnDate: date,
      });
    }
  };

  const handleSearch = () => {
    console.log(flightDetails);
    // Replace with actual search logic
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        marginTop: "100px",
        padding: "20px",
        border: "2px solid black",
        margin: "5px",
      }}
    >
      <Grid container spacing={2}>
        {/* From Autocomplete */}
        <Grid item xs={12} sm={6} md={3}>
          <Autocomplete
            disablePortal
            id="from-autocomplete"
            options={airportData}
            getOptionLabel={(option) =>
              `${option.airport_name} (${option.IATA_code})`
            }
            renderInput={(params) => (
              <TextField
                onChange={(e) =>
                  handleChangeFlightDetails("from", e.target.value)
                }
                {...params}
                label="From"
                fullWidth
              />
            )}
          />
        </Grid>

        {/* To Autocomplete */}
        <Grid item xs={12} sm={6} md={3}>
          <Autocomplete
            disablePortal
            id="to-autocomplete"
            options={airportData}
            getOptionLabel={(option) =>
              `${option.airport_name} (${option.IATA_code})`
            }
            renderInput={(params) => (
              <TextField
                onChange={(e) =>
                  handleChangeFlightDetails("to", e.target.value)
                }
                {...params}
                label="To"
                fullWidth
              />
            )}
          />
        </Grid>

        {/* Round Trip Checkbox */}
        <Grid item xs={12} sm={6} md={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={flightDetails.returnTrip}
                onChange={handleChangeReturnTrip}
                name="returnTrip"
              />
            }
            label="Round Trip"
          />
        </Grid>

        {/* Departure DatePicker */}
        <Grid item xs={12} sm={6} md={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              disablePast
              views={["year", "month", "day"]}
              label="Departure"
              value={flightDetails.departureDate}
              onChange={handleDepartureDateChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>

        {/* Return DatePicker */}
        <Grid item xs={12} sm={6} md={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Return"
              value={flightDetails.returnDate}
              onChange={handleReturnDateChange}
              disabled={!flightDetails.returnTrip}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>

        {/* Travellers TextField */}
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            id="travellers-input"
            label="Travellers"
            variant="outlined"
            sx={{ width: "100%" }}
            inputProps={{ type: "number", min: 1, max: 20 }}
            fullWidth
          />
        </Grid>

        {/* Class Select */}
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel id="class-select-label">Class</InputLabel>
            <Select
              labelId="class-select-label"
              id="class-select"
              value={flightDetails.flightClass}
              label="Class"
              onChange={handleChangeFlightClass}
              fullWidth
            >
              <MenuItem value={"Economy"}>Economy</MenuItem>
              <MenuItem value={"Premium Economy"}>Premium Economy</MenuItem>
              <MenuItem value={"Business"}>Business</MenuItem>
            </Select>
          </FormControl>
        </Grid>

         {/* Search Button */}
         <Grid item xs={12} sm={6} md={3}>
          <Button
            sx={{ width: "100%", height: "100%" }}
            variant="contained"
            color="primary"
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FlightSearch;
