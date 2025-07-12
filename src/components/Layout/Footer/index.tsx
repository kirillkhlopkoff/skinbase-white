import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box component="footer" sx={{ bgcolor: '#1a1a1a', color: 'white', py: 3, mt: 'auto' }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 2 }}>
          <MuiLink component={Link} to="/privacy" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            {t('footer.privacy')}
          </MuiLink>
          <MuiLink component={Link} to="/terms" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            {t('footer.terms')}
          </MuiLink>
          <MuiLink component={Link} to="/cookie" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            {t('footer.cookie')}
          </MuiLink>
        </Box>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} dropcs2data.com. {t('footer.rights')}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
