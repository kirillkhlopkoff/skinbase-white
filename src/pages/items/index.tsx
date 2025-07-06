import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Container, Typography, Card, CardMedia, CardContent } from '@mui/material';
import type { Item } from '../../types/items';

// Импортируем данные из items.json
const itemsData = (await import('../../assets/items-data/items.json')).default as Item[];

const Items = () => {
  const [searchParams] = useSearchParams();
  const [items, setItems] = useState<Item[]>([]);
  
  useEffect(() => {
    const query = searchParams.get('query')?.toLowerCase() || '';
    const type = searchParams.get('type')?.toLowerCase() || '';
    
    const filteredItems = itemsData.filter(item => {
      const matchesName = item.markethashname.toLowerCase().includes(query);
      const matchesType = type ? item.type.toLowerCase().includes(type) : true;
      return matchesName && matchesType;
    });
    
    setItems(filteredItems);
  }, [searchParams]);

  const handleItemClick = (markethashname: string) => {
    const steamMarketUrl = `https://steamcommunity.com/market/listings/730/${encodeURIComponent(markethashname)}?l=russian`;
    window.open(steamMarketUrl, '_blank');
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {searchParams.get('query') ? 'Результаты поиска' : 'Все предметы'}
      </Typography>
      
      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' } }}>
        {items.map((item) => (
          <Card 
            key={item.itemid}
            onClick={() => handleItemClick(item.markethashname)}
            sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.02)'
              }
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={item.image}
              alt={item.markethashname}
              sx={{ objectFit: 'contain', p: 2, bgcolor: 'background.paper' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="subtitle1" component="div" noWrap>
                {item.markethashname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.type}
              </Typography>
            </CardContent>
          </Card>
        ))}
        
        {items.length === 0 && (
          <Box sx={{ 
            width: '100%', 
            textAlign: 'center', 
            py: 8,
            gridColumn: { xs: '1', sm: '1 / span 2', md: '1 / span 3', lg: '1 / span 4' } 
          }}>
            <Typography variant="h6" color="text.secondary">
              Ничего не найдено
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Items;
