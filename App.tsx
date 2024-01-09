/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleProp,
  ViewStyle,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Drawer, Titlebar } from './src/components';
import { DownloadList } from './src/components/Download/List/DownloadList';
import { Statusbar } from './src/components/Statusbar';
import { StorybookUIRoot } from './.ondevice/Storybook';
import { Playground } from './src/pages/Playground';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const isWindows = Platform.OS === 'windows';
  const darkBgColor = isDarkMode ? '#202020' : '#F3F3F3';
  const [showPlayground, setShowPlayground] = useState(false);

  const backgroundStyle: StyleProp<ViewStyle> = {
    backgroundColor: isWindows ? 'transparent' : darkBgColor,
    flex: 1,
  };

  const togglePlayground = () => setShowPlayground(p => !p);

  if (showPlayground) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {Platform.OS !== 'windows' ? null : <Titlebar />}
        <TouchableOpacity
          onPress={togglePlayground}
          style={{
            backgroundColor: 'red',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{ fontFamily: 'Segoe Fluent Icons', }}></Text>
          <Text> Exit playground</Text>
        </TouchableOpacity>
        <Playground />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {Platform.OS !== 'windows' ? null : <Titlebar />}
      <Drawer toggle={togglePlayground}>
        <DownloadList downloads={['t1', 't2', 't3', 't4', 't5']} />
        <Statusbar />
      </Drawer>
    </SafeAreaView>
  );
}

const showStorybook = () => {
  return false;
  // return Platform.OS === 'android' || Platform.OS === 'ios';
}

export default showStorybook() ? StorybookUIRoot : App;
