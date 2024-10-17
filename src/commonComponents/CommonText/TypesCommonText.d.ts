import { TextStyle } from "react-native";

export interface CommonTextProps {
  children: React.ReactNode;
  fontSize?: string;
  fontWeight?: TextStyle['fontWeight'];
  color?: string;
  lineHeight?: string;
  letterSpacing?: string;
  marginHorizontal?: string;
  marginVertical?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingHorizontal?: string;
  paddingVertical?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  textAlign?: TextStyle['textAlign'];
  fontFamily?: string;
  textStyle?: TextStyle;
}
