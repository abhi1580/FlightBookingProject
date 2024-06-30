import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Button,
} from "@mui/material";

const FlightResultCard = ({ cardData }) => {
  return (
    <TableContainer sx={{ margin: "1%", padding: "10px" }}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <img src={cardData.airline_logo} alt="Airline Logo" />
            </TableCell>
            <TableCell>
              <Typography sx={{ fontWeight: 600 }}>
                {cardData.airline_name}
              </Typography>
              <Typography>{cardData.departure_date}</Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontWeight: 600 }}>
                {cardData.departure_time}
              </Typography>
              <Typography>{cardData.from}</Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontWeight: 600 }}>Duration</Typography>
              <Typography>{cardData.duration}</Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontWeight: 600 }}>
                {cardData.landing_time}
              </Typography>
              <Typography>{cardData.to}</Typography>
            </TableCell>
            <TableCell>
              
              <Typography sx={{ fontWeight: 600 }}>&#8377;{cardData.rate}</Typography>
            </TableCell>
            <TableCell>
              <Button
                type="submit"
                sx={{ width: "50%", height: "100%" }}
                variant="contained"
                color="primary"
              >
                Book
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FlightResultCard;
