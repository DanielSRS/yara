import React from "react";
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import { DefaultText } from "../Text";
import { SurfaceCard } from "../Atoms";
import { FluentIcon } from "../../Libs/Icons/Fluent/FluentIcons";

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
function _File(props: FileProps & { cardStyle?: StyleProp<ViewStyle>; showStatus?: boolean }) {
  const {
    fileName,
    fileType,
    status,
    progress,
    size,
    onPress,
    cardStyle,
    showStatus = false,
  } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <SurfaceCard style={[{ flexDirection: 'row', justifyContent: 'space-between' }, cardStyle]}>
        <View style={{ flexDirection: 'row' }}>
          {/** Left (image/icon) */}
          <View style={styles.fileIconContainer}>
            {/* Icon */}
            <FluentIcon
              color={'#FFFFFF'}
              name={"ic_fluent_document_20_regular"}
              width={20}
              height={20}
            />
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
              paddingRight: 10,
            }}>
              <DefaultText numberOfLines={1} style={{ fontSize: 12 }}>{fileName}</DefaultText>
            </View>

            {/* Bottom */}
            <View style={{ paddingBottom: 4, justifyContent: 'center', flex: 1, display: !showStatus ? 'none' : undefined }}>
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

export const File = (props: FileProps) => {
  return (
    <_File {...props} />
  );
}

export const FileInFolder = (props: FileProps) => {
  return (
    <_File {...props} cardStyle={{ backgroundColor: 'transparent', borderWidth: 0 }} />
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
