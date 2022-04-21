import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Home from "./pages/Home";

function App() {
  return (
    // MUI Box with padding wrapper around Home component
    <Box sx={{ p: 10 }}>
      <Home />
    </Box>
  );
}

export default App;
