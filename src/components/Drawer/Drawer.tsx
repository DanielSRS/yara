import React, { useRef, useState } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SurfaceApp } from "../Atoms";

interface DrawerProps {}

export function Drawer(props: DrawerProps) {

  return (
    <View style={styles.container}>
      {}
      <MenuArea />
      {}
      {/** Area de conteúdo */}
      <SurfaceApp style={styles.content}>
        {}
        <Text>Conteudo</Text>
      </SurfaceApp>
    </View>
  );
}

function MenuArea() {
  const currentWidth = useRef(50);
  const width = useRef(new Animated.Value(50));
  const [toggleHover, setToggleHover] = useState(false);
  const mouseEvents = {
    onMouseEnter: () => setToggleHover(true),
    onMouseLeave: () => setToggleHover(false),
  }

  /**
   * Abre e fecha o drawer de forma animada
   */
  const toggleMenu = () => {
    /** Se o drawer estiver fechado */
    if (currentWidth.current >= 50 && currentWidth.current <= 60) {
      /** Abre o drawer com uma animação */
      Animated.spring(width.current, {
        toValue: 320,
        useNativeDriver: false,
      }).start();
      return;
    }
    /** Do contrario, fecha o drawer com uma animação */
    Animated.spring(width.current, {
      toValue: 50,
      useNativeDriver: false,
    }).start();
  }

  return (
    <Animated.View
      onLayout={e => currentWidth.current = e.nativeEvent.layout.width}
      style={[styles.menuArea, { width: width.current }]}>
      <View
        style={{
          height: 40,
          width: 48,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'red',
        }}>
          <TouchableOpacity
            onPress={toggleMenu}
            {...mouseEvents}
            style={{
              width: 38,
              height: 34,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 3,
              backgroundColor: toggleHover ? 'rgba(255, 255, 255, 0.0605)' : undefined,
            }}
            >
            <Text style={{
              fontSize: 16,
              // marginTop: -15,
              fontFamily: 'Segoe Fluent Icons',
              // backgroundColor: 'rgba(255, 255, 255, 0.6)'
            }}></Text>
          </TouchableOpacity>
      </View>
      {}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'red',
    flexDirection: 'row',
  },
  menuArea: {
    width: 50,
    height: '100%',
    //backgroundColor: 'blue',
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 7,
    paddingHorizontal: 20,
    paddingTop: 20,
    //backgroundColor: 'gray',
  },
});
