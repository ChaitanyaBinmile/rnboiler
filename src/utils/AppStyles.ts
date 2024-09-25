import { Dimensions } from 'react-native';

export const ScreenDimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export const FontTheme = {
  BOLD: 'Poppins-Bold',
  MEDIUM: 'Poppins-Medium',
  REGULAR: 'Poppins-Regular',
  SEMI_BOLD: 'Poppins-SemiBold',
};

export const ColorThemeLight = {
  PRIMARY_COLOR: '#2AA87D',
  PRIMARY_RED_COLOR: '#E5214E',
  PRIMARY_SUB_COLOR: '#FCEEE6',
  SECONDARY_SUB_COLOR_01: '#248E6A',
  SECONDARY_SUB_COLOR_02: '#5DC19B',
  SECONDARY_SUB_COLOR_03: '#E2FAEF',
  PRIMARY_BACKGROUND: '#FFFFFF',
  SECONDARY_BACKGROUND: '#F0F0F5',
  OVERLAY_LIGHT_BACKGROUND: '#D9DADB',
  OVERLAY_DARK_BACKGROUND: '#676A6D',
  TEXT_PRIMARY_EMPHASIS: '#171A1E',
  TEXT_SECONDARY_EMPHASIS: '#414449',
  TEXT_TERTIARY_EMPHASIS: '#676A6D',
  BACKGROUND_QUATERNARY_EMPHASIS: '#8D8F91',
  TEXT_COLOR_HEADING: '#000000',
  TEXT_COLOR_CONTENT: '#454545',
  GREEN_06: '#2AA87D',
  GREEN_BG: '#2DA77D',
  DARK_03: '#3A3B46',
};

export const ColorThemeDark = {
  PRIMARY_COLOR: '#2AA87D',
  PRIMARY_RED_COLOR: '#E5214E',
  PRIMARY_SUB_COLOR: '#FCEEE6',
  SECONDARY_SUB_COLOR_01: '#248E6A',
  SECONDARY_SUB_COLOR_02: '#231F20',
  SECONDARY_SUB_COLOR_03: '#E2FAEF',
  PRIMARY_BACKGROUND: '#03060B',
  SECONDARY_BACKGROUND: '#FFFFFF',
  OVERLAY_LIGHT_BACKGROUND: '#03060B',
  OVERLAY_DARK_BACKGROUND: '#03060B',
  TEXT_PRIMARY_EMPHASIS: '#EBEBEC',
  TEXT_SECONDARY_EMPHASIS: '#BFC0C2',
  TEXT_TERTIARY_EMPHASIS: '#9A9B9E',
  BACKGROUND_QUATERNARY_EMPHASIS: '#74767A',
  GREEN_06: '#2AA87D',
  GREEN_BG: '#2DA77D',
  DARK_03: '#3A3B46',
};
