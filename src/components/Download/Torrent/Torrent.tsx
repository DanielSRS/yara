import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { DefaultText } from "../../Text";

interface Theme {
  colors: {
    background: string;
  };
};

interface TorrentDownloadProps {
  /** Titulo do torrent */
  title: string;
  /** Tema do componete */
  theme?: Theme;
  /** Função de callback ao clicar no card do torrent */
  onPress?: () => void,
}

const defaultTheme: Theme = {
  colors: {
    background: 'rgba(0, 0, 0, 0.05)',
  },
};

export const TorrentDownload = (props: TorrentDownloadProps) => {
  const { title, theme: { colors: { background } } = defaultTheme, onPress } = props;
  const numberOfFiles = 0;
  const size = 0;
  const elapsedTime = 0;
  const remainingTime = 0;
  const downloadSpeed = 0;
  const totalDownloaded = 0;
  const uploadSpeed = 0;
  const totalUploaded = 0;

  const label_NumberOfFiles = 'Number of files'
  const label_Size = 'Size'
  const label_ElapsedTime = 'Elapsed time'
  const label_Remaining = 'Remaining time'
  const label_Ratio = 'Ratio'
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, { backgroundColor: background }]}>
      {}
      <DefaultText numberOfLines={2} style={styles.title}>{title}</DefaultText>
      <Separator />

      {/** Numero de arquivos sendo baixados */}
      <TwoColumnText>
        {label_NumberOfFiles}
        {numberOfFiles}
      </TwoColumnText>

      {/** Tamanho do download */}
      <TwoColumnText>
        {label_Size}
        {size}
      </TwoColumnText>

      {/** Tempo decorrido */}
      <TwoColumnText>
        {label_ElapsedTime}
        {elapsedTime}
      </TwoColumnText>

      {/** Tempo restante */}
      <TwoColumnText>
        {label_Remaining}
        {remainingTime}
      </TwoColumnText>

      {/** Espaço em branco */}
      <TwoColumnText>
        {' '}
        {' '}
      </TwoColumnText>

      {/** Velocidade de download */}
      <TwoColumnText>
        {`   ${downloadSpeed} KB/s`}
        {totalDownloaded}
      </TwoColumnText>

      {/** Velocidade de upload */}
      <TwoColumnText>
        {`   ${uploadSpeed} KB/s`}
        {totalUploaded}
      </TwoColumnText>

      {/** Espaço em branco */}
      <TwoColumnText>
        {' '}
        {' '}
      </TwoColumnText>

      {/** Ratio */}
      <TwoColumnText>
        {label_Ratio}
        {'-'}
      </TwoColumnText>

      {/** Espaço em branco */}
      <TwoColumnText>
        {' '}
        {' '}
      </TwoColumnText>

      {/** Status */}
      <TwoColumnText>
        <DefaultText style={styles.status}>{'downloading'}</DefaultText>
        {''}
      </TwoColumnText>

      {/** Espaço em branco */}
      <TwoColumnText>
        {' '}
        {' '}
      </TwoColumnText>
      {}
    </TouchableOpacity>
  );
}

const Separator = () => {
  return (
    <View style={{ paddingVertical: 10, alignItems: 'center' }}>
      {}
      <View style={{ height: 2, borderRadius: 2, width: 20, backgroundColor: 'white' }} />
      {}
    </View>
  );
}

interface TwoColumnTextProps {
  children: [string | React.ReactNode, string | React.ReactNode];
}

const TwoColumnText = (props: TwoColumnTextProps) => {
  const { children } = props;
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      {}
      <DefaultText>{children[0]}</DefaultText>
      <DefaultText>{children[1]}</DefaultText>
      {}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 230,
    minWidth: 180,
    paddingHorizontal: 10,
    paddingTop: 10,
    borderRadius: 8,
  },
  title: {
    textAlign: 'center',
  },
  status: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: 'pink',
    borderRadius: 4,
    textTransform: 'uppercase',
    fontSize: 12,
  },
});
