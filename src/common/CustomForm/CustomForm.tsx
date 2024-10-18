import React, {Children, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {CustomFormProps, FormField} from './type';
import styles from './StylesCustomForm';
import DatePicker from 'react-native-date-picker';

const CustomForm: React.FC<CustomFormProps> = ({
  fields,
  onSubmit,
  buttonLabel = 'Submit',
  validationSchema,
  children,
}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [isDatePickerVisible, setDatePickerVisible] = useState<boolean>(false);
  const [currentFieldOnChange, setCurrentFieldOnChange] = useState<
    ((value: any) => void) | null
  >(null);
  const [currentFieldType, setCurrentFieldType] = useState<
    'date' | 'time' | null
  >(null);

  const getInputWrapperStyle = (fieldName: string) => {
    if (errors[fieldName]) {
      return [styles.inputWrapper, styles.errorInputWrapper];
    } else if (focusedField === fieldName) {
      return [styles.inputWrapper, styles.focusedInputWrapper];
    } else {
      return styles.inputWrapper;
    }
  };

  const getLabelStyle = (fieldName: string) => {
    if (errors[fieldName]) {
      return [styles.label, styles.errorLabel];
    } else {
      return styles.label;
    }
  };

  const handleDateConfirm = () => {
    setDatePickerVisible(false);
    if (currentFieldOnChange && date) {
      const formattedValue =
        currentFieldType === 'date'
          ? date.toISOString().split('T')[0]
          : date.toTimeString().split(' ')[0];
      currentFieldOnChange(formattedValue);
    }
    setCurrentFieldOnChange(null);
    setCurrentFieldType(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.formContainer}>
      <View style={styles.WrapperView}>
        {fields.map((field: FormField) => (
          <View
            key={field.name}
            style={[styles.fieldContainer, field.customContainerStyles]}>
            {field.label && (
              <Text
                style={[getLabelStyle(field.name), field.customLabelStyles]}>
                {field.label}
                {field.required && (
                  <Text
                    style={[
                      styles.required,
                      errors[field.name]
                        ? styles.errorText
                        : styles.defaultText,
                    ]}>
                    {' *'}
                  </Text>
                )}
              </Text>
            )}

            <View style={getInputWrapperStyle(field.name)}>
              {field.icon && field.iconPosition === 'left' && (
                <View>{field.icon}</View>
              )}
              <Controller
                control={control}
                name={field.name}
                defaultValue={field.value || ''}
                render={({field: {onChange, onBlur, value}}) => (
                  <TouchableOpacity
                    onPress={() => {
                      if (field.name === 'date') {
                        setCurrentFieldOnChange(() => onChange);
                        setCurrentFieldType('date');
                        setDatePickerVisible(true);
                      } else if (field.name === 'time') {
                        setCurrentFieldOnChange(() => onChange);
                        setCurrentFieldType('time');
                        setDatePickerVisible(true);
                      }
                    }}>
                    <TextInput
                      style={styles.input}
                      placeholder={field.placeholder}
                      value={
                        field.name === 'date' || field.name === 'time'
                          ? value
                            ? value.toString()
                            : ''
                          : value.toString()
                      }
                      editable={field.name !== 'date' && field.name !== 'time'}
                      onBlur={() => {
                        onBlur();
                        setFocusedField(null);
                      }}
                      onFocus={() => setFocusedField(field.name)}
                      onChangeText={text => {
                        if (
                          field.keyboardType === 'phone-pad' ||
                          field.keyboardType === 'numeric'
                        ) {
                          if (text == '') {
                            onChange(0);
                          } else {
                            onChange(parseFloat(text));
                          }
                        } else {
                          onChange(text);
                        }
                        field.onChangeText?.(text);
                      }}
                      secureTextEntry={field.secureTextEntry}
                      maxLength={field.maxLength}
                      keyboardType={field.keyboardType}
                      multiline={field.multiline}
                    />
                  </TouchableOpacity>
                )}
              />
              {field.icon && field.iconPosition === 'right' && (
                <View>{field.icon}</View>
              )}
            </View>

            {errors[field.name] && (
              <Text style={[styles.errorText, field.customErrorStyles]}>
                {errors[field.name]?.message as string}
              </Text>
            )}
          </View>
        ))}
        {children}
        <Modal
          transparent={true}
          visible={isDatePickerVisible}
          animationType="slide">
          <View style={styles.datePickerContainer}>
            <DatePicker
              date={date || new Date()}
              mode={currentFieldType === 'date' ? 'date' : 'time'}
              onDateChange={setDate}
            />

            <View style={styles.datePickerButtons}>
              <TouchableOpacity
                onPress={handleDateConfirm}
                style={styles.confirmButton}>
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setDatePickerVisible(false)}
                style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.submitButtonText}>{buttonLabel}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CustomForm;
