import { Box, Container, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface WeaponCardProps {
  image: string;
  name: string;
  variations: string;
}

const WeaponCard = ({ image, name, variations }: WeaponCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/items?query=${encodeURIComponent(name)}`);
  };

  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      bgcolor: 'transparent',
      border: 'none',
      boxShadow: 'none',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.05)',
        cursor: 'pointer'
      }
    }}
    onClick={handleClick}
    >
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{ objectFit: 'contain', height: 140 }}
      />
      <CardContent sx={{ flexGrow: 1, textAlign: 'center', color: 'white' }}>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: '#757575' }}>
          {variations}
        </Typography>
      </CardContent>
    </Card>
  );
};

const WeaponSection = ({ title, icon, weapons }: { title: string, icon: string, weapons: WeaponCardProps[] }) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ mt: 8 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Box component="img" src={icon} alt={title} sx={{ width: 80, height: 80, mr: 2 }} />
        <Typography variant="h4" component="h2" color="white">
          {t(`navigation.categories.${title.toLowerCase()}`)}
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {weapons.map((weapon, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={index}>
            <WeaponCard {...weapon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const Home = () => {
  const { t } = useTranslation();

  const collections = [
    { image: '/src/assets/img/anubis.webp', name: 'The Anubis Collection' },
    { image: '/src/assets/img/train.webp', name: 'Train 2021 Collection' },
    { image: '/src/assets/img/mirage.webp', name: 'Mirage 2021 Collection' },
    { image: '/src/assets/img/dust2.webp', name: 'Dust II 2021 Collection' },
  ];

  const knives = [
    { image: '/src/assets/img/karambit.webp', name: '★ Karambit', variations: t('home.variations', { count: 35 }) },
    { image: '/src/assets/img/m9.webp', name: '★ M9 Bayonet', variations: t('home.variations', { count: 35 }) },
    { image: '/src/assets/img/butterfly.webp', name: '★ Butterfly Knife', variations: t('home.variations', { count: 35 }) },
    { image: '/src/assets/img/talon.webp', name: '★ Talon Knife', variations: t('home.variations', { count: 25 }) },
    { image: '/src/assets/img/skeleton.webp', name: '★ Skeleton Knife', variations: t('home.variations', { count: 13 }) },
  ];

  const rifles = [
    { image: '/src/assets/img/wildlotus.webp', name: 'AK-47', variations: t('home.variations', { count: 45 }) },
    { image: '/src/assets/img/dragonlore.webp', name: 'AWP', variations: t('home.variations', { count: 39 }) },
    { image: '/src/assets/img/m4a4.webp', name: 'M4A4', variations: t('home.variations', { count: 39 }) },
    { image: '/src/assets/img/m4a1s.webp', name: 'M4A1-S', variations: t('home.variations', { count: 35 }) },
    { image: '/src/assets/img/aug.png', name: 'AUG', variations: t('home.variations', { count: 37 }) },
  ];

  const pistols = [
    { image: '/src/assets/img/usps.webp', name: 'USP-S', variations: t('home.variations', { count: 35 }) },
    { image: '/src/assets/img/glock.png', name: 'Glock-18', variations: t('home.variations', { count: 45 }) },
    { image: '/src/assets/img/deserteagle.webp', name: 'Desert Eagle', variations: t('home.variations', { count: 35 }) },
    { image: '/src/assets/img/p250.png', name: 'P250', variations: t('home.variations', { count: 47 }) },
    { image: '/src/assets/img/fiveseven.png', name: 'Five-SeveN', variations: t('home.variations', { count: 35 }) },
  ];

  const smgs = [
    { image: '/src/assets/img/p90.png', name: 'P90', variations: t('home.variations', { count: 41 }) },
    { image: '/src/assets/img/ump45.png', name: 'UMP-45', variations: t('home.variations', { count: 36 }) },
    { image: '/src/assets/img/mac-10.png', name: 'MAC-10', variations: t('home.variations', { count: 46 }) },
    { image: '/src/assets/img/mp7.png', name: 'MP7', variations: t('home.variations', { count: 34 }) },
    { image: '/src/assets/img/mp9.webp', name: 'MP9', variations: t('home.variations', { count: 34 }) },
  ];

  const heavy = [
    { image: '/src/assets/img/sawedoff.png', name: 'Sawed-Off', variations: t('home.variations', { count: 32 }) },
    { image: '/src/assets/img/mag7.png', name: 'MAG-7', variations: t('home.variations', { count: 34 }) },
    { image: '/src/assets/img/nova.png', name: 'Nova', variations: t('home.variations', { count: 36 }) },
    { image: '/src/assets/img/xm.png', name: 'XM1014', variations: t('home.variations', { count: 34 }) },
    { image: '/src/assets/img/negev.webp', name: 'Negev', variations: t('home.variations', { count: 22 }) },
  ];

  return (
    <Box sx={{ bgcolor: '#0f0f0f', minHeight: '100vh', pb: 8 }}>
      {/* Hero Section */}
      <Box sx={{ 
        position: 'relative', 
        height: '600px',
        backgroundImage: 'url(/src/assets/img/logoknives.png)',
        backgroundSize: '40%',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
      }}>
        <Container maxWidth="xl">
          <Box sx={{ color: 'white', maxWidth: 600 }}>
            <Typography variant="h2" component="h1" gutterBottom>
              {t('home.hero.title')}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {t('home.hero.subtitle')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 4, mt: 4 }}>
              <Box>
                <Typography variant="h4" component="div">1732</Typography>
                <Typography>{t('home.hero.stats.variations')}</Typography>
              </Box>
              <Box>
                <Typography variant="h4" component="div">+ 2.3M</Typography>
                <Typography>{t('home.hero.stats.patterns')}</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl">
        {/* Welcome Section */}
        <Box sx={{ mt: 8, color: 'white', textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            {t('home.welcome.title')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            {t('home.welcome.description')}
          </Typography>
        </Box>

        {/* Weapons Sections */}
        <WeaponSection title="Knives" icon="/src/assets/img/types/karambit.webp" weapons={knives} />
        <WeaponSection title="Rifles" icon="/src/assets/img/types/ak-47.webp" weapons={rifles} />
        <WeaponSection title="Pistols" icon="/src/assets/img/types/desert-eagle.webp" weapons={pistols} />
        <WeaponSection title="SMG" icon="/src/assets/img/types/mp9.webp" weapons={smgs} />
        <WeaponSection title="Heavy" icon="/src/assets/img/types/xm1014.webp" weapons={heavy} />
      </Container>
    </Box>
  );
};

export default Home;
