import * as React from "react";
// import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
// import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import airportData from "./database/airportData";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
const today = dayjs()
const FlightSearch = () => {
  console.log(new Date());
  return (
    <Box
      sx={{
        flexGrow: 1,
        marginTop: "100px",
        padding: "80px",
        backgroundColor: "pink",
        border:"2px solid black"
      }}
    >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={airportData}
            getOptionLabel={(option) =>
              `${option.airport_name} (${option.IATA_code})`
            } // Combine airport_name and IATA_code
            renderInput={(params) => <TextField {...params} label="From" />}
          />
        </Grid>
        <Grid item xs={2}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={airportData}
            getOptionLabel={(option) =>
              `${option.airport_name} (${option.IATA_code})`
            } // Combine airport_name and IATA_code
            renderInput={(params) => <TextField {...params} label="To" />}
          />
        </Grid>
        <Grid item xs={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              defaultValue={today}
              disablePast
              views={["year", "month", "day"]}
              label="Date of Departure"
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Date of Return" />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="outlined-basic"
            label="No of passangers"
            variant="outlined"
            sx={{ width: "100%" }}
            inputProps={{ type: "number", min: 1, max: 20 }}
          />
        </Grid>
        <Grid item xs={2}>
          <Button sx={{ width: "80%", height: "100%" }} variant="contained">
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FlightSearch;
