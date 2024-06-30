//A component to show single card of avalaible flight
import React from "react";
import { Grid, Button, Typography } from "@mui/material";

const FlightResultCard = ({ cardData }) => {
  // console.log(cardData.duration)
  return (
    <Grid container sx={{ padding: "10px ", margin: "1%" }} spacing={2}>
      <Grid item xs={1}>
        <img src={cardData.airline_logo} alt="img" />
      </Grid>
      <Grid item xs={2}>
        <Typography>{cardData.airline_name}</Typography>
        <Typography>{cardData.departure_date}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{cardData.departure_time}</Typography>
        <Typography>{cardData.from}</Typography>
      </Grid>

      <Grid item xs={2}>
        <Typography>Duration</Typography>
        <Typography>{cardData.duration}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{cardData.landing_time}</Typography>
        <Typography>{cardData.to}</Typography>
      </Grid>

      <Grid item xs={2} padding={2}>
        <Button
          type="submit"
          sx={{ width: "50%", height: "100%" }}
          variant="contained"
          color="primary"
        >
          Book
        </Button>
      </Grid>
    </Grid>
  );
};

export default FlightResultCard;
