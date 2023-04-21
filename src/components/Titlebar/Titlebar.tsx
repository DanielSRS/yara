import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface TitlebarProps {}

export function Titlebar(props: TitlebarProps) {
  return (
    <View style={ styles.container }>
      <Text>App name</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // backgroundColor: 'red',
    height: 32,
    justifyContent: 'center',
    paddingLeft: 15,
  },
});
