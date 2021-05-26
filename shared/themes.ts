import { Theme } from '@emotion/react';

export const mainColor = '#51e8a7';
export const whiteColor = '#ffffff';
export const blackColor ='#2f2f2f';

export enum THEME {
  LIGHT,
  DARK,
}

export const themeValues = {
  [THEME.LIGHT]: {
    mainColor,
    text: {
      primary: '#414142',
      description: '#747474',
    },
    background: {
      primary: '#eae9e5',
      secondary: whiteColor,
    },
    menu: {
      activeLink: {
        color: blackColor,
        background: whiteColor,
      },
    },
    buttons: {
      background: '#414142',
      color: whiteColor,
    },
    buttonsHover: {
      background: mainColor,
      color: blackColor,
    },
    snippet: {
      background: '#414142',
    },
  },
  [THEME.DARK]: {
    mainColor,
    text: {
      primary: '#eae9e5',
      description: '#d1d1d1',
    },
    background: {
      primary: '#414142',
      secondary: blackColor,
    },
    menu: {
      activeLink: {
        color: whiteColor,
        background: blackColor,
      },
    },
    buttons: {
      background: mainColor,
      color: '#414142',
    },
    buttonsHover: {
      background: '#414142',
      color: mainColor,
    },
    snippet: {
      background: '#414142',
    },
  },
} as { [T in THEME]: Theme };
