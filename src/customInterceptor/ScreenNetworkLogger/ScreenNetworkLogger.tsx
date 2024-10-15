import React from 'react';
import { Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import NetworkLogger from 'react-native-network-logger';
import styles from './StyleScreenNetworkLogger';
import UserRoute from '../../routes/RoutesUser/UserRouteName';


export const ScreenNetworkLogger = ({navigation}) => {
  return (
      <SafeAreaView style={styles.container}>
          <NetworkLogger />
          <TouchableOpacity onPress={() => navigation.navigate(UserRoute.TAB)}>
              <View style={styles.textContainer}>
                  <Text style={styles.backText}>Back</Text>
              </View>
          </TouchableOpacity>
      </SafeAreaView>
  );
};
