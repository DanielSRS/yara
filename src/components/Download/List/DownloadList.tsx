import React from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import Animated, { SlideInDown, SlideInLeft } from 'react-native-reanimated';
import { TorrentDownload } from "../Torrent/Torrent";


interface DownloadListProps {
  downloads: string[];
}

export function DownloadList(props: DownloadListProps) {
  const { downloads = [] } = props;

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContentContainer}
      style={styles.container}>
      <View style={styles.flex1}>
        {downloads.map((data, index) => {
          return (
            <Animated.View
              entering={SlideInLeft.delay(100 * index <= 5 ? index : 1).springify()}
              key={index.toString()}>
              <TorrentDownload title={data} />
            </Animated.View>
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
  scrollContentContainer: {
    //
  },
  flex1: {
    flex: 1,
    // backgroundColor: 'gray',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});
