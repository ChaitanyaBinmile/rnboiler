import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export interface CustomBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  // margin: number;
  // padding: number;
  // height: number; //height of Bottom Sheet
  transparent: boolean; //background screen
  children: ReactNode,
  customBottomStyles: ViewStyle,
}
