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
import { Drawer, Titlebar } from './src/components';
import { DownloadList } from './src/components/Download/List/DownloadList';
import { Statusbar } from './src/components/Statusbar';
import { StorybookUIRoot } from './.ondevice/Storybook';

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
      <Drawer>
        <DownloadList downloads={['t1', 't2', 't3', 't4', 't5']} />
        <Statusbar />
      </Drawer>
    </SafeAreaView>
  );
}

const showStorybook = () => {
  return Platform.OS === 'android' || Platform.OS === 'ios';
}

export default showStorybook() ? StorybookUIRoot : App;
