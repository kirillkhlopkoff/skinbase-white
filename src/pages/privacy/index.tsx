import { Container, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {t('privacy.title')}
      </Typography>
      
      <Typography paragraph>
        {t('privacy.intro')}
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        {t('privacy.dataCollect.title')}
      </Typography>
      <Typography paragraph>
        {t('privacy.dataCollect.intro')}
      </Typography>
      <Box component="ul" sx={{ pl: 2 }}>
        <Typography component="li">{t('privacy.dataCollect.items.steamId')}</Typography>
        <Typography component="li">{t('privacy.dataCollect.items.inventory')}</Typography>
        <Typography component="li">{t('privacy.dataCollect.items.tradeUrl')}</Typography>
      </Box>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        {t('privacy.dataUsage.title')}
      </Typography>
      <Typography paragraph>
        {t('privacy.dataUsage.intro')}
      </Typography>
      <Box component="ul" sx={{ pl: 2 }}>
        <Typography component="li">{t('privacy.dataUsage.items.access')}</Typography>
        <Typography component="li">{t('privacy.dataUsage.items.analysis')}</Typography>
        <Typography component="li">{t('privacy.dataUsage.items.improvement')}</Typography>
      </Box>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        {t('privacy.security.title')}
      </Typography>
      <Typography paragraph>
        {t('privacy.security.content')}
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        {t('privacy.disclaimer.title')}
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        {t('privacy.disclaimer.general.title')}
      </Typography>
      <Typography paragraph>
        {t('privacy.disclaimer.general.content')}
      </Typography>

      <Typography variant="h6" gutterBottom>
        {t('privacy.disclaimer.professional.title')}
      </Typography>
      <Typography paragraph>
        {t('privacy.disclaimer.professional.content')}
      </Typography>

      <Typography variant="h6" gutterBottom>
        {t('privacy.disclaimer.links.title')}
      </Typography>
      <Typography paragraph>
        {t('privacy.disclaimer.links.content')}
      </Typography>

      <Typography variant="h6" gutterBottom>
        {t('privacy.disclaimer.liability.title')}
      </Typography>
      <Typography paragraph>
        {t('privacy.disclaimer.liability.content')}
      </Typography>

      <Typography variant="h6" gutterBottom>
        {t('privacy.disclaimer.availability.title')}
      </Typography>
      <Typography paragraph>
        {t('privacy.disclaimer.availability.content')}
      </Typography>

      <Typography variant="h6" gutterBottom>
        {t('privacy.disclaimer.updates.title')}
      </Typography>
      <Typography paragraph>
        {t('privacy.disclaimer.updates.content')}
      </Typography>
    </Container>
  );
};

export default Privacy;
