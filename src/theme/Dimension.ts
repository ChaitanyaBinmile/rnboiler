import { Dimensions, Platform, PixelRatio } from 'react-native';

// https://medium.com/nerd-for-tech/react-native-styles-normalization-e8ce77a3110c

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const screenWidth = width;
const screenHeight = height;

// Guideline sizes are based on standard iPhone 11 screen mobile device
// const guidelineBaseWidth = 414;
// const guidelineBaseHeight = 896;

const widthBaseScale = width / 428;
const heightBaseScale = height / 926;

function normalize(size: number, based = 'width') {
  const newSize = based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

// for width  pixel
const widthPixel = (size: number) => normalize(size, 'width');
// for height  pixel
const heightPixel = (size: number) => normalize(size, 'height');
// for font  pixel
const fontPixel = (size: number) => Platform.OS === 'ios' ? heightPixel(size) : heightPixel(size + 2);
// for Margin and Padding vertical pixel
const pixelSizeVertical = (size: number) => heightPixel(size);
// for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size: number) => widthPixel(size);

// based on iphone 5s's scale
const scale = height / 600;

const normalizeSize = (size: number) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

const paddingVertical = (size: number) => heightPixel(size);

export { widthPixel, heightPixel, fontPixel, pixelSizeVertical, pixelSizeHorizontal, screenWidth, screenHeight, normalizeSize, paddingVertical };
