import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";

const FlightResultCard = ({ cardData, onSelect, isSelected }) => {
  const handleSelect = () => {
    onSelect(cardData);
  };

  return (
    <Paper
      sx={{
        border: isSelected ? "2px solid blue" : "1px solid gray",
        margin: "10px",
        cursor: "pointer",
      }}
      onClick={handleSelect}
    >
      <TableContainer sx={{ padding: 0 }}>
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
                <Typography sx={{ fontWeight: 600 }}>
                  &#8377;{cardData.rate}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default FlightResultCard;
