import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './StyleButtonInterceptor';
import { useNavigation } from '@react-navigation/native';
import Config from '../../app/Config';
import DeviceInfo from 'react-native-device-info';
import UserRoute from '../../routes/RoutesUser/UserRouteName';

interface ButtonInterceptorProps {
  show: boolean;
}

export const ButtonInterceptor: React.FC<ButtonInterceptorProps> = ({ show }) => {
  const color = Config.isStaging ? '#FF1744' : '#F4511E';
  const buttonText = Config.isStaging ? 'S' : 'P';
  const containerStyle = { backgroundColor: color };
  const navigation = useNavigation();

  if (!show) return null;
  return (
      <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate(UserRoute.ScreenNetworkLogger as never);
      }}
      style={styles.buttonStyle}>
          <View style={{ ...containerStyle, ...styles.containerStyle }}>
              <Text style={styles.versionTextStyle}>{`${DeviceInfo.getVersion()}` || '-'}</Text>
              <Text style={styles.textInputStyle}>{buttonText}</Text>
          </View>
      </TouchableOpacity>
  );
};
