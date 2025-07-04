import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#1a1a1a', color: 'white', py: 3, mt: 'auto' }}>
      <Container maxWidth="xl">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} CSKINS. Все права защищены.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
