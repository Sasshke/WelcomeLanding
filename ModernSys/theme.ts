import { rgba } from 'polished';

import { helios, wixMadeforText } from './fonts';

const hero = helios.style.fontFamily;
const body = wixMadeforText.style.fontFamily;

const breakpoints = {
  lg: 1360,
};

const container = {
  desktop: {
    minWidth: 1280,
    maxWidth: 1520,
    paddingTB: 160,
    paddingLR: 80,
    gap: 40,
  },
  laptop: {
    minWidth: 1024,
    maxWidth: 1280,
    paddingTB: 120,
    paddingLR: 40,
    gap: 32,
  },
};

const header = {
  bg: rgba('#000000', 0.32),
  bgBlur: 16,
  fg: {
    enabled: '#e5e5e5',
    hover: '#ff7d01',
  },
};

const banner = {
  bg: '#13289d',
  fg: '#ffffff',
  desktop: {
    gap: 24,
    paddingTop: 320,
  },
  laptop: {
    gap: 16,
    paddingTop: 240,
  },
};

const redElephant = {
  bg: '#0e2976',
  fg: '#ffffff',
};

const card = {
  desktop: {
    radius: 12,
    paddingLR: 48,
    paddingTB: 48,
    gap: container.desktop.gap,
  },
  laptop: {
    radius: 12,
    paddingLR: 32,
    paddingTB: 32,
    gap: container.laptop.gap,
  },
  front: {
    fg: '#ffffff',
    bg: '#0e2976',
  },
  back: {
    fg: '#2c2c2c',
    bg: '#cbdbef',
  },
};

const button = {
  borderRadius: 12,
  fg: {
    enabled: '#ffffff',
    hover: '#ffffff',
    active: '#ffffff',
  },
  bg: {
    enabled: rgba('#ffffff', 0.1),
    hover: rgba('#ffffff', 0.2),
    active: rgba('#ffffff', 0.15),
  },
  border: {
    enabled: rgba('#ffffff', 0),
    hover: rgba('#ffffff', 0),
    active: rgba('#ffffff', 0),
  },
};

const page = {
  bg: '#064e9f',
  fg: '#ffffff',
};

const footer = {
  bg: '#0e2976',
  fg: {
    enabled: '#c2c2c2',
    hover: '#ffffff',
  },
  legal: {
    fg: '#656565',
  },
};

const stateLayer = {
  bg: '#ffffff',
  opacity: {
    enabled: 0,
    hover: 0.1,
    active: 0.2,
  },
};

const tab = {
  radius: 8,
  fg: {
    enabled: '#084e9f',
    hover: '#084e9f',
    selected: {
      enabled: '#ffffff',
      hover: '#ffffff',
    },
  },
  bg: {
    enabled: rgba('#084e9f', 0.1),
    hover: rgba('#084e9f', 0.24),
    selected: {
      enabled: '#084e9f',
      hover: rgba('#084e9f', 0.8),
    },
  },
};

const tabSlider = {
  fg: '#212121',
  bg: '#ffffff',
};

const accordion = {
  fg: {
    enabled: '#353535',
    hover: '#353535',
    open: {
      enabled: '#353535',
      hover: '#353535',
    },
  },
  bg: {
    enabled: rgba('#064e9f', 0.06),
    hover: rgba('#064e9f', 0.1),
    open: {
      enabled: rgba('#064e9f', 0.1),
      hover: rgba('#064e9f', 0.2),
    },
  },
};

const accordionList = {
  prof: {
    fg: '#353535',
    bg: '#f2f2f2',
  },
  social: {
    fg: '#353535',
    bg: '#ffffff',
  },
};

const typography = {
  hero: {
    fontFamily: hero,
    fontWeight: 800,
    letterSpacing: 0,
    desktop: {
      fontSize: 96,
      lineHeight: 112,
    },
    laptop: {
      fontSize: 64,
      lineHeight: 80,
    },
  },
  headerXl: {
    fontFamily: hero,
    fontWeight: 800,
    fontSize: 64,
    lineHeight: 88,
    letterSpacing: 0,
  },
  headerMd: {
    fontFamily: hero,
    fontWeight: 600,
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: 0,
  },
  subheader: {
    fontFamily: body,
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0,
  },
  bodyXl: {
    fontFamily: body,
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },
  bodyMd: {
    fontFamily: body,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0,
  },
  button: {
    fontFamily: body,
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },
  legal: {
    fontFamily: body,
    fontWeight: 300,
    fontSize: 8,
    lineHeight: 10,
    letterSpacing: -0.5,
  },
  inherit: {},
};

/**
 * Объект темы
 */
export const theme = {
  breakpoints,
  components: {
    container,
    typography,
    header,
    banner,
    redElephant,
    card,
    button,
    page,
    footer,
    stateLayer,
    tab,
    tabSlider,
    accordion,
    accordionList,
  },
  elevation: {
    default: 1,
    header: 100,
  },
  minRootHeight: '100vh',
  hero,
  body,
} as const;
