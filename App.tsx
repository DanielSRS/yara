/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Drawer, Titlebar } from './src/components';
import { DownloadList } from './src/components/Download/List/DownloadList';
import { Statusbar } from './src/components/Statusbar';
import { StorybookUIRoot } from './.ondevice/Storybook';
import { Playground } from './src/pages/Playground';
import { AppRootBackground } from './src/components/AppRootBackground/AppRootBackground';

function App(): React.JSX.Element {
  const [showPlayground, setShowPlayground] = useState(false);
  const togglePlayground = () => setShowPlayground(p => !p);

  return (
    <AppRootBackground>
      {Platform.OS !== 'windows' ? null : <Titlebar />}
      {showPlayground ? null : (
        <Drawer toggle={togglePlayground}>
          <DownloadList downloads={['t1', 't2', 't3', 't4', 't5']} />
          <Statusbar />
        </Drawer>
      )}
      {!showPlayground ? null : (
        <>
          <TouchableOpacity
            onPress={togglePlayground}
            style={styles.exitPlaygroundButton}>
            <Text style={styles.exitPlaygroundText}></Text>
            <Text> Exit playground</Text>
          </TouchableOpacity>
          <Playground />
        </>
      )}
    </AppRootBackground>
  );
}

const showStorybook = () => {
  return false;
  // return Platform.OS === 'android' || Platform.OS === 'ios';
};

const styles = StyleSheet.create({
  exitPlaygroundButton: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
  exitPlaygroundText: {
    fontFamily: 'Segoe Fluent Icons',
  },
});

export default showStorybook() ? StorybookUIRoot : App;
