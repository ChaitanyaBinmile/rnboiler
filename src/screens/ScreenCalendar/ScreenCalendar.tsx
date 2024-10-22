import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomCalendar from '../../common/CustomCalendar/CustomCalendar';
import {styles} from './StyleScreenCalendar';
import { COLORS } from '../../theme/theme';
import { fontPixel } from '../../theme/Dimension';


const ScreenCalendar= () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const onDateChange=(date:string)=>{
    setSelectedDate(date);
    console.log(date);
  }

  return (
    <View style={styles.container}>
       <CustomCalendar
        selectedDate={selectedDate}
        onDateChange={onDateChange}
        customStyles={{
          selectedColor: COLORS.buttonBlue,
          calendarBackground: COLORS.buttonTextWhite,
          arrowColor: COLORS.primaryBlackRGBA,
          weekdayText: fontPixel(14),
          weekdayColor: COLORS.defaultBlack,
          textDayFontSize: fontPixel(18),
          monthTextColor: COLORS.defaultBlack,
          selectedTextColor: COLORS.buttonTextWhite
        }} 
        children={undefined}      />
    </View>
  );
};

export default ScreenCalendar;
