import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Button } from '@mui/material';

const flights = [
    { airline: "IndiGo", from: "BLR", fromCity: "Bengaluru", date: "14 Jun 2024", to: "MAA", toCity: "Chennai", price: "₹1599" },
    { airline: "Air India", from: "MAA", fromCity: "Chennai", date: "01 Sep 2024", to: "BLR", toCity: "Bengaluru", price: "₹1599" },
    { airline: "Air India Express", from: "BOM", fromCity: "Mumbai", date: "17 Sep 2024", to: "AMD", toCity: "Ahmedabad", price: "₹1878" },
    { airline: "Akash Air", from: "AMD", fromCity: "Ahmedabad", date: "17 Sep 2024", to: "BOM", toCity: "Mumbai", price: "₹1878" }
];

const airlines = ["IndiGo", "Air India", "Air India Express", "Akash Air"];

const FlightSchedule = () => {
    return (
        <Container>
            <Grid container spacing={2} style={{ marginBottom: 20 }}>
                {airlines.map((airline) => (
                    <Grid item key={airline}>
                        <Button variant="outlined">{airline}</Button>
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h6" gutterBottom>Airlines</Typography>
            <Grid container spacing={2}>
                <Grid item xs={2}><Typography variant="body2">From</Typography></Grid>
                <Grid item xs={2}><Typography variant="body2">To</Typography></Grid>
                <Grid item xs={3}><Typography variant="body2">Cheapest Fare</Typography></Grid>
            </Grid>
            {flights.map((flight, index) => (
                <Card key={index} style={{ marginBottom: 20 }}>
                    <CardContent>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={2}>
                                <Typography variant="body2"><strong>{flight.from}</strong></Typography>
                                <Typography variant="caption">{flight.fromCity}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="body2">{flight.date}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="body2"><strong>{flight.to}</strong></Typography>
                                <Typography variant="caption">{flight.toCity}</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="body2">{flight.price}</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
}

export default FlightSchedule;