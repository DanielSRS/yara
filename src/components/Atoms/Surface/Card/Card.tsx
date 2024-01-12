import React from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  useColorScheme,
} from 'react-native';

type SurfaceCardProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function SurfaceCard(props: SurfaceCardProps) {
  const { style } = props;
  const isDarkTheme = useColorScheme() === 'dark';
  const defaultStyles = isDarkTheme ? styles.dark : styles.light;
  return (
    <View {...props} style={[defaultStyles, style]}>
      {}
      {}
    </View>
  );
}

const styles = StyleSheet.create({
  light: {
    /** Strock */
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.0578)', // light
    borderRadius: 7,

    /** Fill */
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // light
  },
  dark: {
    /** Strock */
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)', // dark
    borderRadius: 7,

    /** Fill */
    backgroundColor: 'rgba(255, 255, 255, 0.0512)', // dark
  },
});
