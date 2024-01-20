import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Animated, { SlideInLeft } from 'react-native-reanimated';

interface AnimatedViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function AnimatedView(props: AnimatedViewProps) {
  return <Animated.View {...props} entering={SlideInLeft.springify()} />;
}
