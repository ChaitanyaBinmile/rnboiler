import { Text, View } from 'react-native';
import Toast, { BaseToast, BaseToastProps, ErrorToast } from 'react-native-toast-message';
import { CustomToastProp } from './type';
import { fontPixel } from '../../theme/Dimension';
import {styles} from './StyleCustomToast'
import { COLORS } from '../../theme/theme';
import { widthPixel } from '../../theme/Dimension';
export const toastConfig = {
  
  success: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: COLORS.success }}
      contentContainerStyle={{ paddingHorizontal: widthPixel(15) }}
      text1Style={{
        fontSize: fontPixel(15),
        fontWeight: '400'
      }}
      //We can write more custom style here
    />
  ),
 
  error: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: COLORS.errorRed }}

      text1Style={{
        fontSize: fontPixel(17),
        fontWeight:'500',
      }}
      text2Style={{
        fontSize: fontPixel(15)
      }}
      //We can write more custom style here
    />
  ),
  customToast: ({ text1, props }:CustomToastProp) => (
    <View style={styles.custom}>
      <Text>{text1}</Text>
      {props?.uuid && <Text>{props.uuid}</Text>}
    </View>
  )
  
  
};