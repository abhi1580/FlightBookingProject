import React from "react";
import { Typography, Container, Grid, Card, CardContent, CardMedia } from "@mui/material";

const AboutUsPage = () => {
  return (
    <Container sx={{ border: "1px solid black", padding: "20px", maxWidth: "1200px", marginTop: 11 }}>
      <Typography variant="h3" gutterBottom sx={{ textAlign: "center", marginBottom: "20px" }}>
        About Us
      </Typography>
      <hr />
      <Grid container spacing={4} sx={{ padding: "20px" }}>
        <Grid item xs={12} md={9}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                sx={{ textAlign: "center", marginBottom: "20px" }}
              >
                <u>OUR HISTORY</u>
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{ textAlign: "justify", fontSize: "16px", lineHeight: "1.6" }}
              >
                Indian Airlines was the state-owned airline in India from August
                1953 to February 2011. The airline was founded alongside the
                current flag carrier, Air India, to cater to domestic and
                international destinations. The airline primarily operated
                domestic routes, with some international routes to the
                neighboring countries in Asia and the Middle East. In 2007, the
                Government of India announced the merger of Indian Airlines and
                Air India. While the merged airline operated under the Air India
                branding, the IATA and ICAO codes and call signs continued with
                the Indian Airlines brand. Four years later, in February 2011,
                Indian Airlines ceased operations completely. Indian Airlines
                (IC) was created in 1953 by the government to consolidate the
                fragmented local aviation market and create one competitive
                airline that could grow its reach. The carrier kicked off
                operations with a mixed fleet inherited from its constituent
                airlines, including 74 DC-3s, DC-4s, and Vickers Vikings. The
                large fleet allowed the airline to increase frequencies on
                several routes and added new cities, but it came with a loss of
                competition. Indian Airlines kept growing in the next two
                decades, adding newer planes like the Vickers Viscount and the
                Indian-made Hawker Siddeley HS784. As the range grew,
                connectivity to smaller airports around the country became
                possible, strengthening domestic traffic. Delhi remained India's
                hub for over five decades, although cities like Mumbai, Chennai,
                Ahemdabad, and others were all focus cities as well. Indian
                Airlines added its first Boeing 737 in November 1970, kicking
                off 20 years of 737-200s in the fleet. IC operated over 35
                examples of Boeing's narrowbody but also added widebodies like
                the Airbus A300 or Sud Caravelle (the first jet aircraft).
                However, a major shakeup was set to hit Indian aviation as the
                government deregulated the industry.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ boxShadow: 3 }}>
            <CardMedia
              component="img"
              image="https://images.unsplash.com/photo-1530545124313-ce5e8eae55af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFpcm9wbGFuZXxlbnwwfHwwfHx8MA%3D%3D 2x"
              alt="Indian Airline"
              sx={{
                height: "300px",
                width: "100%",
                borderBottom: "1px solid black",
                marginTop:9
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ boxShadow: 3 }}>
            <CardMedia
              component="img"
              image="https://images.unsplash.com/photo-1641468996158-3c9306b69ad8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFpcm9wbGFuZXxlbnwwfHwwfHx8MA%3D%3D 2x"
              alt="Indian Airline"
              sx={{
                height: "300px",
                width: "100%",
                borderBottom: "1px solid black",
                marginTop:11
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={9}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent sx={{ padding: "30px" }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{ marginBottom: "20px" }}
              >
                <u>OUR MISSION</u>
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{
                  textAlign: "justify",
                  fontSize: "16px",
                  lineHeight: "1.6",
                }}
              >
                To enhance air connectivity across the nation and be an
                environment conscious sustainable organization using the state
                of the art and indigenous technology for cost effective, modern,
                safe airport operations and air navigation services. To grow a
                sustainable, profitable airline that promotes India to the
                world, supports tourism, India overseas and the national economy
                whilst developing an air transport hub taking advantage of our
                unique Indian Ocean location. To be an aviation centre of
                excellence, developing talent for the Airline and the wider
                industry. We are committed to doing business in an ethical
                manner, which yields long-term, sustainable benefits for the
                country and the communities we serve. We improve understanding
                of the air transport industry among decision makers and increase
                awareness of the benefits that aviation brings to national and
                global economies. Advocating for the interests of airlines
                across the globe, we challenge unreasonable rules and charges,
                hold regulators and governments to account, and strive for
                sensible regulation. For over 70 years, we have developed global
                commercial standards upon which the air transport industry is
                built. Our aim is to assist airlines by simplifying processes
                and increasing passenger convenience while reducing costs and
                improving efficiency. We help airlines to operate safely,
                securely, efficiently, and economically under clearly defined
                rules. Professional support is provided to all industry
                stakeholders with a wide range of products and expert services.
                We improve understanding of the air transport industry among
                decision makers and increase awareness of the benefits that
                aviation brings to national and global economies. Advocating for
                the interests of airlines across the globe, we challenge
                unreasonable rules and charges, hold regulators and governments
                to account, and strive for sensible regulation.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <hr />
    </Container>
  );
};

export default AboutUsPage;
