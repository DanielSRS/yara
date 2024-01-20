import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleProp, ViewStyle } from 'react-native';

interface AnimatedViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function AnimatedView(props: AnimatedViewProps) {
  const bottom = useRef(new Animated.Value(180));
  const { style } = props;

  useEffect(() => {
    Animated.timing(bottom.current, {
      toValue: 0,
      useNativeDriver: false,
      duration: 1400,
      easing: Easing.in(Easing.elastic(3)),
    }).start();
  }, []);

  return <Animated.View {...props} style={[style, { left: bottom.current }]} />;
}
