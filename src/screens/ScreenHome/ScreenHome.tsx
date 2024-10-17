import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import ComponentHeader from '../../commonComponents/ComponentHeader/ComponentHeader';
import Icons from '../../assets/images/svgIcons/SvgData';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {CommonText} from '../../commonComponents/CommonText/CommonText';
import {COLORS} from '../../theme/theme';
import {FontTheme} from '../../utils/AppStyles';

const ScreenHome = () => {
  const navigation = useNavigation();
  const handleDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <SafeAreaView style={styles.container}>
      <ComponentHeader
        title="home page"
        leftIcon={<Icons.MenuIcon />}
        onIconPress={handleDrawer}
      />
      <View style={styles.content}>
        {/* <Text style={styles.text}>Home</Text> */}
        <CommonText
          fontSize="18"
          color={COLORS.primaryRedHex}
          fontFamily={FontTheme.MEDIUM}
          fontWeight={700}
          letterSpacing='1.2'
          marginBottom='10'
          textAlign="center">
          Text One
        </CommonText>
        <CommonText
          fontSize="18"
          color={COLORS.primaryBlackHex}
          fontFamily={FontTheme.MEDIUM}
          fontWeight={400}
          textAlign="center"
          >
          Text Two
        </CommonText>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Set a background color for the safe area
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default ScreenHome;
