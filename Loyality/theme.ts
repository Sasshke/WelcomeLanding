import { rgba } from 'polished';

import { montserrat, roboto } from './fonts';

const hero = montserrat.style.fontFamily;
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
    hover: '#34c7c3',
  },
};

const banner = {
  bg: '#ffffff',
  fg: '#3d3e4a',
  desktop: {
    gap: 80,
    paddingTop: 260,
  },
  laptop: {
    gap: 32,
    paddingTop: 200,
  },
};

const redElephant = {
  bg: '#ffffff',
  fg: '#3d3e4a',
};

const card = {
  desktop: {
    radius: 40,
    paddingLR: 56,
    paddingTB: 56,
    gap: container.desktop.gap,
  },
  laptop: {
    radius: 32,
    paddingLR: 40,
    paddingTB: 40,
    gap: container.laptop.gap,
  },
  front: {
    fg: '#3d3e4a',
    bg: '#F6F3EE',
  },
  back: {
    fg: '#3d3e4a',
    bg: '#F9EBD3',
  },
};

const button = {
  borderRadius: 32,
  fg: {
    enabled: '#ffffff',
    hover: '#ffffff',
    active: '#ffffff',
  },
  bg: {
    enabled: '#ed1639',
    hover: '#D72542',
    active: '#ae2037',
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
  radius: 20,
  fg: {
    enabled: '#3d3e4a',
    hover: '#ed1639',
    selected: {
      enabled: '#ffffff',
      hover: '#ffffff',
    },
  },
  bg: {
    enabled: rgba('#ed1639', 0),
    hover: rgba('#ed1639', 0.1),
    selected: {
      enabled: '#ed1639',
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
    enabled: rgba('#F9EBD3', 0),
    hover: rgba('#F9EBD3', 0.1),
    open: {
      enabled: rgba('#F9EBD3', 0.5),
      hover: rgba('#F9EBD3', 0.3),
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
