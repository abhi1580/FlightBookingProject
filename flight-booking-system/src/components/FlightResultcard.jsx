//A component to show single card of avalaible flight
import React from "react";
import SG from "./airlinelogos/SG.png"
import { Grid } from "@mui/material";

const FlightResultcard = () => {
  return <Grid item xs={12} sm={6} md={3}>

<img src={SG} alt="img"/>
  </Grid>;
};

export default FlightResultcard;
