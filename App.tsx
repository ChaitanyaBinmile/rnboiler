/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { LocalizationProvider } from './src/utils/CommonContext/LocalizationProvider';

function App(): React.JSX.Element {

  return (
    <LocalizationProvider>
      </LocalizationProvider>
  );
}

export default App;
