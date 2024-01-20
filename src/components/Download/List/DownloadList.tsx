import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
// import Animated, { SlideInDown, SlideInLeft } from 'react-native-reanimated';
import { TorrentDownload } from '../Torrent/Torrent';
import { AnimatedView } from '../../../Libs/Animated/View';

interface DownloadInfo {
  name: string;
  numberOfFiles: number;
  size: number;
  elapsedTime: number;
  remainingTime: number;
  downloadSpeed: number;
  totalDownloaded: number;
  uploadSpeed: number;
  totalUploaded: number;
}

interface DownloadListProps {
  downloads: DownloadInfo[];
}

export function DownloadList(props: DownloadListProps) {
  const { downloads = [] } = props;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        {downloads.map((data, index) => {
          return (
            <AnimatedView
              // entering={SlideInLeft.delay(100 * index <= 5 ? index : 1).springify()}
              key={index.toString()}>
              <TorrentDownload
                name={data.name}
                numberOfFiles={data.numberOfFiles}
                size={data.size}
                elapsedTime={data.elapsedTime}
                remainingTime={data.remainingTime}
                downloadSpeed={data.downloadSpeed}
                totalDownloaded={data.totalDownloaded}
                uploadSpeed={data.uploadSpeed}
                totalUploaded={data.totalUploaded}
              />
            </AnimatedView>
          );
        })}
      </View>
      {}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink'
  },
  contentContainer: {
    flex: 1,
    // backgroundColor: 'gray',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    padding: 10,
  },
});
