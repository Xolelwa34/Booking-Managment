import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";

const accommodations = [
  {
    name: "Hotel A",
    price: "$100/night",
    image: "path/to/hotel-a.jpg",
  },
  {
    name: "Hotel B",
    price: "$150/night",
    image: "path/to/hotel-b.jpg",
  },
  {
    name: "Hotel C",
    price: "$200/night",
    image: "path/to/hotel-c.jpg",
  },
];

const AccommodationPage = () => (
  <Container maxWidth="md">
    <Typography variant="h4" component="h1" gutterBottom>
      Accommodation Booking
    </Typography>
    <Box component="form" noValidate autoComplete="off" sx={{ mb: 4 }}>
      <TextField
        label="Location"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Check-in Date"
        type="date"
        variant="outlined"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Check-out Date"
        type="date"
        variant="outlined"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Search
      </Button>
    </Box>
    <Typography variant="h5" component="h2" gutterBottom>
      Available Accommodations
    </Typography>
    <List>
      {accommodations.map((hotel, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar variant="square" src={hotel.image} />
          </ListItemAvatar>
          <ListItemText primary={hotel.name} secondary={hotel.price} />
        </ListItem>
      ))}
    </List>
  </Container>
);

export default AccommodationPage;
