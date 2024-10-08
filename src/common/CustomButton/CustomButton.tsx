import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {CustomButtonProps} from './Types/CustomButtonInterface';
import {styles} from './StylesCustomButton';

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  isLoading = false,
  isDisabled = false,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  customStyles,
  customTextStyles,
}) => {
  const getButtonStyle = (): ViewStyle => {
    const baseStyle = styles.buttonBase;
    const variantStyle = styles[`${variant}Button`] || styles.primaryButton;
    const sizeStyle = styles[`${size}Button`] || styles.mediumButton;

    return {
      ...baseStyle,
      ...variantStyle,
      ...sizeStyle,
      opacity: isDisabled || isLoading ? 0.6 : 1,
      ...customStyles,
    };
  };

  const getTextStyle = (): TextStyle => {
    return {
      ...styles.buttonText,
      ...styles[`${size}Text`],
      ...customTextStyles,
    };
  };

  const renderContent = () => (
    <>
      {icon && iconPosition === 'left' && (
        <View style={styles.iconLeft}>{icon}</View>
      )}
      <Text style={getTextStyle()}>{title}</Text>
      {icon && iconPosition === 'right' && (
        <View style={styles.iconRight}>{icon}</View>
      )}
    </>
  );

  return (
    <TouchableOpacity
      onPress={isLoading || isDisabled ? undefined : onPress}
      style={getButtonStyle()}
      disabled={isDisabled}
      >
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <View style={styles.contentWrapper}>{renderContent()}</View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
