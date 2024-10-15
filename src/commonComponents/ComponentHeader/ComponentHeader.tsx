import { ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styleHeader';
import { NavigationProp } from '@react-navigation/native';
import { DrawerStackParamList } from '../../routes/type';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type HeaderProps = {
  title: string,
  leftIcon?: ReactNode,
  rightIcon?: ReactNode,
  onIconPress?: ()=> void
};

function ComponentHeader({

  title,
  leftIcon,
  rightIcon,
  onIconPress,
}: HeaderProps) {
 return(
<View style={styles.mainContainer}>
{
  leftIcon && <TouchableOpacity onPress={onIconPress}>{leftIcon}</TouchableOpacity> 
}
  {
    title && <Text>{title}</Text>
  }
  {rightIcon && rightIcon}
</View>
 )
}
export default ComponentHeader;
