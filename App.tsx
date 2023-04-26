/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleProp,
  ViewStyle,
  Platform,
} from 'react-native';
import { Titlebar } from './src/components';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const isWindows = Platform.OS === 'windows';
  const darkBgColor = isDarkMode ? '#202020' : '#F3F3F3';

  const backgroundStyle: StyleProp<ViewStyle> = {
    backgroundColor: isWindows ? 'transparent' : darkBgColor,
    flex: 1,
  };

  const textColor = { color: 'green' };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {Platform.OS !== 'windows' ? null : <Titlebar />}
    </SafeAreaView>
  );
}

export default App;
