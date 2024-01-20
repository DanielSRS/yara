import React, { useRef, useState } from 'react';
import {
  Animated,
  LayoutChangeEvent,
  Platform,
  RegisteredStyle,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { SurfaceApp } from '../Atoms';

interface DrawerProps {
  children?: React.ReactNode;
  toggle: () => void;
}

export function Drawer(props: DrawerProps) {
  const { children, toggle } = props;

  return (
    <View style={styles.container}>
      {}
      <MenuArea toggle={toggle} />
      {}
      {/** Area de conteúdo */}
      <SurfaceApp style={styles.content}>{children}</SurfaceApp>
    </View>
  );
}

function MenuArea({ toggle }: { toggle: () => void }) {
  const currentWidth = useRef(50);
  const width = useRef(new Animated.Value(50));
  const textOpacity = useRef(new Animated.Value(0));
  const [widthWeb, setWidhtWeb] = useState(50);
  const [textOpacityWeb, setTextOpacityWeb] = useState(0);
  const isWeb = Platform.OS === 'web';

  const isMenuOpen = () => {
    return currentWidth.current >= 48 && currentWidth.current <= 60;
  };

  /**
   * Abre e fecha o drawer de forma animada
   */
  const toggleMenu = () => {
    /** Se o drawer estiver fechado */
    if (isMenuOpen()) {
      if (isWeb) {
        setWidhtWeb(320);
        setTextOpacityWeb(1);
        return;
      }
      /** Abre o drawer com uma animação */
      Animated.spring(width.current, {
        toValue: 320,
        useNativeDriver: false,
      }).start();
      Animated.timing(textOpacity.current, {
        toValue: 1,
        useNativeDriver: false,
        // duration: 300,
      }).start();
      return;
    }
    if (isWeb) {
      setWidhtWeb(50);
      setTextOpacityWeb(0);
      return;
    }
    /** Do contrario, fecha o drawer com uma animação */
    Animated.spring(width.current, {
      toValue: 50,
      useNativeDriver: false,
    }).start();
    Animated.timing(textOpacity.current, {
      toValue: 0,
      useNativeDriver: false,
      // duration: 300,
    }).start();
  };

  const AnimatedView = (props: {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    onLayout?: (event: LayoutChangeEvent) => void;
    animatedStyle?:
      | false
      | Animated.Value
      | RegisteredStyle<ViewStyle>
      | Animated.AnimatedInterpolation<string | number>
      | Animated.WithAnimatedObject<ViewStyle>
      | Animated.WithAnimatedArray<ViewStyle>
      | null
      | undefined;
  }) => {
    if (isWeb) {
      return <View {...props} />;
    }
    return (
      <Animated.View {...props} style={[props.style, props.animatedStyle]} />
    );
  };

  const AnimatedText = (props: {
    children?: React.ReactNode;
    style?: StyleProp<TextStyle>;
    onLayout?: (event: LayoutChangeEvent) => void;
    animatedStyle?:
      | false
      | Animated.Value
      | RegisteredStyle<ViewStyle>
      | Animated.AnimatedInterpolation<string | number>
      | Animated.WithAnimatedObject<ViewStyle>
      | Animated.WithAnimatedArray<ViewStyle>
      | null
      | undefined;
  }) => {
    if (isWeb) {
      return <Text {...props} />;
    }
    return (
      <Animated.Text {...props} style={[props.style, props.animatedStyle]} />
    );
  };

  const EntryText = ({ children }: { children: React.ReactNode }) => {
    return (
      <AnimatedText
        style={{ opacity: textOpacityWeb, width: 320 }}
        animatedStyle={{ opacity: textOpacity.current }}>
        {children}
      </AnimatedText>
    );
  };

  return (
    <AnimatedView
      onLayout={e => (currentWidth.current = e.nativeEvent.layout.width)}
      animatedStyle={{ width: width.current }}
      style={[styles.menuArea, { width: widthWeb }]}>
      {/* Parte de cima */}
      <ScrollView>
        {/* Botão de toggle do menu */}
        <DrawerEntry onPress={toggleMenu} icon={''} />
      </ScrollView>

      {/* Parte de baixo */}
      <View style={{ paddingBottom: 2 }}>
        <DrawerEntry icon={''}>
          <EntryText>Configurações</EntryText>
        </DrawerEntry>
        <DrawerEntry icon={''}>
          <EntryText>Sobre</EntryText>
        </DrawerEntry>
        <DrawerEntry icon={''} onPress={toggle}>
          <EntryText>Test</EntryText>
        </DrawerEntry>
      </View>
      {}
    </AnimatedView>
  );
}

interface DrawerEntryProps {
  onPress?: () => void;
  icon: string;
  children?: React.ReactNode;
}

const DrawerEntry = (props: DrawerEntryProps) => {
  const { onPress, icon, children = null } = props;
  const [toggleHover, setToggleHover] = useState(false);
  const mouseEvents = {
    onMouseEnter: () => setToggleHover(true),
    onMouseLeave: () => setToggleHover(false),
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: 40,
          width: 48,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'red',
        }}>
        <TouchableOpacity
          onPress={onPress}
          {...mouseEvents}
          style={{
            width: 38,
            height: 34,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 3,
            backgroundColor: toggleHover
              ? 'rgba(255, 255, 255, 0.0605)'
              : undefined,
          }}>
          <Text
            style={{
              fontSize: 16,
              // marginTop: -15,
              fontFamily: 'Segoe Fluent Icons',
              // backgroundColor: 'rgba(255, 255, 255, 0.6)'
            }}>
            {icon}
          </Text>
        </TouchableOpacity>
      </View>
      {/* Nome */}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'red',
    flexDirection: 'row',
  },
  menuArea: {
    width: 50,
    height: '100%',
    overflow: 'hidden',
    //backgroundColor: 'blue',
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 7,
    //backgroundColor: 'gray',
  },
});
