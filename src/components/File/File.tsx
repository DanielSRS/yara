import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { DefaultText } from "../Text";

interface FileProps {
  /** Nome do arquivo */
  fileName: string;
  /** Tipo/extensão do arquivo */
  fileType: string;
  /** Status do download */
  status: 'completed' | 'downloading';
  /** Tamanho do arquivo */
  size: number;
  /** Percentual do progresso do download */
  progress: number;
  /** Função de callback ao pressionar o arquivo */
  onPress?: () => void;
}

/**
 * Exibe as informações de um arquivo de um torrent
 */
export function File(props: FileProps) {
  const {
    fileName,
    fileType,
    status,
    progress,
    size,
    onPress,
  } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {/** Left (image/icon) */}
      <View style={styles.fileIconContainer}>

      </View>

      {/** Right (info) */}
      {/** quando largo, exibe com linha, quando pqeueno: coluna */}
      <View style={styles.rightContainer}>
        {/** Top (title) */}
        <View style={styles.topContainer}>
          <DefaultText numberOfLines={1}>{fileName}</DefaultText>
        </View>

        {/** Bottom (statuses) */}
        <View style={styles.bottomContainer}>
          <DefaultText>{status}</DefaultText>
          <DefaultText>{fileType}</DefaultText>
          <DefaultText>{size}</DefaultText>
          <DefaultText>{progress}</DefaultText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  fileIconContainer: {
    height: 50,
    width: 50,
    backgroundColor: 'gray',
  },
  bottomContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    /* backgroundColor: 'gray', */
    flex: 1,
  },
  topContainer: {
    flex: 1,
  },
  rightContainer: {
    /* backgroundColor: 'purple', */
    flex: 1,
    paddingHorizontal: 8,
  },
});
