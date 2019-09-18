import colorPalette from './palette';

const fontSizes = {
  fontSizeSmall: '0.75em',
  fontSizeNormal: '1em',
  fontSizeLarge: '1.25em',
};

const light = {
  primary: colorPalette.$color_27,
  secondary: colorPalette.$color_21,
  defaultTextColor: colorPalette.$color_0F,
  headerBackgroundColor: colorPalette.$color_20,
  sectionBackgroundColor: colorPalette.$color_20,
  sectionBorderColor: colorPalette.$color_black,
  ...fontSizes,
};

const dark = {
  primary: colorPalette.$color_03,
  secondary: colorPalette.$color_0A,
  defaultTextColor: colorPalette.$color_20,
  headerBackgroundColor: colorPalette.$color_0F,
  sectionBackgroundColor: colorPalette.$color_0F,
  sectionBorderColor: colorPalette.$color_white,
  ...fontSizes,
};

export const themes = {
  light,
  dark,
};
