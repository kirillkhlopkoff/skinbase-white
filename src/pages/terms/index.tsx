import { Container, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Terms = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {t('terms.title')}
      </Typography>
      
      <Typography paragraph>
        {t('terms.intro')}
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        {t('terms.general.title')}
      </Typography>
      <Box component="ul" sx={{ pl: 2 }}>
        <Typography component="li">{t('terms.general.items.tools')}</Typography>
        <Typography component="li">{t('terms.general.items.marketplace')}</Typography>
        <Typography component="li">{t('terms.general.items.prices')}</Typography>
      </Box>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        {t('terms.userResponsibility.title')}
      </Typography>
      <Box component="ul" sx={{ pl: 2 }}>
        <Typography component="li">{t('terms.userResponsibility.items.info')}</Typography>
        <Typography component="li">{t('terms.userResponsibility.items.fraud')}</Typography>
        <Typography component="li">{t('terms.userResponsibility.items.accounts')}</Typography>
      </Box>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        {t('terms.liability.title')}
      </Typography>
      <Box component="ul" sx={{ pl: 2 }}>
        <Typography component="li">{t('terms.liability.items.accuracy')}</Typography>
        <Typography component="li">{t('terms.liability.items.asIs')}</Typography>
        <Typography component="li">{t('terms.liability.items.thirdParty')}</Typography>
      </Box>

      <Typography paragraph sx={{ mt: 4 }}>
        {t('terms.conclusion')}
      </Typography>
    </Container>
  );
};

export default Terms;
