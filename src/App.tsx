import Layout from './components/Layout';
import Home from './pages/home';
import Items from './pages/items';
import Privacy from './pages/privacy';
import Terms from './pages/terms';
import Cookie from './pages/cookie';
import CookieConsent from './components/CookieConsent';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './i18n/config';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0f0f0f',
      paper: '#1a1a1a',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflowX: 'hidden',
        },
      },
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box sx={{ width: '100%', overflowX: 'hidden' }}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/items" element={<Items />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookie" element={<Cookie />} />
            </Routes>
          </Layout>
          <CookieConsent />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
