import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AccommodationPage from "./pages/AccommodationPage";
import TicketPage from "./pages/TicketPage";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accommodation" element={<AccommodationPage />} />
        <Route path="/tickets" element={<TicketPage />} />
      </Routes>
    </Router>
  );
}
export default App;
