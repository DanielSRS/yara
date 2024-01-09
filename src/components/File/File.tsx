import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { DefaultText } from "../Text";
import { SurfaceCard } from "..";

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
      <SurfaceCard style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          {/** Left (image/icon) */}
          <View style={styles.fileIconContainer}>
            {/* Icon */}
            <DefaultText
              style={{
                fontSize: 16,
                fontFamily: 'Segoe Fluent Icons',
                minHeight: 16,
                minWidth: 16,
              }}>
                {''}
            </DefaultText>
          </View>

          {/** Center */}
          <View style={{
            // backgroundColor: 'red',
            // flex: 1
          }}>
            {/* Top */}
            <View style={{
              // backgroundColor: 'green',
              flex: 1,
              justifyContent: 'center',
            }}>
              <DefaultText numberOfLines={1} style={{ fontSize: 12 }}>{fileName}</DefaultText>
            </View>

            {/* Bottom */}
            <View style={{ paddingBottom: 4, justifyContent: 'center', flex: 1 }}>
              {/* Status */}
              <View style={{
                paddingHorizontal: 3,
                paddingBottom: 1,
                borderRadius: 2,
                backgroundColor: '#A8DFE2',
                alignSelf: 'flex-start',
              }}>
                <DefaultText style={{ fontSize: 10 }}>{status}</DefaultText>
              </View>
            </View>
          </View>
        </View>

        {/* Right */}
        <View style={{
          padding: 6,
          gap: 4,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
          {/* IconContainer extension */}
          <View style={{
            paddingHorizontal: 3,
            paddingVertical: 1,
            borderRadius: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.7)'
          }}>
            <DefaultText style={{ fontSize: 10 }}>{fileType}</DefaultText>
          </View>

          {/* IconContainer file size */}
          <View style={{
            paddingHorizontal: 3,
            paddingTop: 2,
            borderRadius: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.7)'
          }}>
            <DefaultText style={{ fontSize: 10 }}>{size}</DefaultText>
          </View>
        </View>
      </SurfaceCard>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // minWidth: 100,
    // flexDirection: 'row',
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  fileIconContainer: {
    padding: 10,
    // height: 50,
    // width: 50,
    // backgroundColor: 'gray',
    justifyContent: 'center',
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
