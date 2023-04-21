import React from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
// import Animated, { SlideInDown, SlideInLeft } from 'react-native-reanimated';
import { AnimatedView } from "../../Libs";
import { File } from "../../components";


interface FileListProps {
  files: {
    fileName: string;
    fileType: string;
    status: 'completed' | 'downloading';
    size: number;
    progress: number;
    onPress?: () => void;
  }[];
}

export function FileList(props: FileListProps) {
  const { files = [] } = props;

  return (
    <ScrollView
      style={styles.container}>
      <View style={styles.contentContainer}>
        {files.map((data, index) => {
          return (
            <AnimatedView
              // entering={SlideInLeft.delay(100 * index <= 5 ? index : 1).springify()}
              style={{ width: '100%' }}
              key={index.toString()}>
              <File {...data} />
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
    // flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    padding: 10,
  },
});
