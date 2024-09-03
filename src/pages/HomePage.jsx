import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const FeatureHighlight = ({ title, description, icon }) => (
  <Box sx={{ textAlign: "center", py: 4 }}>
    <Box sx={{ fontSize: 40 }}>{icon}</Box>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body1">{description}</Typography>
  </Box>
);

const HomePage = () => (
  <Box
    sx={{
      backgroundImage: `url(https://pix10.agoda.net/geo/country/62/3_62_south_africa_02.jpg?s=1920x)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      py: 8,
    }}
  >
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 2,
        textAlign: "center",
        p: 5,
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom color="primary">
        Welcome to the Booking Management App
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Easily book accommodations and tickets for your favorite events.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/accommodation"
        sx={{ mt: 2 }}
      >
        Book Accommodation
      </Button>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/tickets"
        sx={{ mt: 2, ml: 2 }}
      >
        Book Tickets
      </Button>
    </Container>
  </Box>
);

export default HomePage;
