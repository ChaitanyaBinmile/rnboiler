import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import styles from './StyleComponentNoNetwork';
import CustomBottomSheet from '../../common/CustomBottomSheet/CustomBottomSheet';
import {NoInternetImage} from '../../assets/images/ImageData';

const ComponentNoNetwork: React.FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(true);
  const [isBottomSheetVisible, setIsBottomSheetVisible] =
    useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      const connected = state.isConnected || false;
      setIsConnected(connected);
      setIsBottomSheetVisible(!connected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (isConnected) {
    return null;
  }

  return (
    <CustomBottomSheet
      visible={isBottomSheetVisible}
      onClose={() => setIsBottomSheetVisible(false)}
      customBottomStyles={styles.container}
      transparent={true}>
      <Text style={styles.titleText}>No Connection</Text>
      <Image source={NoInternetImage} style={styles.noInterNetView} />
      <Text style={styles.text}>Please check your internet connection</Text>
    </CustomBottomSheet>
  );
};

export default ComponentNoNetwork;
