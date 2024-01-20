import React from 'react';
import { NumberProp, SvgXml } from 'react-native-svg';
import { FluentIconNames, icons } from './IconstSvg';
import { useColorScheme } from 'react-native';

interface FluentIconProps {
  color?: string | undefined;
  name: FluentIconNames;
  width: NumberProp | undefined;
  height: NumberProp | undefined;
}

export const FluentIcon = (props: FluentIconProps) => {
  const isDarkTheme = useColorScheme() === 'dark';
  const iconColor = isDarkTheme ? '#FFFFFF' : '#000000';
  const { color = iconColor, name, height, width } = props;
  const xml = icons[name](color);
  return <SvgXml width={width} height={height} xml={xml} />;
};
