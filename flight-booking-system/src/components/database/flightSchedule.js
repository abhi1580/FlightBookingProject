import spicejet from "../airlinelogos/spicejet.png";
import indigo from "../airlinelogos/indigo.png";
import vistara from "../airlinelogos/vistara.png";
import airIndia from "../airlinelogos/airIndia.png";
import akasaAir from "../airlinelogos/akasaAir.png";
const flightSchedule = [
  {
    id: 1,
    airline_logo: spicejet,
    airline_name: "SpiceJet",
    from: "DEL",
    to: "AGX",
    duration: "2h 20m",
    rate: 4700,
    departure_date: "27-07-2024",
    departure_time: "9:30 AM",
    landing_time: "11:50 AM",
  },
  {
    id: 2,
    airline_logo: indigo,
    airline_name: "Indigo",
    from: "MAA",
    to: "AMD",
    duration: "1h 30m",
    rate: 3500,
    departure_date: "27-08-2024",
    departure_time: "11:00 AM",
    landing_time: "12:30 PM",
  },
  {
    id: 3,
    airline_logo: vistara,
    airline_name: "Vistara",
    from: "MAA",
    to: "AJL",
    duration: "1h 45m",
    rate: 3800,
    departure_date: "21-07-2024",
    departure_time: "1:15 PM",
    landing_time: "3:00 PM",
  },
  {
    id: 4,
    airline_logo: airIndia,
    airline_name: "AirIndia",
    from: "CCU",
    to: "AKD",
    duration: "1h 10m",
    rate: 3000,
    departure_date: "28-07-2024",
    departure_time: "3:00 PM",
    landing_time: "4:10 PM",
  },
  {
    id: 5,
    airline_logo: akasaAir,
    airline_name: "AkasaAir",
    from: "HYD",
    to: "IXV",
    duration: "2h 00m",
    rate: 4200,
    departure_date: "29-07-2024",
    departure_time: "5:10 PM",
    landing_time: "7:10 PM",
  },
  {
    id: 6,
    airline_logo: akasaAir,
    airline_name: "AkasaAir",
    from: "CCJ",
    to: "LKO",
    duration: "1h 20m",
    rate: 3600,
    departure_date: "28-07-2024",
    departure_time: "7:30 AM",
    landing_time: "8:50 AM",
  },
  {
    id: 7,
    airline_logo: spicejet,
    airline_name: "SpiceJet",
    from: "COK",
    to: "LUH",
    duration: "1h 15m",
    rate: 3400,
    departure_date: "28-07-2024",
    departure_time: "9:00 AM",
    landing_time: "10:15 AM",
  },
  {
    id: 8,
    airline_logo: indigo,
    airline_name: "Indigo",
    from: "GOI",
    to: "IXB",
    duration: "1h 45m",
    rate: 3800,
    departure_date: "28-07-2024",
    departure_time: "11:15 AM",
    landing_time: "1:00 PM",
  },
  {
    id: 9,
    airline_logo: vistara,
    airline_name: "Vistara",
    from: "BLR",
    to: "IXE",
    duration: "1h 30m",
    rate: 3500,
    departure_date: "28-07-2024",
    departure_time: "1:30 PM",
    landing_time: "3:00 PM",
  },
  {
    id: 10,
    airline_logo: airIndia,
    airline_name: "AirIndia",
    from: "BBI",
    to: "IXL",
    duration: "1h 40m",
    rate: 3700,
    departure_date: "28-07-2024",
    departure_time: "3:00 PM",
    landing_time: "4:40 PM",
  },
  {
    id: 11,
    airline_logo: akasaAir,
    airline_name: "AkasaAir",
    from: "BHO",
    to: "RGH",
    duration: "2h 10m",
    rate: 4500,
    departure_date: "28-07-2024",
    departure_time: "5:00 PM",
    landing_time: "7:10 PM",
  },
  {
    id: 12,
    airline_logo: indigo,
    airline_name: "Indigo",
    from: "IXZ",
    to: "IXD",
    duration: "1h 30m",
    rate: 3500,
    departure_date: "29-07-2024",
    departure_time: "7:30 AM",
    landing_time: "9:00 AM",
  },
  {
    id: 13,
    airline_logo: spicejet,
    airline_name: "SpiceJet",
    from: "PAT",
    to: "SHL",
    duration: "1h 20m",
    rate: 3600,
    departure_date: "29-07-2024",
    departure_time: "9:00 AM",
    landing_time: "10:20 AM",
  },
  {
    id: 14,
    airline_logo: indigo,
    airline_name: "Indigo",
    from: "VNS",
    to: "BEK",
    duration: "1h 45m",
    rate: 3800,
    departure_date: "29-07-2024",
    departure_time: "11:15 AM",
    landing_time: "1:00 PM",
  },
  {
    id: 15,
    airline_logo: vistara,
    airline_name: "Vistara",
    from: "NAG",
    to: "BEP",
    duration: "1h 10m",
    rate: 3000,
    departure_date: "29-07-2024",
    departure_time: "1:30 PM",
    landing_time: "2:40 PM",
  },
  {
    id: 16,
    airline_logo: airIndia,
    airline_name: "AirIndia",
    from: "JAI",
    to: "BLR",
    duration: "2h 00m",
    rate: 4200,
    departure_date: "29-07-2024",
    departure_time: "3:40 PM",
    landing_time: "5:40 PM",
  },
  {
    id: 17,
    airline_logo: akasaAir,
    airline_name: "AkasaAir",
    from: "IXE",
    to: "BUP",
    duration: "1h 15m",
    rate: 3400,
    departure_date: "29-07-2024",
    departure_time: "6:00 PM",
    landing_time: "7:15 PM",
  },
  {
    id: 18,
    airline_logo: spicejet,
    airline_name: "Spicejet",
    from: "VGA",
    to: "BHU",
    duration: "1h 30m",
    rate: 3500,
    departure_date: "30-07-2024",
    departure_time: "8:15 AM",
    landing_time: "9:45 AM",
  },
  {
    id: 19,
    airline_logo: spicejet,
    airline_name: "SpiceJet",
    from: "TRV",
    to: "BHO",
    duration: "1h 45m",
    rate: 3800,
    departure_date: "30-07-2024",
    departure_time: "10:00 AM",
    landing_time: "11:45 AM",
  },
  {
    id: 20,
    airline_logo: indigo,
    airline_name: "Indigo",
    from: "IXC",
    to: "BBI",
    duration: "1h 10m",
    rate: 3000,
    departure_date: "30-07-2024",
    departure_time: "12:15 PM",
    landing_time: "1:25 PM",
  },
  {
    id: 21,
    airline_logo: vistara,
    airline_name: "Vistara",
    from: "DED",
    to: "BKB",
    duration: "2h 00m",
    rate: 4200,
    departure_date: "30-07-2024",
    departure_time: "2:25 PM",
    landing_time: "4:25 PM",
  },
  {
    id: 22,
    airline_logo: airIndia,
    airline_name: "AirIndia",
    from: "IXJ",
    to: "PAB",
    duration: "1h 30m",
    rate: 3500,
    departure_date: "30-07-2024",
    departure_time: "4:25 PM",
    landing_time: "5:55 PM",
  },
  {
    id: 23,
    airline_logo: akasaAir,
    airline_name: "AkasaAir",
    from: "ATQ",
    to: "IXR",
    duration: "1h 45m",
    rate: 3800,
    departure_date: "30-07-2024",
    departure_time: "6:00 PM",
    landing_time: "7:45 PM",
  },
  {
    id: 24,
    airline_logo: vistara,
    airline_name: "Vistara",
    from: "IXB",
    to: "CCJ",
    duration: "1h 10m",
    rate: 3000,
    departure_date: "31-07-2024",
    departure_time: "7:30 AM",
    landing_time: "8:40 AM",
  },
  {
    id: 25,
    airline_logo: spicejet,
    airline_name: "SpiceJet",
    from: "IXM",
    to: "GOI",
    duration: "1h 15m",
    rate: 3400,
    departure_date: "31-07-2024",
    departure_time: "9:00 AM",
    landing_time: "10:15 AM",
  },
  {
    id: 26,
    airline_logo: indigo,
    airline_name: "Indigo",
    from: "IXU",
    to: "JAI",
    duration: "1h 30m",
    rate: 3500,
    departure_date: "31-07-2024",
    departure_time: "11:15 AM",
    landing_time: "12:45 PM",
  },
  {
    id: 27,
    airline_logo: vistara,
    airline_name: "Vistara",
    from: "JLR",
    to: "IXY",
    duration: "1h 45m",
    rate: 3800,
    departure_date: "31-07-2024",
    departure_time: "1:30 PM",
    landing_time: "3:15 PM",
  },
  {
    id: 28,
    airline_logo: airIndia,
    airline_name: "AirIndia",
    from: "IXZ",
    to: "IXZ",
    duration: "2h 00m",
    rate: 4200,
    departure_date: "31-07-2024",
    departure_time: "3:45 PM",
    landing_time: "5:45 PM",
  },
  {
    id: 29,
    airline_logo: akasaAir,
    airline_name: "AkasaAir",
    from: "BHU",
    to: "VGA",
    duration: "1h 15m",
    rate: 3400,
    departure_date: "31-07-2024",
    departure_time: "5:00 PM",
    landing_time: "6:15 PM",
  },
  {
    id: 30,
    airline_logo: airIndia,
    airline_name: "AirIndia",
    from: "BBI",
    to: "IXJ",
    duration: "1h 30m",
    rate: 3500,
    departure_date: "01-08-2024",
    departure_time: "8:00 AM",
    landing_time: "9:30 AM",
  },
  {
    id: 31,
    airline_logo: indigo,
    airline_name: "Indigo",
    from: "BBI",
    to: "IXJ",
    duration: "1h 30m",
    rate: 3500,
    departure_date: "01-08-2024",
    departure_time: "7:45 AM",
    landing_time: "9:15 AM",
  },
];

export default flightSchedule;
