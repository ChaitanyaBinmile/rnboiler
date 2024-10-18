import { heightPixel, normalizeSize, widthPixel } from './Dimension';

interface Spacing {
    space_2: number;
    space_4: number;
    space_8: number;
    space_10: number;
    space_12: number;
    space_15: number;
    space_16: number;
    space_18: number;
    space_20: number;
    space_24: number;
    space_28: number;
    space_30: number;
    space_32: number;
    space_36: number;
  }

  export const SPACING: Spacing = {
    space_2: widthPixel(2),
    space_4: widthPixel(4),
    space_8: widthPixel(8),
    space_10: widthPixel(10),
    space_12: widthPixel(12),
    space_15: widthPixel(15),
    space_16: widthPixel(16),
    space_18: widthPixel(18),
    space_20: widthPixel(20),
    space_24: widthPixel(24),
    space_28: widthPixel(28),
    space_30: widthPixel(30),
    space_32: widthPixel(32),
    space_36: widthPixel(36),
  };

  interface Color {
    primaryRedHex: string;
    primaryOrangeHex: string;
    primaryBlackHex: string;
    primaryDarkGreyHex: string;
    secondaryDarkGreyHex: string;
    primaryGreyHex: string;
    secondaryGreyHex: string;
    primaryLightGreyHex: string;
    secondaryLightGreyHex: string;
    primaryWhiteHex: string;
    primaryBlackRGBA: string;
    secondaryBlackRGBA: string;
    transparent: string;
    focusBlue: string;
  errorRed: string;
  defaultBlack: string;
  buttonBlue: string;
  buttonTextWhite: string;
  }

  export const COLORS: Color = {
    primaryRedHex: '#DC3535',
    primaryOrangeHex: '#D17842',
    primaryBlackHex: '#0C0F14',
    primaryDarkGreyHex: '#141921',
    secondaryDarkGreyHex: '#21262E',
    primaryGreyHex: '#252A32',
    secondaryGreyHex: '#252A32',
    primaryLightGreyHex: '#52555A',
    secondaryLightGreyHex: '#AEAEAE',
    primaryWhiteHex: '#FFFFFF',
    primaryBlackRGBA: 'rgba(12,15,20,0.5)',
    secondaryBlackRGBA: 'rgba(0,0,0,0.7)',
    transparent: 'transparent',
    focusBlue: '#1876d1',
    errorRed: 'red',
    defaultBlack: '#000',
    buttonBlue: '#004CFFFF',
    buttonTextWhite: '#fff',
  };

  interface FontFamily {
    poppins_black: string;
    poppins_bold: string;
    poppins_extrabold: string;
    poppins_extralight: string;
    poppins_light: string;
    poppins_medium: string;
    poppins_regular: string;
    poppins_semibold: string;
    poppins_thin: string;
  }

  export const FONTFAMILY: FontFamily = {
    poppins_black: 'Poppins-Black',
    poppins_bold: 'Poppins-Bold',
    poppins_extrabold: 'Poppins-ExtraBold',
    poppins_extralight: 'Poppins-ExtraLight',
    poppins_light: 'Poppins-Light',
    poppins_medium: 'Poppins-Medium',
    poppins_regular: 'Poppins-Regular',
    poppins_semibold: 'Poppins-SemiBold',
    poppins_thin: 'Poppins-Thin',
  };

  interface BorderRadius {
    radius_4: number;
    radius_8: number;
    radius_10: number;
    radius_15: number;
    radius_20: number;
    radius_25: number;
  }

  export const BORDERRADIUS: BorderRadius = {
    radius_4: normalizeSize(4),
    radius_8: normalizeSize(8),
    radius_10: normalizeSize(10),
    radius_15: normalizeSize(15),
    radius_20: normalizeSize(20),
    radius_25: normalizeSize(25),
  };
