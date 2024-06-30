//A component to show all cards of avalaible flights

import React from "react";
import dayjs from "dayjs";

import flightSchedule from "./database/flightSchedule";
import FlightResultCard from "./FlightResultCard";
import {Grid} from "@mui/material"

const FlightSearchResult = ({ flight }) => {
  const formatDayjsDate = (date) => {
    return date ? dayjs(date).format("DD-MM-YYYY") : null;
  };
  const propDate = formatDayjsDate(flight.departureDate);

  const fs = flightSchedule.filter((f) => f.departure_date === propDate);
  const singleS = fs.map((sf) => (
    <FlightResultCard key={sf.id} cardData={sf} departureDate={propDate}/>
  ));
//   console.log(fs);
  return (
    <Grid item xs={12} sm={6} md={3}>

        {singleS}
    </Grid>
  );
};

export default FlightSearchResult;
