import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Calendar } from 'react-native-calendars';
import {styles} from './StyleCustomCalendar'
import { CustomCalendarProps } from './type';

const CustomCalendar: React.FC<CustomCalendarProps> = ({
  selectedDate,
  onDateChange,
  customStyles,
  markedDates={},
  children,
}) => {
  return (
    <View style={[styles.calendarContainer, customStyles?.container]}>
      <Calendar
        markedDates={{
          [selectedDate || '']: { 
            selected: true, 
            selectedColor: customStyles?.selectedColor || styles.selectedColor, 
            selectedTextColor: customStyles?.selectedTextColor || styles.selectedTextColor,
          },
          ...markedDates,
        }}
        onDayPress={(day: any) => onDateChange(day.dateString)}
        theme={{
          calendarBackground: customStyles?.calendarBackground || styles.calendarBackground,
          textDayFontSize: customStyles?.textDayFontSize || styles.textDayFontSize,
          textSectionTitleColor: customStyles?.weekdayColor || styles.weekdayColor,
          textDayHeaderFontSize: customStyles?.weekdayText || styles.weekdayText,
          arrowColor: customStyles?.arrowColor || styles.arrowColor,
          monthTextColor: customStyles?.monthTextColor || styles.monthTextColor,
        }}
        renderArrow={(direction:string) => (
          <TouchableOpacity>
            <Text style={ styles.arrowStyle }>
              {direction === 'left'  ? '<' : '>'}
            </Text>
          </TouchableOpacity>
        )}
      />
      {children && (
        <View style={styles.childrenContainer}>
            {children}
        </View>
      )}
    </View>
  );
};



export default CustomCalendar;
