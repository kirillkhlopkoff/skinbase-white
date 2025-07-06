import { useState, useEffect } from 'react';
import { Snackbar, SnackbarContent, Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const COOKIE_CONSENT_KEY = 'cookie-consent-status';

const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const consentStatus = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consentStatus) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setOpen(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setOpen(false);
  };

  const handleLearnMore = () => {
    navigate('/cookie');
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <SnackbarContent
        sx={{
          width: '100%',
          maxWidth: '800px',
          bgcolor: '#1e1e1e',
          color: '#fff',
          borderRadius: 2,
          p: 3,
        }}
        message={
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Typography sx={{ color: '#fff' }}>
              {t('cookieConsent.message')}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'flex-end',
                gap: 1,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleAccept}
                sx={{ whiteSpace: 'nowrap' }}
              >
                {t('cookieConsent.accept')}
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleDecline}
                sx={{
                  whiteSpace: 'nowrap',
                  color: '#fff',
                  borderColor: '#fff',
                  '&:hover': { borderColor: '#fff' },
                }}
              >
                {t('cookieConsent.decline')}
              </Button>
              <Button
                variant="text"
                onClick={handleLearnMore}
                sx={{ whiteSpace: 'nowrap', color: '#bbb' }}
              >
                {t('cookieConsent.learnMore')}
              </Button>
            </Box>
          </Box>
        }
      />
    </Snackbar>
  );
};

export default CookieConsent;
