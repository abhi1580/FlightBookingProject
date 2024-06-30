//A component to show all cards of avalaible flights

import React from "react";
import dayjs from "dayjs";

import flightSchedule from "./database/flightSchedule";

const FlightSearchResult = ({ flight }) => {
  const formatDayjsDate = (date) => {
    return date ? dayjs(date).format("DD-MM-YYYY") : null;
  };
//   console.log("Flightdetails from parent compo : ",formatDayjsDate(flight.departureDate))
  const fs = flightSchedule.filter((f) => f.from === flight.from&&f.to===flight.to);
  const singleS = fs.map((sf) => (
    <p key={sf.id}>
      From :{sf.from} To :{sf.to} Departure Date :{sf.departure_date} Departure
      Time :{sf.departure_time}
    </p>
  ));
  //   console.log(flight.from)
  console.log(fs);
  return (
    <div>
      {singleS}
      <h2>Departure Date form Details object : {flight.departure_date}</h2>
    </div>
  );
};

export default FlightSearchResult;
