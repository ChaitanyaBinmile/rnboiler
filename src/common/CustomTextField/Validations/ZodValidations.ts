import * as z from 'zod';

export const emailSchema = z
  .string()
  .min(1, { message: 'Email is required.' }) 
  .email({ message: 'Please enter a valid email address.' }); 


export const passwordSchema = z.string().min(6, 'Password must be at least 6 characters long.');

export const descriptionSchema = z.string().min(5, 'Description must be at least 5 characters long.');
