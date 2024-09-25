import React, { useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo } from '../../services/redux/slices/dummySlice';
import { RootState } from '../../services/redux/rootReducer/rootState';
import styles from './StylesHome2';

const Home2 = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.reducerDummy.todoList);
  console.log('todoList', todoList);

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Home2</Text>

        
        <FlatList
          data={todoList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <Text style={styles.todoText}>{item}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};


export default Home2;
