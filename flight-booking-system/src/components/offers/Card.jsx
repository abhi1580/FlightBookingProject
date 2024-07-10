import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import CardDialog from './CardDialog'; // Import the dialog component

const CustomCard = ({ title, description, image, moreInfo }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, margin: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <CardMedia component="img" height="200" image={image} alt="card image" />
        <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center', paddingBottom: '16px' }}>
          <Button
            variant="contained"
            size="large"
            onClick={handleDialogOpen}
            sx={{ width: '100%', maxWidth: 250 }}
          >
            View More Details
          </Button>
        </CardActions>
      </Card>

      <CardDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        title={title}
        description={description}
        image={image}
        moreInfo={moreInfo}
      />
    </>
  );
};

export default CustomCard;
