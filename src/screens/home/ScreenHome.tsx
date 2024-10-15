import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import styles from './StylesHome';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Home</Text>
      </View>
    </SafeAreaView>
  );
};



export default Home;
