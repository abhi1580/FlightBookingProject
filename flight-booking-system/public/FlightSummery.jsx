import React from 'react'
import dayjs from "dayjs";


const FlightSummery = ({flight}) => {
    const formatDayjsDate = (date) => {
        return date ? dayjs(date).format("DD-MM-YYYY") : null;
      };
    
  return (
    <div>
        <h2>"From:" {flight.from}</h2>
          <h2> "To:" {flight.to}</h2>
          <h2> "Return Trip:" {flight.returnTrip}</h2>
          <h2>
            "Departure Date:" {formatDayjsDate(flight.departureDate)}
          </h2>
          <h2>"Return Date:" {formatDayjsDate(flight.returnDate)}</h2>

          {/* <h2>"Departure Date:" {flightDetails.departureDate}</h2> */}
          {/* <h2>"Return Date:" {formatDayjsDate(flightDetails.returnDate)}</h2> */}
          <h2>"Travellers:" {flight.travellers}</h2>
          <h2> "Flight Class:" {flight.flightClass}</h2>
    </div>
  )
}

export default FlightSummery