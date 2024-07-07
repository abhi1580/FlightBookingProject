import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const FlightCard = ({
  from,
  to,
  duration,
  rate,
  departureDate,
  departureTime,
  landingTime,
  logo,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        mb: 2,
        boxShadow: "0px 2px 2px 2px",
        borderRadius: 8,
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Grid container spacing={2} alignItems="center">
          {/* Airline Logo */}
          <Grid item xs={12} sm={2}>
            <img
              src={logo}
              alt="Airline Logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>

          {/* Flight Details */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              {from}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Departure Time: {departureTime}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Departure Date: {departureDate}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="body1" color="text.primary" align="center">
              Duration: {duration}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom align="right">
              {to}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="right">
              Landing Time: {landingTime}
            </Typography>
            <Typography variant="body1" color="text.primary" align="right">
              Fare: ₹{rate}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FlightCard;
