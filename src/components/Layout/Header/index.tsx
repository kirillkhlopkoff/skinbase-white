import { AppBar, Box, Container, InputBase, Toolbar, alpha, styled, IconButton, Menu, MenuItem, Divider, Collapse, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from './Navigation';
import { NAV_ITEMS } from '../../../data/navItems';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '200px'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const MobileMenuItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
}));

const SubMenuItem = styled(MenuItem)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
}));

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [langAnchorEl, setLangAnchorEl] = useState<null | HTMLElement>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchValue.trim()) {
      navigate(`/items?query=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  const handleClear = () => {
    setSearchValue('');
    if (window.location.pathname === '/items') {
      navigate('/items');
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLangMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLangAnchorEl(event.currentTarget);
  };

  const handleLangMenuClose = () => {
    setLangAnchorEl(null);
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    handleLangMenuClose();
  };

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    handleMenuClose();
  };

  const handleCategoryClick = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const handleSubItemClick = (item: any) => {
    navigate(`/items?query=${encodeURIComponent(item.name)}`);
    handleMenuClose();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1a1a1a' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', gap: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            <Box
              component="img"
              src="/src/assets/img/logoicon.png"
              sx={{ height: 40 }}
            />
            <Box
              component="span"
              sx={{
                fontWeight: 600,
                color: '#fff',
                textTransform: 'uppercase',
                letterSpacing: 1,
                display: { xs: 'none', md: 'block' }
              }}
            >
              DOMAIN.COM
            </Box>
          </Box>

          <Navigation />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder={t('header.search')}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyPress={handleSearch}
                endAdornment={
                  searchValue && (
                    <CloseIcon
                      sx={{ cursor: 'pointer', mr: 1 }}
                      onClick={handleClear}
                    />
                  )
                }
              />
            </Search>

            <IconButton
              size="large"
              color="inherit"
              onClick={handleLangMenuOpen}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            >
              <LanguageIcon />
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={langAnchorEl}
              open={Boolean(langAnchorEl)}
              onClose={handleLangMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={() => handleLanguageChange('ru')} selected={i18n.language === 'ru'}>
                Русский
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange('en')} selected={i18n.language === 'en'}>
                English
              </MenuItem>
            </Menu>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              sx={{
                '& .MuiPaper-root': {
                  width: { xs: '280px', md: 'auto' },
                  maxWidth: '100vw',
                  overflowX: 'hidden'
                }
              }}
            >
              {/* Мобильная навигация */}
              <Box sx={{ display: { md: 'none' } }}>
                {Object.entries(NAV_ITEMS).map(([category, { items }]) => (
                  <Box key={category}>
                    <MobileMenuItem onClick={() => handleCategoryClick(category)}>
                      <Typography>{t(`navigation.categories.${category}`)}</Typography>
                      <KeyboardArrowDownIcon 
                        sx={{ 
                          transform: expandedCategory === category ? 'rotate(180deg)' : 'none',
                          transition: '0.2s'
                        }} 
                      />
                    </MobileMenuItem>
                    <Collapse in={expandedCategory === category}>
                      <Box sx={{ bgcolor: 'rgba(0, 0, 0, 0.1)' }}>
                        {items.map((item) => (
                          <SubMenuItem 
                            key={item.id}
                            onClick={() => handleSubItemClick(item)}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Box
                                component="img"
                                src={`/src/assets/img/types/${item.id}.${item.ext}`}
                                sx={{ width: 24, height: 24, objectFit: 'contain' }}
                                alt={item.name}
                              />
                              <Typography variant="body2">
                                {t(item.displayName)}
                              </Typography>
                            </Box>
                          </SubMenuItem>
                        ))}
                      </Box>
                    </Collapse>
                  </Box>
                ))}
                <Divider sx={{ my: 1 }} />
              </Box>

              <MenuItem onClick={() => handleMenuItemClick('/')}>
                {t('header.menu.home')}
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('/privacy')}>
                {t('header.menu.privacy')}
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('/terms')}>
                {t('header.menu.terms')}
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('/cookie')}>
                {t('header.menu.cookie')}
              </MenuItem>

              {/* Языки для мобильной версии */}
              <Box sx={{ display: { md: 'none' } }}>
                <Divider sx={{ my: 1 }} />
                <MenuItem onClick={() => handleLanguageChange('ru')} selected={i18n.language === 'ru'}>
                  Русский
                </MenuItem>
                <MenuItem onClick={() => handleLanguageChange('en')} selected={i18n.language === 'en'}>
                  English
                </MenuItem>
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
