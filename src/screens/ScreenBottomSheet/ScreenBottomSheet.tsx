import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import CustomBottomSheet from '../../common/CustomBottomSheet/CustomBottomSheet';
import {styles} from './StyleScreenBottomSheet';
import english from '../../assets/lang/English/LangEnglish';
import {BottomSheetData} from './dummy/data';
const ScreenBottomSheet = () => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const openBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openBottomSheet} style={styles.addButton}>
        <Text style={styles.addButtonText}>
          {english.BOTTOMSHEET_ONCLICKBUTTONTEXT}
        </Text>
      </TouchableOpacity>
      <CustomBottomSheet
        visible={bottomSheetVisible}
        onClose={closeBottomSheet}
        customBottomStyles={{}}
        transparent={BottomSheetData.transparent}>
        <Text>hello</Text>
      </CustomBottomSheet>
    </View>
  );
};

export default ScreenBottomSheet;
