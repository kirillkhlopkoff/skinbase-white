import { Box, Container, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';

interface WeaponCardProps {
  image: string;
  name: string;
  variations: string;
}

const WeaponCard = ({ image, name, variations }: WeaponCardProps) => (
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
  }}>
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

const WeaponSection = ({ title, icon, weapons }: { title: string, icon: string, weapons: WeaponCardProps[] }) => (
  <Box sx={{ mt: 8 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
      <Box component="img" src={icon} alt={title} sx={{ width: 80, height: 80, mr: 2 }} />
      <Typography variant="h4" component="h2" color="white">
        {title}
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

const Home = () => {
  const collections = [
    { image: '/src/assets/img/anubis.webp', name: 'The Anubis Collection' },
    { image: '/src/assets/img/train.webp', name: 'Train 2021 Collection' },
    { image: '/src/assets/img/mirage.webp', name: 'Mirage 2021 Collection' },
    { image: '/src/assets/img/dust2.webp', name: 'Dust II 2021 Collection' },
  ];

  const knives = [
    { image: '/src/assets/img/karambit.webp', name: '★ Karambit', variations: '35 вариаций' },
    { image: '/src/assets/img/m9.webp', name: '★ M9 Bayonet', variations: '35 вариаций' },
    { image: '/src/assets/img/butterfly.webp', name: '★ Butterfly Knife', variations: '35 вариаций' },
    { image: '/src/assets/img/talon.webp', name: '★ Talon Knife', variations: '25 вариаций' },
    { image: '/src/assets/img/skeleton.webp', name: '★ Skeleton Knife', variations: '13 вариаций' },
  ];

  const rifles = [
    { image: '/src/assets/img/wildlotus.webp', name: 'AK-47', variations: '45 вариаций' },
    { image: '/src/assets/img/dragonlore.webp', name: 'AWP', variations: '39 вариаций' },
    { image: '/src/assets/img/m4a4.webp', name: 'M4A4', variations: '39 вариаций' },
    { image: '/src/assets/img/m4a1s.webp', name: 'M4A1-S', variations: '35 вариаций' },
    { image: '/src/assets/img/aug.png', name: 'AUG', variations: '37 вариаций' },
  ];

  const pistols = [
    { image: '/src/assets/img/usps.webp', name: 'USP-S', variations: '35 вариаций' },
    { image: '/src/assets/img/glock.png', name: 'Glock-18', variations: '45 вариаций' },
    { image: '/src/assets/img/deserteagle.webp', name: 'Desert Eagle', variations: '35 вариаций' },
    { image: '/src/assets/img/p250.png', name: 'P250', variations: '47 вариаций' },
    { image: '/src/assets/img/fiveseven.png', name: 'Five-SeveN', variations: '35 вариаций' },
  ];

  const smgs = [
    { image: '/src/assets/img/p90.png', name: 'P90', variations: '41 вариация' },
    { image: '/src/assets/img/ump45.png', name: 'UMP-45', variations: '36 вариаций' },
    { image: '/src/assets/img/mac-10.png', name: 'MAC-10', variations: '46 вариаций' },
    { image: '/src/assets/img/mp7.png', name: 'MP7', variations: '34 вариации' },
    { image: '/src/assets/img/mp9.webp', name: 'MP9', variations: '34 вариации' },
  ];

  const heavy = [
    { image: '/src/assets/img/sawedoff.png', name: 'Sawed-Off', variations: '32 вариации' },
    { image: '/src/assets/img/mag7.png', name: 'MAG-7', variations: '34 вариации' },
    { image: '/src/assets/img/nova.png', name: 'Nova', variations: '36 вариаций' },
    { image: '/src/assets/img/xm.png', name: 'XM1014', variations: '34 вариации' },
    { image: '/src/assets/img/negev.webp', name: 'Negev', variations: '22 вариации' },
  ];

  return (
    <Box sx={{ bgcolor: '#0f0f0f', minHeight: '100vh', pb: 8 }}>
      {/* Hero Section */}
      <Box sx={{ 
        position: 'relative', 
        height: '600px',
        backgroundImage: 'url(/src/assets/img/head.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
      }}>
        <Container maxWidth="xl">
          <Box sx={{ color: 'white', maxWidth: 600 }}>
            <Typography variant="h2" component="h1" gutterBottom>
              База данных CS:GO
            </Typography>
            <Typography variant="h5" gutterBottom>
              Все что вам нужно знать о скинах CS:GO
              на одном сайте - прямо перед вами!
            </Typography>
            <Box sx={{ display: 'flex', gap: 4, mt: 4 }}>
              <Box>
                <Typography variant="h4" component="div">1732</Typography>
                <Typography>Уникальных вариаций</Typography>
              </Box>
              <Box>
                <Typography variant="h4" component="div">+ 2.3M</Typography>
                <Typography>Обнаруженных паттернов</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl">
        {/* Collections Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h2" color="white" gutterBottom>
            Последние коллекции
          </Typography>
          <Grid container spacing={4}>
            {collections.map((collection, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card sx={{ 
                  height: '100%',
                  bgcolor: 'transparent',
                  border: 'none',
                  boxShadow: 'none',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    cursor: 'pointer'
                  }
                }}>
                  <CardMedia
                    component="img"
                    image={collection.image}
                    alt={collection.name}
                    sx={{ height: 200, objectFit: 'cover' }}
                  />
                  <CardContent sx={{ textAlign: 'center', color: 'white' }}>
                    <Typography variant="h6">{collection.name}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Weapons Sections */}
        <WeaponSection title="Ножи" icon="/src/assets/img/types/knife.png" weapons={knives} />
        <WeaponSection title="Винтовки" icon="/src/assets/img/types/ak-47.webp" weapons={rifles} />
        <WeaponSection title="Пистолеты" icon="/src/assets/img/types/desert-eagle.webp" weapons={pistols} />
        <WeaponSection title="ПП" icon="/src/assets/img/types/mp9.webp" weapons={smgs} />
        <WeaponSection title="Тяжелое" icon="/src/assets/img/types/xm1014.webp" weapons={heavy} />
      </Container>
    </Box>
  );
};

export default Home;
