import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type SurfaceAppProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function SurfaceApp(props: SurfaceAppProps) {
  const { style } = props;
  return <View {...props} style={[styles.defaultStyles, style]} />;
}

const styles = StyleSheet.create({
  defaultStyles: {
    /** Strock */
    borderWidth: 1,
    // borderColor: 'rgba(0, 0, 0, 0.0578)', // light
    borderColor: 'rgba(0, 0, 0, 0.1)', // dark
    // borderRadius: 7,

    /** Fill */
    // backgroundColor:  'rgba(255, 255, 255, 0.7)', // light
    backgroundColor:  'rgba(58, 58, 58, 0.3)', // dark
  },
});
