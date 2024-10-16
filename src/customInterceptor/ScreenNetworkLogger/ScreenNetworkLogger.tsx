import React from 'react';
import {Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import NetworkLogger from 'react-native-network-logger';
import styles from './StyleScreenNetworkLogger';
import {useNavigation} from '@react-navigation/native';
import { NavigationType } from '../../routes/type';

export const ScreenNetworkLogger = () => {
  const navigation = useNavigation<NavigationType>();

  return (
    <SafeAreaView style={styles.container}>
      <NetworkLogger />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.textContainer}>
          <Text style={styles.backText}>Back</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
