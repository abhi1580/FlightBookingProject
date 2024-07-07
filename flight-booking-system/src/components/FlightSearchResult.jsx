import React, { useState } from "react";
import dayjs from "dayjs";
import flightSchedule from "./database/flightSchedule";
import FlightResultCard from "./FlightResultCard";
import FlightSummary from "./FlightSummary";
import { Grid, Card, CardContent, Button } from "@mui/material";
import NavigateNextSharpIcon from "@mui/icons-material/NavigateNextSharp";

const FlightSearchResult = ({ flight }) => {
  const [selectedFlights, setSelectedFlights] = useState({
    departure: null,
    return: null,
  });

  const formatDayjsDate = (date) => {
    return date ? dayjs(date, "DD-MM-YYYY").format("DD MMM YYYY") : null;
  };

  const departureDate = formatDayjsDate(flight.departureDate);
  const returnDate = flight.returnTrip
    ? formatDayjsDate(flight.returnDate)
    : null;

  // Filter departure flights
  const departureFlights = flightSchedule.filter(
    (f) =>
      f.from === flight.from &&
      f.to === flight.to &&
      dayjs(f.departure_date, "DD-MM-YYYY").isSame(departureDate, "day")
  );

  // Filter return flights
  const returnFlights = flightSchedule.filter(
    (f) =>
      f.from === flight.to &&
      f.to === flight.from &&
      dayjs(f.departure_date, "DD-MM-YYYY").isSame(returnDate, "day")
  );

  const handleSelectFlight = (flightData, type) => {
    setSelectedFlights((prev) => ({
      ...prev,
      [type]: prev[type]?.id === flightData.id ? null : flightData,
    }));
  };

  const totalFare =
    (selectedFlights.departure?.rate || 0) +
    (selectedFlights.return?.rate || 0);

  const [showSummary, setShowSummary] = useState(false);

  const toggleSummary = () => {
    setShowSummary(!showSummary);
  };

  // Prepare separate objects for departure and return trip details
  const departureTripDetails = {
    from: flight.from,
    to: flight.to,
    departureDate: departureDate,
    travellers: flight.travellers,
    flightClass: flight.flightClass,
  };

  const returnTripDetails = flight.returnTrip
    ? {
        from: flight.to,
        to: flight.from,
        returnDate: returnDate,
        travellers: flight.travellers,
        flightClass: flight.flightClass,
      }
    : null;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {!showSummary && (
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          {/* Displaying both departure and return flights side by side */}
          {departureFlights.map((departureFlight) => (
            <Grid container item xs={12} key={departureFlight.id}>
              <Grid item xs={6}>
                <FlightResultCard
                  cardData={departureFlight}
                  onSelect={(data) => handleSelectFlight(data, "departure")}
                  isSelected={selectedFlights.departure?.id === departureFlight.id}
                />
              </Grid>
              {flight.returnTrip && (
                <Grid item xs={6}>
                  {returnFlights.map((returnFlight) => (
                    <FlightResultCard
                      key={returnFlight.id}
                      cardData={returnFlight}
                      onSelect={(data) => handleSelectFlight(data, "return")}
                      isSelected={selectedFlights.return?.id === returnFlight.id}
                    />
                  ))}
                </Grid>
              )}
            </Grid>
          ))}
        </Grid>
      )}
      {!showSummary && totalFare*flight.travellers > 0 && (
        <Card
          sx={{
            position: "fixed", // Changed from "sticky" to "fixed"
            bottom: 0,
            right: 0, // Adjusted to right align
            margin: "20px", // Added margin for spacing
            textAlign: "right",
            minWidth: 300,
          }}
        >
          <CardContent>
            <Button
              sx={{ fontSize: "20px" }}
              size="large"
              variant="outlined"
              onClick={toggleSummary}
            >
              Total Fare: &#8377;{totalFare*flight.travellers}
              <NavigateNextSharpIcon />
            </Button>
          </CardContent>
        </Card>
      )}
      {/* Display Flight Summary */}
      {showSummary && (
        <FlightSummary
          departureTrip={departureTripDetails}
          returnTrip={returnTripDetails}
          totalFare={totalFare*flight.travellers}
        />
      )}
    </div>
  );
};

export default FlightSearchResult;
