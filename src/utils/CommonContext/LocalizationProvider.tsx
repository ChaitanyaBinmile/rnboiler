import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import english from '../../assets/lang/English/LangEnglish';
import tamil from '../../assets/lang/Tamil/LangTamil';
import { LangTypes } from '../../assets/lang/types/LangTypes';
import { debugLog } from '../Logger';
import { ChildrenType, ProviderType, TranslationsTypes } from './Types';
import { LanguageSupport } from './LanguageSupport';
import { AppInstance } from '../../common/AppInstance';

const TAG = 'LocalizationProvider: ';

interface IContextProps {
  appLanguage: LanguageSupport;
  setAppLanguage: (appLanguage: LanguageSupport) => void;
  translations: LangTypes
}
export const LocalizationContext = createContext({} as IContextProps);

export function LocalizationConsumer({ children }: ChildrenType) {

  return (
      <LocalizationContext.Consumer>
          {(context) => {
            if (context === undefined) {
              throw new Error('LocalizationConsumer must be used within a LocalizationProvider');
            }
            return children(context);
          }}
      </LocalizationContext.Consumer>
  );
}


export function LocalizationProvider({ children }: ProviderType ) {
  const [appLanguage, setAppLanguage] = useState<LanguageSupport>(LanguageSupport.English);
  const translations : TranslationsTypes = useMemo(()=>({
    [LanguageSupport.English]: english,
    [LanguageSupport.Tamil]: tamil,
  }), []);

  useEffect(() => {
    debugLog(TAG, `init language : ${appLanguage}`);
    AppInstance.getInstance().setLang(appLanguage);
  }, [appLanguage]);

  const mProps = useMemo(
    () => ({
      appLanguage,
      setAppLanguage,
      translations: translations[appLanguage as keyof TranslationsTypes],
    }),
    [appLanguage, translations],
  );

  return <LocalizationContext.Provider value={mProps}>{children}</LocalizationContext.Provider>;
}

