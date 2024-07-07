// App.js or any other component where you want to use the card
import React from 'react';
import PopularAirlinesCard from './PopularAirlinesCard';
import { Container } from '@mui/material';
import FlightSearchResults from './FlightSearchResults';
import PaymentModes from './PaymentModes';

const Demo = () => {
  return (
    <Container>
      <PopularAirlinesCard />
      <FlightSearchResults/>
      <PaymentModes/>
      
    </Container>
  );
};

export default Demo;
