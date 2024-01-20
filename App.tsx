/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { ComponentProps, useState } from 'react';
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
          <DownloadList downloads={downloads} />
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

const downloads: ComponentProps<typeof DownloadList>['downloads'] = [
  {
    name: 'download.one',
    numberOfFiles: 1,
    size: 8916414648,
    elapsedTime: 48248942984,
    remainingTime: 642289498,
    downloadSpeed: 49884894,
    totalDownloaded: 96312,
    uploadSpeed: 98522,
    totalUploaded: 48888487,
  },
  {
    name: 'download.two',
    numberOfFiles: 2,
    size: 48596295,
    elapsedTime: 798456132,
    remainingTime: 8789749864,
    downloadSpeed: 687458,
    totalDownloaded: 587412,
    uploadSpeed: 25785,
    totalUploaded: 4852159,
  },
  {
    name: 'download.three',
    numberOfFiles: 3,
    size: 51585226,
    elapsedTime: 841225,
    remainingTime: 484121,
    downloadSpeed: 698782,
    totalDownloaded: 231816,
    uploadSpeed: 564984,
    totalUploaded: 24588848,
  },
  {
    name: 'download.four',
    numberOfFiles: 4,
    size: 458145624,
    elapsedTime: 541255,
    remainingTime: 151516,
    downloadSpeed: 242452,
    totalDownloaded: 89465,
    uploadSpeed: 245,
    totalUploaded: 7841,
  },
  {
    name: 'download.five',
    numberOfFiles: 5,
    size: 97461531,
    elapsedTime: 584258,
    remainingTime: 5459,
    downloadSpeed: 2454,
    totalDownloaded: 8558,
    uploadSpeed: 6416,
    totalUploaded: 324785,
  },
  {
    name: 'download.six',
    numberOfFiles: 6,
    size: 75424,
    elapsedTime: 1564,
    remainingTime: 9784651364,
    downloadSpeed: 96374,
    totalDownloaded: 4215648,
    uploadSpeed: 12457,
    totalUploaded: 16589,
  },
];

export default showStorybook() ? StorybookUIRoot : App;
