import { rgba } from 'polished';

import { montserrat } from './fonts';

const hero = montserrat.style.fontFamily;
const body = montserrat.style.fontFamily;

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
  bg: rgba('#000000', 0.1),
  bgBlur: 32,
  fg: {
    enabled: '#E4D6D7',
    hover: '#FFFFFF',
  },
};

const banner = {
  bg: '#7f1216',
  fg: '#f2f2f2',
  desktop: {
    gap: 24,
    paddingTop: 280,
    height: 720,
  },
  laptop: {
    gap: 16,
    paddingTop: 200,
    height: 580,
  },
};

const redElephant = {
  bg: '#ba2c34',
  fg: '#f2f2f2',
};

const card = {
  desktop: {
    radius: 0,
    paddingLR: 48,
    paddingTB: 48,
    gap: container.desktop.gap,
  },
  laptop: {
    radius: 0,
    paddingLR: 32,
    paddingTB: 32,
    gap: container.laptop.gap,
  },
  front: {
    fg: '#414141',
    bg: '#f2f1f1',
  },
  back: {
    fg: '#f2f2f2',
    bg: '#ba2c34',
  },
};

const button = {
  borderRadius: 0,
  fg: {
    enabled: '#ba2c34',
    hover: '#ffffff',
    active: '#ffffff',
  },
  bg: {
    enabled: '#ffffff',
    hover: '#e53835',
    active: '#c53632',
  },
  border: {
    enabled: rgba('#ffffff', 0),
    hover: rgba('#ffffff', 0),
    active: rgba('#ffffff', 0),
  },
};

const page = {
  bg: '#ffffff',
  fg: '#414141',
};

const footer = {
  bg: '#323232',
  fg: {
    enabled: '#f2f2f2',
    hover: '#ffffff',
  },
  legal: {
    fg: '#656565',
  },
};

const stateLayer = {
  bg: '#e53835',
  opacity: {
    enabled: 0,
    hover: 0.1,
    active: 0.2,
  },
};

const tab = {
  radius: 0,
  fg: {
    enabled: '#414141',
    hover: '#222222',
    selected: {
      enabled: '#ffffff',
      hover: '#ffffff',
    },
  },
  bg: {
    enabled: '#ededed',
    hover: '#d8d8d8',
    selected: {
      enabled: '#414141',
      hover: '#6e6e6e',
    },
  },
};

const tabSlider = {
  fg: '#414141',
  bg: '#ededed',
};

const accordion = {
  fg: {
    enabled: '#ffffff',
    hover: '#ffffff',
    open: {
      enabled: '#ffffff',
      hover: '#ffffff',
    },
  },
  bg: {
    enabled: rgba('#000000', 0),
    hover: rgba('#000000', 0.1),
    open: {
      enabled: rgba('#000000', 0.3),
      hover: rgba('#000000', 0.2),
    },
  },
};

const accordionList = {
  prof: {
    fg: '#ffffff',
    bg: '#414141',
  },
  social: {
    fg: '#ffffff',
    bg: '#414141',
  },
};

const typography = {
  hero: {
    fontFamily: hero,
    fontWeight: 800,
    letterSpacing: 0,
    desktop: {
      fontSize: 64,
      lineHeight: 80,
    },
    laptop: {
      fontSize: 48,
      lineHeight: 64,
    },
  },
  headerXl: {
    fontFamily: hero,
    fontWeight: 700,
    fontSize: 48,
    lineHeight: 64,
    letterSpacing: 0,
  },
  headerMd: {
    fontFamily: hero,
    fontWeight: 700,
    fontSize: 32,
    lineHeight: 44,
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
