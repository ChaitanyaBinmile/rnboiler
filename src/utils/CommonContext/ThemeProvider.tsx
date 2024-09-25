import React, { createContext, useEffect, useMemo } from 'react';

const TAG = 'ThemeProvider: ';

interface IContextProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;

}
export const ThemeContext = createContext({} as IContextProps);

interface ThemeConsumerProps {
  children: React.FunctionComponent,
}

interface ThemeProviderProps {
  children: JSX.Element,
}


export const ThemeConsumer:React.FC<ThemeConsumerProps> = ({ children })=> {
  return (
      <ThemeContext.Consumer>
          {(context) => {
            if (context === undefined) {
              throw new Error(
                'ThemeConsumer must be used within a ThemeProvider',
              );
            }
            return children(context);
          }}
      </ThemeContext.Consumer>
  );
};

type ThemeContextType = boolean;

export const ThemeProvider:React.FC<ThemeProviderProps> = ({ children })=> {
  const [darkMode, setDarkMode] = React.useState<ThemeContextType>(false);

  useEffect(() => {
    console.log(TAG, 'darkMode -', darkMode);
  }, [darkMode]);

  const mProps = useMemo(() => ({
    darkMode,
    setDarkMode,
  }), [darkMode]);

  return (
      <ThemeContext.Provider value={mProps}>
          {children}
      </ThemeContext.Provider>
  );
};

