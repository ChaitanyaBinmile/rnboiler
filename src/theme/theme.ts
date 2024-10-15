import { fontPixel, heightPixel, widthPixel } from './Dimension';

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

  interface FontSize {
    size_8: number;
    size_10: number;
    size_12: number;
    size_14: number;
    size_16: number;
    size_18: number;
    size_20: number;
    size_24: number;
    size_28: number;
    size_30: number;
  }

  export const FONTSIZE: FontSize = {
    size_8: fontPixel(12.5),
    size_10: fontPixel(14.5),
    size_12: fontPixel(16.5),
    size_14: fontPixel(18.5),
    size_16: fontPixel(20.5),
    size_18: fontPixel(22.5),
    size_20: fontPixel(24.5),
    size_24: fontPixel(28.5),
    size_28: fontPixel(32.5),
    size_30: fontPixel(34.5),
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
    radius_4: 4,
    radius_8: 8,
    radius_10: 10,
    radius_15: 15,
    radius_20: 20,
    radius_25: 25,
  };
