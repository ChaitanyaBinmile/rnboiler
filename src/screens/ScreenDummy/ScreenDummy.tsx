import React, {useEffect} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './StylesDummy';
import { getTodo } from '../../services/redux/slices/dummySlice';

const ScreenDummy = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodo());
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Home2</Text>
      </View>
    </SafeAreaView>
  );
};

export default ScreenDummy;
