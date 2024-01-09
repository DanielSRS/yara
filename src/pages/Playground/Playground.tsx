import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Container para renderizar o componente que
 * se deseja testar.
 *
 * Esse container serve para que um unico componente seja
 * exibido simultaneamente em ambas as partes de cima e baixo
 * da pagina, sem que seja preciso duplicar codigo do componente
 * ou sincronizar as alterações nas props feitas durante o teste.
 */
const Content = () => {
  return (
    <>
      {/** Coloque seu componente aqui: */}
      <Text>Me substitua por um componente</Text>
      {}
    </>
  );
};

/**
 * Como o nome indica, é uma pagina com o intuito de
 * brincar/testar componentes e ver seu comportamento
 * em uma tela exclusivamente para isso, desacoplando
 * o componente de qualquer outro tipo de contexto.
 */
export function Playground() {
  return (
    <View style={styles.container}>
      {/**
       * A parte de cima da pagina.
       *
       * Renderiza o componente centarlizado na tela.
       * O intuito é analizar se o componete se comporta
       * de maneira inesperada se o parent tiver outras
       * formas de layout, como o conteudo centralizaodo.
       */}
      <View style={styles.top}>
        <Content />
      </View>

      {/**
       * A parte de baixo da pagina
       *
       * Rendezira o componente em um container que não
       * tem nenhuma alteração no layout, usando os valores
       * padrões.
       */}
      <View style={styles.bottom}>
        <Content />
      </View>
      {}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    // backgroundColor: '#D5CFE1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    borderTopWidth: 2,
    // backgroundColor: '#EDDFEF',
  },
});
