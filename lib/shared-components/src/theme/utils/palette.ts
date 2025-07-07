/* eslint-disable prefer-const */

/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-unused-vars */

import mColours from './colours';
import {
  PaletteColorOptions,
  PaletteMode,
  PaletteOptions,
} from '@mui/material';

interface ExtendedPaletteOptions extends PaletteOptions {
  pending?: PaletteColorOptions;
  buy?: PaletteColorOptions;
  sell?: PaletteColorOptions;
  engaged?: PaletteColorOptions;
  inactive?: PaletteColorOptions;
}

const light: ExtendedPaletteOptions = {
  primary: {
    main: mColours.blue,
    light: mColours.lightBlue,
    dark: mColours.darkBlue,
  },
  secondary: {
    main: mColours.purple,
    light: mColours.lightPurple,
    dark: mColours.darkPurple,
  },
  error: {
    main: mColours.red,
    light: mColours.lightRed,
    dark: mColours.darkRed,
  },
  warning: {
    main: mColours.orange,
    light: mColours.lightOrange,
    dark: mColours.darkOrange,
  },
  info: {
    main: mColours.bgBlue,
    light: mColours.lightBgBlue,
    dark: mColours.darkBgBlue,
  },
  success: {
    main: mColours.green,
    light: mColours.lightGreen,
    dark: mColours.darkGreen,
  },
  background: {
    paper: mColours.greyScale[50],
    default: mColours.white,
  },
  engaged: {
    main: mColours.teal,
  },
  pending: {
    main: mColours.yellow,
  },
  buy: {
    main: mColours.lightGreen,
  },
  sell: {
    main: mColours.sellFuchsia,
  },
  inactive: {
    main: mColours.greyScale[400],
  },
  text: {
    primary: mColours.greyScale[700],
    secondary: mColours.greyScale[50],
  },
};

const dark: ExtendedPaletteOptions = {
  primary: {
    main: mColours.blue,
    light: mColours.lightBlue,
    dark: mColours.darkBlue,
  },
  secondary: {
    main: mColours.AMainpurple,
    light: mColours.ALightpurple,
    dark: mColours.ADarkpurple,
  },
  error: {
    main: mColours.red,
    light: mColours.lightRed,
    dark: mColours.darkRed,
  },
  warning: {
    main: mColours.orange,
    light: mColours.lightOrange,
    dark: mColours.darkOrange,
  },
  info: {
    main: mColours.bgBlue,
    light: mColours.ALightInfoBlue,
    dark: mColours.ADarkInfoBlue,
  },
  success: {
    main: mColours.green,
    light: mColours.lightGreen,
    dark: mColours.darkGreen,
  },
  background: {
    paper: mColours.greyScale[700],
    default: mColours.greyScale[800],
  },
  engaged: {
    main: mColours.teal,
  },
  pending: {
    main: mColours.yellow,
  },
  buy: {
    main: mColours.lightGreen,
  },
  sell: {
    main: mColours.sellFuchsia,
  },
  inactive: {
    main: mColours.greyScale[500],
  },
  text: {
    primary: mColours.greyScale[50],
    secondary: mColours.greyScale[700],
  },
};

export const palette = (theme: PaletteMode): PaletteOptions => {
  const isLightMode = theme === 'light';

  return Object.freeze({
    mode: theme,
    ...(isLightMode ? light : dark),
  });
};

export default { light, dark };
