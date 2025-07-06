import { Box, Collapse, Paper, Typography, styled } from '@mui/material';
import { NAV_ITEMS } from '../../../data/navItems';
import type { NavItem } from '../../../data/navItems';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
}));

const NavItemContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  cursor: 'pointer',
  '&:hover': {
    '& .MuiTypography-root': {
      color: theme.palette.primary.main,
    },
  },
}));

const DropdownContent = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: 0,
  width: 'max-content',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  zIndex: 1000,
  padding: theme.spacing(2),
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(2),
}));

const WeaponLink = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  textDecoration: 'none',
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '& img': {
    width: 24,
    height: 24,
    objectFit: 'contain',
  },
}));

const Navigation = () => {
  const navigate = useNavigate();
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const { t } = useTranslation();

  const handleCategoryClick = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const handleClickOutside = () => {
    setOpenCategory(null);
  };

  const handleWeaponClick = (e: React.MouseEvent, item: NavItem) => {
    e.stopPropagation();
    navigate(`/items?query=${encodeURIComponent(item.name)}`);
    setOpenCategory(null);
  };

  const getCategoryName = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      knives: 'navigation.categories.knives',
      rifles: 'navigation.categories.rifles',
      pistols: 'navigation.categories.pistols',
      smg: 'navigation.categories.smg',
      heavy: 'navigation.categories.heavy'
    };
    return t(categoryMap[category] || category);
  };

  return (
    <NavContainer>
      {Object.entries(NAV_ITEMS).map(([category, { items }]) => (
        <NavItemContainer key={category}>
          <Box
            onClick={() => handleCategoryClick(category)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <Typography
              sx={{
                color: openCategory === category ? 'primary.main' : '#757575',
                transition: '0.2s',
              }}
            >
              {getCategoryName(category)}
            </Typography>
            <KeyboardArrowDownIcon
              sx={{
                color: '#757575',
                transform: openCategory === category ? 'rotate(180deg)' : 'none',
                transition: '0.2s',
              }}
            />
          </Box>
          <Collapse in={openCategory === category}>
            <DropdownContent>
              {items.map((item: NavItem) => (
                <WeaponLink
                  key={item.id}
                  onClick={(e) => handleWeaponClick(e, item)}
                >
                  <img
                    src={`/src/assets/img/types/${item.id}.${item.ext}`}
                    alt={item.displayName}
                  />
                  <Typography variant="body2">{item.displayName}</Typography>
                </WeaponLink>
              ))}
            </DropdownContent>
          </Collapse>
        </NavItemContainer>
      ))}
      <Box
        onClick={handleClickOutside}
        sx={{
          display: openCategory ? 'block' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
        }}
      />
    </NavContainer>
  );
};

export default Navigation; 