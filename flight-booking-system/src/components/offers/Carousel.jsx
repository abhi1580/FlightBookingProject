import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconButton, Box } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Card from "./Card"; // Updated import

const Carousel = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  const cards = [
    {
      title: "Goa",
      description: "Get Flat 20% of an flights",
      image:
        "https://images.unsplash.com/photo-1623941000186-afafbcfb65e7?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      moreInfo: [
        "Best time to visit: October to February",
        "Popular beaches: Calangute, Baga",
        "Fares starting at ₹1196* onwards",
        "The sale offer is only valid till 28th October 2024 for travel till 30th February",
        "Limited seats are available under this offer",
        "Select Flights Only*",
        "Airlines T & C Apply.",
      ],
    },
    {
      title: "Manali",
      description: "Get Flat 10% of an flights",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      moreInfo: [
        "Best time to visit: March to June",
        "Adventure activities: Skiing, Paragliding",
        "Fares starting at ₹3000* onwards",
        "The sale offer is only valid till 11th march 2024 for travel till 30th June",
        "Limited seats are available under this offer",
        "Select Flights Only*",
        "Airlines T & C Apply.",
      ],
    },
    {
      title: "Jaisalmer",
      description: "Get Flat 15% of an flights",
      image:
        "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      moreInfo: [
        "Best time to visit: October to March",
        "Desert safari experience",
        "Fares starting at ₹2199* onwards",
        "The sale offer is only valid till 28th October 2024 for travel till 28th March",
        "Limited seats are available under this offer",
        "Select Flights Only*",
        "Airlines T & C Apply.",
      ],
    },
    {
      title: "Kerala",
      description: "Get Flat 5% of an Flights",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      moreInfo: [
        "Best time to visit: September to March",
        "Backwaters and houseboats",
        "Fares starting at ₹4599* onwards",
        "The sale offer is only valid till 28th September for travel till 28th March",
        "Limited seats are available under this offer",
        "Select Flights Only*",
        "Airlines T & C Apply.",
      ],
    },
    {
      title: "Ladakh",
      description: "Get Flat 10% of an Flights",
      image:
        "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFkYWtofGVufDB8fDB8fHww",
      moreInfo: [
        "Best time to visit: June to September",
        "Breathtaking landscapes",
        "Fares starting at ₹5345* onwards",
        "The sale offer is only valid till 28th June 2024 for travel till 30th September",
        "Limited seats are available under this offer",
        "Select Flights Only*",
        "Airlines T & C Apply.",
      ],
    },
    {
      title: "Kashmir",
      description: "Get Flat 5% of on Flights",
      image:
        "https://images.unsplash.com/photo-1616190419596-e2839e7380d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D",
      moreInfo: [
        "Best time to visit: March to October",
        "Shikara rides on Dal Lake",
        "Fares starting at ₹* onwards",
        "The sale offer is only valid till 28th March 2024 for travel till 30th October",
        "Limited seats are available under this offer",
        "Select Flights Only*",
        "Airlines T & C Apply.",
      ],
    },
  ];

  const slidePrevious = () => {
    sliderRef.current.slickPrev(); // Access slickPrev method through ref
  };

  const slideNext = () => {
    sliderRef.current.slickNext(); // Access slickNext method through ref
  };

  return (
    <Box position="relative">
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
        onClick={slidePrevious}
      >
        <ArrowBack />
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          right: "1px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
        onClick={slideNext}
      >
        <ArrowForward />
      </IconButton>
      <Slider ref={sliderRef} {...settings}>
        {cards.map((card, index) => (
          <div key={index}>
            <Card
              title={card.title}
              description={card.description}
              image={card.image}
              moreInfo={card.moreInfo} // Pass moreInfo to CustomCard
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;