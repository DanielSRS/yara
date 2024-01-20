import React from 'react';
import { NumberProp, SvgXml } from 'react-native-svg';
import { FluentIconNames, icons } from './IconstSvg';

interface FluentIconProps {
  color: string | undefined;
  name: FluentIconNames;
  width: NumberProp | undefined;
  height: NumberProp | undefined;
}

export const FluentIcon = (props: FluentIconProps) => {
  const { color = '#FFFFFF', name, height, width } = props;
  const xml = icons[name](color);
  return <SvgXml width={width} height={height} xml={xml} />;
};
