import { rgba } from 'polished';

import { ubuntusans, roboto } from './fonts';

const hero = ubuntusans.style.fontFamily;
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
  bg: rgba('#1c1c4a', 0.6),
  bgBlur: 16,
  fg: {
    enabled: '#f1f1f2',
    hover: '#fca95a',
  },
};

const banner = {
  bg: '#1c1c4a',
  fg: '#f1f1f2',
  desktop: {
    gap: 80,
    paddingTop: 260,
    height: 800,
  },
  laptop: {
    gap: 32,
    paddingTop: 200,
    height: 640,
  },
};

const redElephant = {
  bg: '#1c1c4a',
  fg: '#f1f1f2',
};

const card = {
  desktop: {
    radius: 24,
    paddingLR: 56,
    paddingTB: 56,
    gap: container.desktop.gap,
  },
  laptop: {
    radius: 24,
    paddingLR: 40,
    paddingTB: 40,
    gap: container.laptop.gap,
  },
  front: {
    fg: '#f1f1f2',
    bg: '#3e3a66',
  },
  back: {
    fg: '#3d3e4a',
    bg: '#f1f1f2',
  },
};

const button = {
  borderRadius: 20,
  fg: {
    enabled: '#ffffff',
    hover: '#ffffff',
    active: '#ffffff',
  },
  bg: {
    enabled: '#5355a8',
    hover: '#5b60b1',
    active: '#6b72c0',
  },
  border: {
    enabled: rgba('#000000', 0),
    hover: rgba('#000000', 0),
    active: rgba('#000000', 0),
  },
};

const page = {
  bg: '#1c1c4a',
  fg: '#dbdbe1',
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
  radius: 12,
  fg: {
    enabled: '#3d3e4a',
    hover: '#5355a8',
    selected: {
      enabled: '#ffffff',
      hover: '#ffffff',
    },
  },
  bg: {
    enabled: rgba('#5355a8', 0),
    hover: rgba('#5355a8', 0.1),
    selected: {
      enabled: '#5355a8',
      hover: '#5b60b1',
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
    enabled: rgba('#5355a8', 0),
    hover: rgba('#5355a8', 0.04),
    open: {
      enabled: rgba('#5355a8', 0.2),
      hover: rgba('#5355a8', 0.04),
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
    fontWeight: 700,
    letterSpacing: 0,
    desktop: {
      fontSize: 80,
      lineHeight: 96,
    },
    laptop: {
      fontSize: 72,
      lineHeight: 88,
    },
  },
  headerXl: {
    fontFamily: hero,
    fontWeight: 700,
    fontSize: 72,
    lineHeight: 96,
    letterSpacing: 0,
  },
  headerMd: {
    fontFamily: hero,
    fontWeight: 700,
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
