import { LANGUAGE_ENGLISH, LANGUAGE_TAMIL } from './LocalizationProvider';
import { ReactNode } from 'react';
import { LangTypes } from '../../assets/lang/types/LangTypes';

export interface ChildrenType {
  children: React.FunctionComponent;
}
export interface ProviderType {
  children: ReactNode;
}
export interface ContextType {
  appLanguage: string;
  setAppLanguage: (lang: string) => void;
  translations: LangTypes;
}
export interface TranslationsTypes {
  [LANGUAGE_ENGLISH]: LangTypes;
  [LANGUAGE_TAMIL]: LangTypes;
}
