export interface NavItem {
  id: string;
  name: string;
  displayName: string;
  ext: 'png' | 'webp';
  price: number;
}

export interface NavCategory {
  name: string;
  items: NavItem[];
}

export const NAV_ITEMS: Record<string, NavCategory> = {
  'knives': {
    name: 'НОЖИ',
    items: [
      { id: 'karambit', name: 'karambit', displayName: 'home.categories.knives.karambit', ext: 'webp', price: 1299.99 },
      { id: 'm9-bayonet', name: 'm9 bayonet', displayName: 'home.categories.knives.m9', ext: 'webp', price: 899.99 },
      { id: 'butterfly-knife', name: 'butterfly knife', displayName: 'home.categories.knives.butterfly', ext: 'webp', price: 1499.99 },
      { id: 'talon-knife', name: 'talon knife', displayName: 'home.categories.knives.talon', ext: 'webp', price: 699.99 },
      { id: 'skeleton-knife', name: 'skeleton knife', displayName: 'home.categories.knives.skeleton', ext: 'webp', price: 799.99 },
      { id: 'classic-knife', name: 'classic knife', displayName: 'home.categories.knives.classic', ext: 'webp', price: 599.99 },
      { id: 'bayonet', name: 'bayonet', displayName: 'home.categories.knives.bayonet', ext: 'webp', price: 699.99 },
      { id: 'stiletto-knife', name: 'stiletto knife', displayName: 'home.categories.knives.stiletto', ext: 'webp', price: 649.99 },
      { id: 'ursus-knife', name: 'ursus knife', displayName: 'home.categories.knives.ursus', ext: 'webp', price: 599.99 },
      { id: 'paracord-knife', name: 'paracord knife', displayName: 'home.categories.knives.paracord', ext: 'webp', price: 549.99 },
      { id: 'nomad-knife', name: 'nomad knife', displayName: 'home.categories.knives.nomad', ext: 'webp', price: 499.99 },
      { id: 'survival-knife', name: 'survival knife', displayName: 'home.categories.knives.survival', ext: 'webp', price: 549.99 },
      { id: 'huntsman-knife', name: 'huntsman knife', displayName: 'home.categories.knives.huntsman', ext: 'webp', price: 599.99 },
      { id: 'flip-knife', name: 'flip knife', displayName: 'home.categories.knives.flip', ext: 'webp', price: 649.99 },
      { id: 'bowie-knife', name: 'bowie knife', displayName: 'home.categories.knives.bowie', ext: 'webp', price: 599.99 },
      { id: 'falchion-knife', name: 'falchion knife', displayName: 'home.categories.knives.falchion', ext: 'webp', price: 549.99 },
      { id: 'gut-knife', name: 'gut knife', displayName: 'home.categories.knives.gut', ext: 'webp', price: 499.99 },
      { id: 'navaja-knife', name: 'navaja knife', displayName: 'home.categories.knives.navaja', ext: 'webp', price: 449.99 },
      { id: 'shadow-daggers', name: 'shadow daggers', displayName: 'home.categories.knives.shadow', ext: 'webp', price: 499.99 },
    ],
  },
  'pistols': {
    name: 'ПИСТОЛЕТЫ',
    items: [
      { id: 'usp-s', name: 'usp-s', displayName: 'USP-S', ext: 'webp', price: 149.99 },
      { id: 'glock-18', name: 'glock-18', displayName: 'Glock-18', ext: 'webp', price: 99.99 },
      { id: 'desert-eagle', name: 'desert-eagle', displayName: 'Desert Eagle', ext: 'webp', price: 199.99 },
      { id: 'p250', name: 'p250', displayName: 'P250', ext: 'webp', price: 49.99 },
      { id: 'five-seven', name: 'five-seven', displayName: 'Five-SeveN', ext: 'webp', price: 79.99 },
      { id: 'cz75-auto', name: 'cz75-auto', displayName: 'CZ75-Auto', ext: 'webp', price: 89.99 },
      { id: 'p2000', name: 'p2000', displayName: 'P2000', ext: 'webp', price: 69.99 },
      { id: 'tec-9', name: 'tec-9', displayName: 'Tec-9', ext: 'webp', price: 79.99 },
      { id: 'r8-revolver', name: 'r8-revolver', displayName: 'R8 Revolver', ext: 'webp', price: 99.99 },
      { id: 'dual-berettas', name: 'dual-berettas', displayName: 'Dual Berettas', ext: 'webp', price: 59.99 },
    ],
  },
  'smg': {
    name: 'ПП',
    items: [
      { id: 'p90', name: 'p90', displayName: 'P90', ext: 'webp', price: 249.99 },
      { id: 'ump-45', name: 'ump-45', displayName: 'UMP-45', ext: 'webp', price: 149.99 },
      { id: 'mac-10', name: 'mac-10', displayName: 'MAC-10', ext: 'webp', price: 129.99 },
      { id: 'mp7', name: 'mp7', displayName: 'MP7', ext: 'webp', price: 159.99 },
      { id: 'mp9', name: 'mp9', displayName: 'MP9', ext: 'webp', price: 139.99 },
      { id: 'mp5-sd', name: 'mp5-sd', displayName: 'MP5-SD', ext: 'webp', price: 169.99 },
      { id: 'pp-bizon', name: 'pp-bizon', displayName: 'PP-Bizon', ext: 'webp', price: 119.99 },
    ],
  },
  'rifles': {
    name: 'ВИНТОВКИ',
    items: [
      { id: 'ak-47', name: 'ak-47', displayName: 'AK-47', ext: 'webp', price: 499.99 },
      { id: 'm4a4', name: 'm4a4', displayName: 'M4A4', ext: 'webp', price: 399.99 },
      { id: 'm4a1-s', name: 'm4a1-s', displayName: 'M4A1-S', ext: 'webp', price: 399.99 },
      { id: 'aug', name: 'aug', displayName: 'AUG', ext: 'webp', price: 299.99 },
      { id: 'sg-553', name: 'sg-553', displayName: 'SG 553', ext: 'webp', price: 289.99 },
      { id: 'galil-ar', name: 'galil ar', displayName: 'Galil AR', ext: 'webp', price: 249.99 },
      { id: 'famas', name: 'famas', displayName: 'FAMAS', ext: 'webp', price: 239.99 },
      { id: 'awp', name: 'awp', displayName: 'AWP', ext: 'webp', price: 799.99 },
      { id: 'ssg-08', name: 'ssg-08', displayName: 'SSG 08', ext: 'webp', price: 299.99 },
      { id: 'scar-20', name: 'scar-20', displayName: 'SCAR-20', ext: 'webp', price: 349.99 },
      { id: 'g3sg1', name: 'g3sg1', displayName: 'G3SG1', ext: 'webp', price: 339.99 },
    ],
  },
  'heavy': {
    name: 'ТЯЖЕЛОЕ',
    items: [
      { id: 'sawed-off', name: 'sawed-off', displayName: 'Sawed-Off', ext: 'webp', price: 149.99 },
      { id: 'mag-7', name: 'mag-7', displayName: 'MAG-7', ext: 'webp', price: 159.99 },
      { id: 'nova', name: 'nova', displayName: 'Nova', ext: 'webp', price: 139.99 },
      { id: 'xm1014', name: 'xm1014', displayName: 'XM1014', ext: 'webp', price: 169.99 },
      { id: 'negev', name: 'negev', displayName: 'Negev', ext: 'webp', price: 199.99 },
      { id: 'm249', name: 'm249', displayName: 'M249', ext: 'webp', price: 189.99 },
    ],
  },
  'other': {
    name: 'ДРУГОЕ',
    items: [
      { id: 'agent', name: 'agent', displayName: 'home.categories.other.agents', ext: 'png', price: 299.99 },
      { id: 'patch', name: 'patch', displayName: 'home.categories.other.patches', ext: 'png', price: 19.99 },
      { id: 'graffiti', name: 'graffiti', displayName: 'home.categories.other.graffiti', ext: 'png', price: 9.99 },
      { id: 'key', name: 'key', displayName: 'home.categories.other.keys', ext: 'png', price: 2.49 },
      { id: 'sticker', name: 'sticker', displayName: 'home.categories.other.stickers', ext: 'png', price: 14.99 },
    ],
  },
}; 