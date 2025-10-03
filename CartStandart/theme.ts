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
  bg: rgba('#ffffff', 0.24),
  bgBlur: 24,
  fg: {
    enabled: '#3d3e4a',
    hover: '#E4003A',
  },
};

const banner = {
  bg: '#ffffff',
  fg: '#3d3e4a',
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
  bg: '#f4f4f7',
  fg: '#3d3e4a',
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
    fg: '#34334f',
    bg: '#f4f4f7',
  },
  back: {
    fg: '#ffffff',
    bg: '#d5243a',
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
    enabled: '#d5243a',
    hover: '#b91e31',
    active: '#A01527',
  },
  border: {
    enabled: rgba('#34334f', 0),
    hover: rgba('#34334f', 0),
    active: rgba('#34334f', 0),
  },
};

const page = {
  bg: '#ffffff',
  fg: '#3d3e4a',
};

const footer = {
  bg: '#212121',
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
    enabled: '#3d3e4a',
    hover: '#41b5ea',
    selected: {
      enabled: '#ffffff',
      hover: '#ffffff',
    },
  },
  bg: {
    enabled: rgba('#d5243a', 0),
    hover: rgba('#d5243a', 0.1),
    selected: {
      enabled: '#d5243a',
      hover: '#A01527',
    },
  },
};

const tabSlider = {
  fg: '#34334f',
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
    enabled: rgba('#f4f4f7', 0),
    hover: rgba('#f4f4f7', 0.4),
    open: {
      enabled: '#f4f4f7',
      hover: rgba('#f4f4f7', 0.6),
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
    fontWeight: 800,
    letterSpacing: 1,
    desktop: {
      fontSize: 72,
      lineHeight: 96,
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
    letterSpacing: 1,
  },
  headerMd: {
    fontFamily: hero,
    fontWeight: 800,
    fontSize: 32,
    lineHeight: 40,
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
