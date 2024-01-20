import React from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  useColorScheme,
} from 'react-native';

type SurfaceAppProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function SurfaceApp(props: SurfaceAppProps) {
  const { style } = props;

  const isDarkMode = useColorScheme() === 'dark';
  const defaultStyles = isDarkMode ? styles.darkStyles : styles.lightStyles;

  return <View {...props} style={[defaultStyles, style]} />;
}

const styles = StyleSheet.create({
  darkStyles: {
    // /** Strock */
    // borderWidth: 1,
    // borderColor: 'rgba(0, 0, 0, 0.1)', // dark
    // /** Fill */
    // backgroundColor:  'rgba(58, 58, 58, 0.3)', // dark
  },
  lightStyles: {
    // /** Strock */
    // borderWidth: 1,
    // borderColor: 'rgba(0, 0, 0, 0.0578)', // light
    // /** Fill */
    // backgroundColor:  'rgba(255, 255, 255, 0.5)', // light
  },
});
