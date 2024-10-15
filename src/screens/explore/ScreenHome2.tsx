import React, { useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo } from '../../services/redux/slices/dummySlice';
import { RootState } from '../../services/redux/rootReducer/rootState';
import styles from './StylesHome2';

const Home2 = () => {
  const dispatch=useDispatch()
useEffect(()=>{
dispatch(getTodo())
},[])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Home2</Text>
      </View>
    </SafeAreaView>
  );
};


export default Home2;
