import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

interface CaptionProps {
    /** Estilos do texto */
    style?: StyleProp<TextStyle>;
    /** Texto */
    children: string | React.ReactNode;
    /**
     * Used to truncate the text with an ellipsis after computing the text
     * layout, including line wrapping, such that the total number of lines
     * does not exceed this number.
     */
    numberOfLines?: number;
}

export const Caption = (props: CaptionProps) => {
  const { style } = props;
  return <Text {...props} style={[defaultStyles, style]} />;
};

const defaultStyles: StyleProp<TextStyle> = {
  fontSize: 12,
};
