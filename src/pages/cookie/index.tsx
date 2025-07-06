import { Container, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Cookie = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {t('cookie.title')}
      </Typography>
      
      <Typography paragraph>
        {t('cookie.intro')}
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        {t('cookie.what.title')}
      </Typography>
      <Typography paragraph>
        {t('cookie.what.content')}
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        {t('cookie.types.title')}
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        {t('cookie.types.required.title')}
      </Typography>
      <Typography paragraph>
        {t('cookie.types.required.content')}
      </Typography>

      <Typography variant="h6" gutterBottom>
        {t('cookie.types.analytics.title')}
      </Typography>
      <Typography paragraph>
        {t('cookie.types.analytics.content')}
      </Typography>

      <Typography variant="h6" gutterBottom>
        {t('cookie.types.functional.title')}
      </Typography>
      <Typography paragraph>
        {t('cookie.types.functional.content')}
      </Typography>

      <Typography variant="h6" gutterBottom>
        {t('cookie.types.advertising.title')}
      </Typography>
      <Typography paragraph>
        {t('cookie.types.advertising.content')}
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        {t('cookie.why.title')}
      </Typography>
      <Box component="ul" sx={{ pl: 2 }}>
        <Typography component="li">{t('cookie.why.items.security')}</Typography>
        <Typography component="li">{t('cookie.why.items.analysis')}</Typography>
        <Typography component="li">{t('cookie.why.items.personalization')}</Typography>
        <Typography component="li">{t('cookie.why.items.advertising')}</Typography>
        <Typography component="li">{t('cookie.why.items.preferences')}</Typography>
      </Box>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        {t('cookie.control.title')}
      </Typography>
      <Typography paragraph>
        {t('cookie.control.content')}
      </Typography>

      <Typography variant="h6" gutterBottom>
        {t('cookie.control.browser.title')}
      </Typography>
      <Typography paragraph>
        {t('cookie.control.browser.content')}
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        {t('cookie.updates.title')}
      </Typography>
      <Typography paragraph>
        {t('cookie.updates.content')}
      </Typography>
    </Container>
  );
};

export default Cookie;
