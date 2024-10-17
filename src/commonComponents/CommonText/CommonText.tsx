import React from 'react';
import { Text, TextStyle } from 'react-native';
import { fontPixel, heightPixel, widthPixel } from '../../theme/Dimension';
import { CommonTextProps } from './TypesCommonText';

export const CommonText: React.FC<CommonTextProps> = ({
  children,
  fontSize = '16',
  fontWeight,
  color = '#000',
  lineHeight,
  letterSpacing,
  marginHorizontal,
  marginVertical,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  textAlign,
  fontFamily,
  textStyle,
}) => {
  const dynamicStyle: TextStyle = {
    fontSize: fontPixel(parseInt(fontSize)),
    fontWeight: fontWeight,
    color: color,
    lineHeight: lineHeight ? heightPixel(parseInt(lineHeight)) : undefined,
    letterSpacing: letterSpacing ? widthPixel(parseFloat(letterSpacing)) : undefined,
    marginHorizontal: marginHorizontal ? widthPixel(parseInt(marginHorizontal)) : undefined,
    marginVertical: marginVertical ? heightPixel(parseInt(marginVertical)) : undefined,
    marginTop: marginTop ? heightPixel(parseInt(marginTop)) : undefined,
    marginBottom: marginBottom ? heightPixel(parseInt(marginBottom)) : undefined,
    marginLeft: marginLeft ? widthPixel(parseInt(marginLeft)) : undefined,
    marginRight: marginRight ? widthPixel(parseInt(marginRight)) : undefined,
    paddingHorizontal: paddingHorizontal ? widthPixel(parseInt(paddingHorizontal)) : undefined,
    paddingVertical: paddingVertical ? heightPixel(parseInt(paddingVertical)) : undefined,
    paddingTop: paddingTop ? heightPixel(parseInt(paddingTop)) : undefined,
    paddingBottom: paddingBottom ? heightPixel(parseInt(paddingBottom)) : undefined,
    paddingLeft: paddingLeft ? widthPixel(parseInt(paddingLeft)) : undefined,
    paddingRight: paddingRight ? widthPixel(parseInt(paddingRight)) : undefined,
    textAlign: textAlign,
    fontFamily: fontFamily,
  };

  return (
    <Text style={[dynamicStyle, textStyle]}>
      {children}
    </Text>
  );
};
