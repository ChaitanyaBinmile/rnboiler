import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomFormProps, FormField } from './Types/CustomFormProps';
import styles from './StylesCustomForm';

const CustomForm: React.FC<CustomFormProps> = ({ fields, onSubmit, buttonLabel = 'Submit', validationSchema }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
  });

  return (
    <ScrollView contentContainerStyle={styles.formContainer}>
      {fields.map((field: FormField) => (
        <View key={field.name} style={[styles.fieldContainer, field.customContainerStyles]}>
          {field.label && (
            <Text style={[styles.label, field.customLabelStyles]}>
              {field.label}{field.required && <Text style={styles.required}>*</Text>}
            </Text>
          )}
          <View style={styles.inputWrapper}>
            {field.icon && field.iconPosition === 'left' && <View>{field.icon}</View>}
            <Controller
              control={control}
              name={field.name}
              defaultValue={field.value || ''}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[styles.input, field.customInputStyles]}
                  placeholder={field.placeholder}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(text) => {
                    onChange(text);
                    field.onChangeText?.(text);
                  }}
                  secureTextEntry={field.secureTextEntry}
                  maxLength={field.maxLength}
                  keyboardType={field.keyboardType}
                  multiline={field.multiline}
                  onFocus={field.onFocus}
                />
              )}
            />
            {field.icon && field.iconPosition === 'right' && <View>{field.icon}</View>}
          </View>
          {errors[field.name] && (
            <Text style={[styles.errorText, field.customErrorStyles]}>
              {errors[field.name]?.message as string}
            </Text>
          )}
        </View>
      ))}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitButtonText}>{buttonLabel}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CustomForm;
