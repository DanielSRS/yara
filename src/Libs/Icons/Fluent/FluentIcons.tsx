import React from "react";
import { SvgXml } from "react-native-svg";
import { FluentIconNames, icons } from "./IconstSvg";

interface FluentIconProps {
  color: string | undefined;
  name: FluentIconNames;
  width: number | string | undefined;
  height: number | string | undefined;
}

export const FluentIcon = (props: FluentIconProps) => {
  const { color = '#FFFFFF', name, height = '100%', width = '100%' } = props;
  const xml = icons[name](color);
  return (
    <SvgXml
      width={width}
      height={height}
      xml={xml}
    />
  );
};
