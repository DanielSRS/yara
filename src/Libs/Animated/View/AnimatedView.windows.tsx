import React from "react";
import { View } from "react-native";

interface AnimatedViewProps {
  children: React.ReactNode;
}

export function AnimatedView(props: AnimatedViewProps) {
  const { children } = props;
  
  return (
    <View>
      {children}
    </View>
  );
}
