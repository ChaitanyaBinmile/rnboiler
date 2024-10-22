import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { CustomDateTimeProps } from './type';
import english from '../../assets/lang/English/LangEnglish';

const CustomDateTimeFormat: React.FC<CustomDateTimeProps> = ({ date, utcdate }) => {
  const [formattedDate, setFormattedDate] = useState<string | null>(null);
  const [epochConverted, setEpochConverted] = useState<string | null>(null);
  const [isoFormattedDate, setIsoFormattedDate] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (date) {
      if (isEpoch(date)) {
        setFormattedDate(formatDateFromEpoch(String(date)));
        setErrorMessage(null); 
      } else {
        setErrorMessage(english.ERROR_MESSAGE);
        setFormattedDate(null);
      }
    }
  }, [date]);

  useEffect(() => {
    if (utcdate) {
      const convertedEpoch = convertToEpoch(utcdate);
      if (convertedEpoch) {
        setEpochConverted(convertedEpoch);
        // const isoString = new Date(utcdate).toISOString();
        setErrorMessage(null); 
      } else {
        setErrorMessage(english.ERROR_MESSAGE);
        setEpochConverted(null);
      }
    }
  }, [utcdate]);

  const isEpoch = (value: any): boolean => {
    return  Number.isInteger(Number(value));
  };

  const formatDateFromEpoch = (epoch: string): string => {
    const timestamp = Number(epoch) * 1000; 
    const date = new Date(timestamp);
    
    const isoString = date.toISOString();
    setIsoFormattedDate(isoString);

    return `${date.toLocaleString('en-US', { month: 'long' })} ${date.getDate()} ${date.getFullYear()}, ${date.toLocaleTimeString('en-US')}`;
  };

  const convertToEpoch = (utcdate: string): string | null => {
    const utcDateObject = new Date(utcdate);
    if (isNaN(utcDateObject.getTime())) {
      return null;
    }
    return Math.floor(utcDateObject.getTime() / 1000).toString(); 
  };



  return (
    <View>
      {errorMessage && <Text>{errorMessage}</Text>}
      {formattedDate && <Text>{english.DATETIME_EPOCH_FUNCTION} {formattedDate}</Text>}
      {epochConverted && <Text>{english.DATETIME_UTC_FUNCTION} {epochConverted}</Text>}
      {isoFormattedDate && <Text>{english.DATETIME_ISO_FUNCTION} {isoFormattedDate}</Text>}
    </View>
  );
};

export default CustomDateTimeFormat;