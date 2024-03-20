import { Box, Container } from "@mui/material";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navigation } from "./components";
import { Home, Settings, Recomend } from "./Pages";
// import { createTheme } from "@mui/material/styles";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.grey[100],
        }}
      >
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="settings" element={<Settings />} />
            <Route path="recomend" element={<Recomend />} />
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
