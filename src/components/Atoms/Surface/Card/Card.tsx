import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type SurfaceCardProps = {
  children?: React.ReactNode;
  styles?: StyleProp<ViewStyle>;
};

export function SurfaceCard(props: SurfaceCardProps) {
  const { styles } = props;
  return (
    <View {...props} style={[style.defaultStyles, styles]}>
      {}
      {}
    </View>
  );
}

const style = StyleSheet.create({
  defaultStyles: {
    /** Strock */
    borderWidth: 1,
    // borderColor: 'rgba(0, 0, 0, 0.0578)', // light
    borderColor: 'rgba(0, 0, 0, 0.1)', // dark
    borderRadius: 7,

    /** Fill */
    // backgroundColor:  'rgba(255, 255, 255, 0.7)', // light
    backgroundColor:  'rgba(255, 255, 255, 0.0512)', // dark
  },
});
