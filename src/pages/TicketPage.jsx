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

const events = [
  {
    name: "Amapiano Vibes",
    price: "R250",
    image:
      "https://p16-tiktokcdn-com.akamaized.net/obj/tiktok-obj/d10b88893096d8f925b021c978139540",
  },
  {
    name: "Mr Bean 2024",
    price: "R200",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcST7w0faYw5KTDJ6wDNuy_Mwp-_NLt49acafZQpP-zViU_kcKfCIggns3y_pwJqoRYZ-WEJhU2elHNH0fJjMGhP6XvUyE892M3ua_K97Q",
  },
  {
    name: "Fifa 2012",
    price: "R60",
    image:
      "https://media.contentapi.ea.com/content/dam/ea/fifa/images/fifa-generic-featured-tile-16x9.png.adapt.crop16x9.1023w.png",
  },
];

const TicketPage = () => (
  <Container maxWidth="md">
    <Typography variant="h4" component="h1" gutterBottom>
      Ticket Booking
    </Typography>
    <Box component="form" noValidate autoComplete="off" sx={{ mb: 4 }}>
      <TextField label="Event" variant="outlined" fullWidth margin="normal" />
      <TextField
        label="Date"
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
      Available Tickets
    </Typography>
    <List>
      {events.map((event, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <Avatar variant="square" src={event.image} />
          </ListItemAvatar>
          <ListItemText primary={event.name} secondary={event.price} />
        </ListItem>
      ))}
    </List>
  </Container>
);

export default TicketPage;
