import React, { useState } from "react";
import { Grid, Typography, Paper, Button } from "@mui/material";
import dayjs from "dayjs";
import AddPassengerDetails from "./AddPassengerDetails";

const FlightSummary = ({ departureTrip, returnTrip, totalFare }) => {
  console.log("Departure data :",departureTrip)
  console.log("ReturnTrip data :",returnTrip)
  console.log("Total Fare data :",totalFare)
  const [showPassengerDetails, setShowPassengerDetails] = useState(false);

  const handleAddPassengerDetails = () => {
    setShowPassengerDetails(true);
  };

  const handleSubmitPassengers = (passengerDetails) => {
    // Implement logic to handle submitted passenger details
    console.log("Submitted passengers:", passengerDetails);
    // Example: Send data to server, update state, etc.
  };

  const formatDayjsDate = (date) => {
    return date ? dayjs(date, "DD-MM-YYYY").format("DD MMM YYYY") : null;
  };

  return (
    <Paper sx={{ minWidth: 600, padding: 2, marginTop: 2 }}>
      <Grid container spacing={2}>
        {/* Departure Trip Details */}
        <Grid item xs={6}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ borderBottom: "1px solid #ccc", paddingBottom: 1 }}
          >
            Departure Trip Details
          </Typography>
          <Typography variant="body1">
            <strong>From:</strong> {departureTrip.from}
          </Typography>
          <Typography variant="body1">
            <strong>To:</strong> {departureTrip.to}
          </Typography>
          <Typography variant="body1">
            <strong>Departure Date:</strong>{" "}
            {(departureTrip.departureDate)}
          </Typography>
          <Typography variant="body1">
            <strong>Travellers:</strong> {departureTrip.travellers}
          </Typography>
          <Typography variant="body1">
            <strong>Class:</strong> {departureTrip.flightClass}
          </Typography>
        </Grid>

        {/* Return Trip Details */}
        {returnTrip && (
          <Grid item xs={6}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ borderBottom: "1px solid #ccc", paddingBottom: 1 }}
            >
              Return Trip Details
            </Typography>
            <Typography variant="body1">
              <strong>From:</strong> {returnTrip.from}
            </Typography>
            <Typography variant="body1">
              <strong>To:</strong> {returnTrip.to}
            </Typography>
            <Typography variant="body1">
              <strong>Return Date:</strong>{" "}
              {(returnTrip.returnDate)}
            </Typography>
            <Typography variant="body1">
              <strong>Travellers:</strong> {returnTrip.travellers}
            </Typography>
            <Typography variant="body1">
              <strong>Class:</strong> {returnTrip.flightClass}
            </Typography>
          </Grid>
        )}

        {/* Total Fare */}
        <Grid item xs={12}>
          <Typography
            variant="body1"
            sx={{ borderTop: "1px solid #ccc", paddingTop: 1, marginTop: 2 }}
          >
            <strong>Total Fare:</strong> &#8377;{totalFare}
          </Typography>
        </Grid>

        {/* Add Passenger Details Button */}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddPassengerDetails}
            sx={{ marginTop: 2 }}
          >
            Add Passenger Details
          </Button>
        </Grid>
      </Grid>

      {/* Add Passenger Details Form */}
      {showPassengerDetails && (
        <AddPassengerDetails
          onSubmit={handleSubmitPassengers}
          numberOfPassengers={departureTrip.travellers}
          departureTrip={departureTrip}
          returnTrip={returnTrip}
        />
      )}
    </Paper>
  );
};

export default FlightSummary;
