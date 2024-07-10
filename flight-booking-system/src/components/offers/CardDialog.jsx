import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';

const CardDialog = ({ open, onClose, title, description, image, moreInfo }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        <Card sx={{width: 550}}>
          <CardMedia component="img" height="200" image={image} alt="card image" />
          <CardContent>
            <Typography variant="body1" color="text.dark">
              {description}
            </Typography>
            {moreInfo && moreInfo.length > 0 && (
              <>
                <Typography variant="subtitle1" color="dark" mt={2}>
                  More Information:
                </Typography>
                <ul>
                  {moreInfo.map((info, index) => (
                    <li key={index}>
                      <Typography variant="body2">{info}</Typography>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </CardContent>
        </Card>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CardDialog;