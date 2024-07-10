import React from 'react';
import { Grid } from '@mui/material';
import FlightCard from './FlightCard'; // Ensure correct path to FlightCard component
import flightSchedule from './database/flightSchedule';

const FlightScheduleResults = ({ airline }) => {
  // Filter flights by selected airline (case insensitive)
  const filteredFlights = React.useMemo(() => {
    if (!airline) return [];
    const lowerCaseAirline = airline.toLowerCase();
    return flightSchedule.filter(flight => flight.airline_name.toLowerCase() === lowerCaseAirline);
  }, [airline]);

  return (
    <Grid container spacing={2}>
      {filteredFlights.map(({ id, airline_logo, from, to, duration, rate, departure_time, departure_date, landing_time }) => (
        <Grid item key={id} xs={12}>
          <FlightCard
            logo={airline_logo}
            from={from}
            to={to}
            duration={duration}
            rate={rate}
            departureTime={departure_time}
            departureDate={departure_date}
            landingTime={landing_time}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default FlightScheduleResults;