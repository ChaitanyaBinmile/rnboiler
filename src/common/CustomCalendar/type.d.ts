export interface CustomCalendarProps {
    selectedDate: string | null;
    onDateChange: (date: string) => void;
    customStyles?: {
      container?: ViewStyle;
      selectedColor?: string;
      selectedTextColor?: string;
      calendarBackground?: string;
      textDayFontSize?: number;
      weekdayColor?: string;
      weekendColor?: string;
      arrowColor?: string;
      monthTextColor?: string;
      weekdayText?:number;
    };
    markedDates?: Record<string, any>;
    children: ReactNode;
  }