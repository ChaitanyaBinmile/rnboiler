import React from 'react';
import {View} from 'react-native';
import {z} from 'zod';

export const validationSchemaText = z.object({
  singleLineText: z.string().min(1, 'This field is required'),
  multiLineText: z.string().min(10, 'This field is required'),
  country: z
    .string()
    .min(2, 'Please enter a valid country')
    .max(50, 'Country name is too long'),
  state: z
    .string()
    .min(2, 'Please enter a valid state')
    .max(50, 'State name is too long'),
  houseNumber: z
    .string()
    .regex(/^(?=.*\d)[A-Za-z0-9]+$/, 'House Number must be at least 1 digits'),
  location: z.string().min(5, 'Please enter a valid location'),
  email: z.string().email('Please enter a valid email'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .regex(
      /(?=.*\d)(?=.*[!@#$%^&*()])/,
      'Password must contain at least one number and one special character',
    ),
  url: z.string().refine(value => /^(https?):\/\//i.test(value), {
    message: 'Please enter a valid URL',
  }),
  phoneNumber: z.string().min(10, 'Please enter correcr number'),
  postalCode: z
    .string()
    .regex(/^\d{6,}$/, 'Postal Code must be at least 6 digits'),
  date: z.string().refine(
    value => {
      const date = new Date(value);
      return !isNaN(date.getTime());
    },
    {
      message: 'Enter a valid date',
    },
  ),
  range: z.number().gte(10).lte(100, 'Range must be between 0 and 100'),
});
