import React from 'react';
import {
  Platform,
  PlatformColor,
  SafeAreaView,
  StatusBar,
  StyleProp,
  ViewStyle,
  useColorScheme,
} from 'react-native';

const isWindows = Platform.OS === 'windows';

interface AppRootBackgroundProps {
  children: React.ReactNode;
}

/**
 * Define a cor de fundo de todo o app de acordo com o sistema opraciona
 * e de acordo com o tema do sistema (claro ou escuro)
 *
 * A cor de fundo pode ser clara, escura ou transparente com blur
 */
export const AppRootBackground = (props: AppRootBackgroundProps) => {
  const { children } = props;
  const colorScheme = useColorScheme();
  const colorBrush = PlatformColor('AcrylicBackgroundFillColorDefaultBrush');
  const isDarkMode = colorScheme === 'dark';
  const bgColor = isDarkMode ? '#202020' : '#F3F3F3';

  const backgroundStyle: StyleProp<ViewStyle> = {
    backgroundColor: isWindows ? colorBrush : bgColor,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {children}
    </SafeAreaView>
  );
};
