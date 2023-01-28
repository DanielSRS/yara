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
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle: StyleProp<ViewStyle> = {
    backgroundColor: isDarkMode ? '#000' : '#FFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textColor = { color: 'green' };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {}
      <Text style={textColor}>Android, Ios, Windows and web</Text>
      {}
    </SafeAreaView>
  );
}

export default App;
