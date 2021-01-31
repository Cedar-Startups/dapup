/**
 * @file Color palette
 * Taken from https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/foundations/colors.ts
 */

const gray = {
  gray50: '#F7FAFC',
  gray100: '#EDF2F7',
  gray200: '#E2E8F0',
  gray300: '#CBD5E0',
  gray400: '#A0AEC0',
  gray500: '#718096',
  gray600: '#4A5568',
  gray700: '#2D3748',
  gray800: '#1A202C',
  gray900: '#171923',
};

const blue = {
  blue50: '#ebf8ff',
  blue100: '#bee3f8',
  blue200: '#90cdf4',
  blue300: '#63b3ed',
  blue400: '#4299e1',
  blue500: '#3182ce',
  blue600: '#2b6cb0',
  blue700: '#2c5282',
  blue800: '#2a4365',
  blue900: '#1A365D',
};

const red = {
  red50: '#FFF5F5',
  red100: '#FED7D7',
  red200: '#FEB2B2',
  red300: '#FC8181',
  red400: '#F56565',
  red500: '#E53E3E',
  red600: '#C53030',
  red700: '#9B2C2C',
  red800: '#822727',
  red900: '#63171B',
};

const orange = {
  orange50: '#FFFAF0',
  orange100: '#FEEBC8',
  orange200: '#FBD38D',
  orange300: '#F6AD55',
  orange400: '#ED8936',
  orange500: '#DD6B20',
  orange600: '#C05621',
  orange700: '#9C4221',
  orange800: '#7B341E',
  orange900: '#652B19',
};

const palette = {
  black: '#000000',
  white: '#fffff',
  ...gray,
  ...red,
  ...orange,
  ...blue,
};

export default palette;
