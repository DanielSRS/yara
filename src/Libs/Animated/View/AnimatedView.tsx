import React from "react";
import Animated, { SlideInLeft } from "react-native-reanimated";

interface AnimatedViewProps {
  children: React.ReactNode;
}

export function AnimatedView(props: AnimatedViewProps) {
  const { children } = props;
  return (
    <Animated.View entering={SlideInLeft.springify()}>
      {children}
    </Animated.View>
  );
}
