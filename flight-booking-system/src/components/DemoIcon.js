import React from "react";
import FlightIcon from "@mui/icons-material/Flight";
import { Grid, Box } from "@mui/material";

const DemoIcon = () => {
  return (
    <Box sx={{ border: "2px solid black", padding: "5px" }}>
      <Grid>
        <FlightIcon sx={{ color: "red", border: "2px solid black" }} />
      </Grid>
    </Box>
  );
};

export default DemoIcon;
