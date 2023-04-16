import React from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';

interface DefaultText {
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

export const DefaultText = (props: DefaultText) => {
  const { style } = props;
  return <Text {...props} style={[defaultStyles, style]} />;
};

const defaultStyles: StyleProp<TextStyle> = {
    //
};
