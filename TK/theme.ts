import { rgba } from 'polished';

import { opensans, roboto } from './fonts';

const hero = opensans.style.fontFamily;
const body = roboto.style.fontFamily;

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
  bg: rgba('#ffffff', 0.6),
  bgBlur: 16,
  fg: {
    enabled: '#000000',
    hover: '#e50039',
  },
};

const banner = {
  bg: '#ffffff',
  fg: '#3d3e4a',
  desktop: {
    gap: 80,
    paddingTop: 280,
  },
  laptop: {
    gap: 32,
    paddingTop: 240,
  },
};

const redElephant = {
  bg: '#f5f5f7',
  fg: '#3d3e4a',
};

const card = {
  desktop: {
    radius: 4,
    paddingLR: 48,
    paddingTB: 48,
    gap: container.desktop.gap,
  },
  laptop: {
    radius: 4,
    paddingLR: 32,
    paddingTB: 32,
    gap: container.laptop.gap,
  },
  front: {
    fg: '#3d3e4a',
    bg: '#f5f5f7',
  },
  back: {
    fg: '#ffffff',
    bg: '#42b6ea',
  },
};

const button = {
  borderRadius: 4,
  fg: {
    enabled: '#ffffff',
    hover: '#ffffff',
    active: '#ffffff',
  },
  bg: {
    enabled: '#e53935',
    hover: '#c53531',
    active: '#e53935',
  },
  border: {
    enabled: rgba('#000000', 0),
    hover: rgba('#000000', 0),
    active: rgba('#000000', 0),
  },
};

const page = {
  bg: '#ffffff',
  fg: '#3d3e4a',
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
  radius: 20,
  fg: {
    enabled: '#3d3e4a',
    hover: '#42b6ea',
    selected: {
      enabled: '#ffffff',
      hover: '#ffffff',
    },
  },
  bg: {
    enabled: rgba('#e53935', 0),
    hover: rgba('#e53935', 0.1),
    selected: {
      enabled: '#e53935',
      hover: '#C3102D',
    },
  },
};

const tabSlider = {
  fg: '#3d3e4a',
  bg: '#ffffff',
};

const accordion = {
  fg: {
    enabled: '#3d3e4a',
    hover: '#3d3e4a',
    open: {
      enabled: '#3d3e4a',
      hover: '#3d3e4a',
    },
  },
  bg: {
    enabled: rgba('#f5f5f7', 0),
    hover: rgba('#f5f5f7', 0.4),
    open: {
      enabled: rgba('#f5f5f7', 1),
      hover: rgba('#f5f5f7', 0.6),
    },
  },
};

const accordionList = {
  prof: {
    fg: '#3d3e4a',
    bg: '#ffffff',
  },
  social: {
    fg: '#3d3e4a',
    bg: '#ffffff',
  },
};

const typography = {
  hero: {
    fontFamily: hero,
    fontWeight: 600,
    letterSpacing: 0,
    desktop: {
      fontSize: 72,
      lineHeight: 88,
    },
    laptop: {
      fontSize: 56,
      lineHeight: 72,
    },
  },
  headerXl: {
    fontFamily: hero,
    fontWeight: 600,
    fontSize: 56,
    lineHeight: 72,
    letterSpacing: 0,
  },
  headerMd: {
    fontFamily: hero,
    fontWeight: 600,
    fontSize: 36,
    lineHeight: 48,
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
