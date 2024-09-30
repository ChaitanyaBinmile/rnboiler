import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { emailSchema } from '../../common/CustomTextField/Validations/ZodValidations';  
import CustomTextField from '../../common/CustomTextField/CustomTextField';
import HomeInActiveSvg from '../../assets/images/BottomTabIcons/HomeInActiveSvg';  
import styles from './StylesHome2';
import CustomAutoComplete from '../../common/CustomAutoComplete/CustomAutoComplete';

const Home2 = () => {


  const [query, setQuery] = useState('');
  const data = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango', 'Pineapple', 'Avocado'];

  const filteredData = query
    ? data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Custom AutoComplete Example</Text>
      <CustomAutoComplete
        inputContainerStyle={styles.inputContainer}
        listStyle={styles.list}
        hideResults={filteredData.length === 0} 
        data={filteredData}
        value={query}
        onChangeText={setQuery}
        placeholder="Type a fruit..."
        flatListProps={{
          keyExtractor: (item) => item,
          renderItem: ({ item }) => (
            <Text style={styles.listItem}>{item}</Text>
          ),
        }}
        onShowResults={(show) =>
          console.log(show ? 'Results shown' : 'Results hidden')
        }
        onStartShouldSetResponderCapture={() => true}
      />
    </SafeAreaView>
  );
};

export default Home2;
