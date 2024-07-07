import React, { useState } from "react";
import flightGallery from "./flightGallary_data";
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const FlightGallery = () => {
  const [show, setShow] = useState(Array(flightGallery.length).fill(false));

  const toggleShow = (index) => {
    const newShow = [...show];
    newShow[index] = !newShow[index];
    setShow(newShow);
  };

  return (
    <Carousel autoPlay={false}
      navButtonsAlwaysVisible 
      indicators={false}
      sx={{ maxWidth: 600, margin: '20px auto', position: 'relative' }}
      NextIcon={<ArrowForwardIos />}
      PrevIcon={<ArrowBackIos />}
      navButtonsProps={{
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
        }
      }}
      navButtonsWrapperProps={{
        style: {
          top: 'calc(50% - 20px)',
          height: '40px',
        }
      }}
    >
      {flightGallery.map((item, index) => (
        <Card
          key={index}
          sx={{
            backgroundImage: `url(${item.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: 2,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: 'white'
          }}
        >
          <CardContent sx={{ minHeight: 450, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box>
              <Typography marginBottom={3} variant="h4" component="h1" textAlign="center" fontWeight="bold">
                News & Stories
              </Typography>
              <Typography variant="h6" component="h3" textAlign="center">
                {item.Name}
              </Typography>
              <Box textAlign="center" sx={{ paddingLeft: '40px', paddingRight: '40px' }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.Name}
                  sx={{ borderRadius: 2, marginBottom: 2, width: '100%', height: 300 }}
                />
              </Box>
            </Box>
            <Button
              variant="contained"
              color="warning"
              onClick={() => toggleShow(index)}
              sx={{ display: 'block', margin: '0 auto 20px auto' }}
            >
              {show[index] ? "Hide details" : "Show More"}
            </Button>
            {/* Title is always visible */}
            <Box textAlign="center" marginBottom={2}>
              <Typography variant="h6" component="h3" fontWeight="bold">
                <u>{item.title}</u>
              </Typography>
            </Box>
            {/* Conditional content */}
            {show[index] && (
              <Box textAlign="center" marginBottom={2}>
                <table style={{ margin: '0 auto',  width: '100%' }}>
                  <tbody>
                    <tr>
                      <td style={{ fontSize: '16px' }}><p>{item.news}</p></td>
                    </tr>
                  </tbody>
                </table>
              </Box>
            )}
          </CardContent>
        </Card>
      ))}
    </Carousel>
  );
};

export default FlightGallery;
