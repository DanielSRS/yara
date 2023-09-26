import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
// import Animated, { SlideInDown, SlideInLeft } from 'react-native-reanimated';
import { TorrentDownload } from "../Torrent/Torrent";
import { AnimatedView } from "../../../Libs/Animated/View";


interface DownloadListProps {
  downloads: string[];
}

export function DownloadList(props: DownloadListProps) {
  const { downloads = [] } = props;

  return (
    <ScrollView
      style={styles.container}>
      <View style={styles.contentContainer}>
        {downloads.map((data, index) => {
          return (
            <AnimatedView
              // entering={SlideInLeft.delay(100 * index <= 5 ? index : 1).springify()}
              key={index.toString()}>
              <TorrentDownload title={data} />
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
