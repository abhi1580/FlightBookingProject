import React, { useState } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import airlines from "./database/airlines";
import FlightSearchResults from "./FlightSearchResults";

const cardStyle = {
  borderRadius: "15px",
  boxShadow: "0 3px 5px 2px rgba(105, 135, 255, .3)",
  padding: "20px", // Increased padding for better spacing
  marginBottom: "20px",
  marginTop: "5px",
};

const logoStyle = {
  display: "block",
  margin: "20px",
  width: "60px", // Increased logo size for better visibility
  height: "60px",
  cursor: "pointer", // Added cursor pointer for indicating clickable element
};

const gridContainerStyle = {
  display: "flex",
  justifyContent: "center", // Center items horizontally
  gap: "20px", // Added gap between grid items
};

const PopularAirlinesCard = () => {
  const [selectedAirline, setSelectedAirline] = useState(null);

  const handleAirlineClick = (airline) => {
    setSelectedAirline(airline.name);
  };

  return (
    <Card style={cardStyle}>
      <CardContent>
        <Typography variant="h6" gutterBottom align="center">
          <u>Popular Domestic Airlines Schedule</u>
        </Typography>
        <Grid
          container
          style={gridContainerStyle}
          alignItems="center"
          spacing={5}
        >
          {airlines.map((airline) => (
            <Grid item key={airline.name}>
              <img
                src={airline.logo}
                alt={airline.name}
                style={logoStyle}
                onClick={() => handleAirlineClick(airline)}
              />
              <Typography variant="body2" align="center">
                {airline.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
        {selectedAirline && (
          <div style={{ marginTop: "20px" }}>
            <Typography variant="h6" gutterBottom align="center">
              {selectedAirline} Schedule
            </Typography>
            <FlightSearchResults airline={selectedAirline} />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PopularAirlinesCard;
