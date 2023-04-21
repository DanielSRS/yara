import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

interface AnimatedViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function AnimatedView(props: AnimatedViewProps) {
  
  return (
    <View {...props} />
  );
}
