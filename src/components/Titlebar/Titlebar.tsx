import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { name } from '../../../package.json';

interface TitlebarProps {}

export function Titlebar(props: TitlebarProps) {
  return (
    <View style={ styles.container }>
      <Text style={styles.appName}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // backgroundColor: 'red',
    height: 32,
    justifyContent: 'center',
    paddingLeft: 12,
  },
  appName: {
    fontSize: 12,
  },
});
