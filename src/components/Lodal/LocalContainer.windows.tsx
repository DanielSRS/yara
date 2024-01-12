import React from 'react';
import { Popup } from 'react-native-windows';

export const LocalContainer = ({ children }: { children: React.ReactNode }) => {
  return <Popup isOpen={true}>{children}</Popup>;
};
