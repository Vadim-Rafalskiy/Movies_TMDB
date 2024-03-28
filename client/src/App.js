import { Box, Container } from '@mui/material';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Navigation } from './components';
import { Home, Settings, Recomend } from './Pages';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Box
        sx={{
          backgroundColor: theme => theme.palette.grey[300],
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
