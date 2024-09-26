import React from 'react';
import { Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import NetworkLogger from 'react-native-network-logger';
import styles from './StyleScreenNetworkLogger';
import { Routes } from '../../routes/Routes';


export const ScreenNetworkLogger = ({navigation} : any) => {
  return (
      <SafeAreaView style={styles.container}>
          <NetworkLogger />
          <TouchableOpacity onPress={() => navigation.navigate(Routes.TAB)}>
              <View style={styles.textContainer}>
                  <Text style={styles.backText}>Back</Text>
              </View>
          </TouchableOpacity>
      </SafeAreaView>
  );
};
