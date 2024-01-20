import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Caption, DefaultText } from '../../Text';
import { SurfaceCard } from '../../Atoms';

interface Theme {
  colors: {
    background: string;
  };
}

interface TorrentDownloadProps {
  /** Nome do torrent */
  name: string;
  /** Tema do componete */
  theme?: Theme;
  /** Função de callback ao clicar no card do torrent */
  onPress?: () => void;

  numberOfFiles: number;
  size: number;
  elapsedTime: number;
  remainingTime: number;
  downloadSpeed: number;
  totalDownloaded: number;
  uploadSpeed: number;
  totalUploaded: number;
}

const defaultTheme: Theme = {
  colors: {
    background: 'rgba(0, 0, 0, 0.05)',
  },
};

export const TorrentDownload = (props: TorrentDownloadProps) => {
  const {
    name,
    theme: { colors: { background } } = defaultTheme,
    onPress,
    numberOfFiles,
    size,
    elapsedTime,
    remainingTime,
    downloadSpeed,
    totalDownloaded,
    uploadSpeed,
    totalUploaded,
  } = props;
  background;

  const label_NumberOfFiles = 'Number of files';
  const label_Size = 'Size';
  const label_ElapsedTime = 'Elapsed time';
  const label_Remaining = 'Remaining time';
  const label_Ratio = 'Ratio';
  const ratio = (totalUploaded / totalDownloaded).toFixed(2);
  return (
    <TouchableOpacity onPress={onPress}>
      <SurfaceCard style={[styles.container]}>
        <DefaultText numberOfLines={2} style={styles.title}>
          {name}
        </DefaultText>
        <Separator />

        {/** Numero de arquivos sendo baixados */}
        <TwoColumnText>
          <Caption>{label_NumberOfFiles}</Caption>
          <Caption>{numberOfFiles}</Caption>
        </TwoColumnText>

        {/** Tamanho do download */}
        <TwoColumnText>
          <Caption>{label_Size}</Caption>
          <Caption>{size}</Caption>
        </TwoColumnText>

        {/** Tempo decorrido */}
        <TwoColumnText>
          <Caption>{label_ElapsedTime}</Caption>
          <Caption>{elapsedTime}</Caption>
        </TwoColumnText>

        {/** Tempo restante */}
        <TwoColumnText>
          <Caption>{label_Remaining}</Caption>
          <Caption>{remainingTime}</Caption>
        </TwoColumnText>

        {/** Espaço em branco */}
        <TwoColumnText />

        {/** Velocidade de download */}
        <TwoColumnText>
          <Caption>{`   ${downloadSpeed} KB/s`}</Caption>
          <Caption>{totalDownloaded}</Caption>
        </TwoColumnText>

        {/** Velocidade de upload */}
        <TwoColumnText>
          <Caption>{`   ${uploadSpeed} KB/s`}</Caption>
          <Caption>{totalUploaded}</Caption>
        </TwoColumnText>

        {/** Espaço em branco */}
        <TwoColumnText />

        {/** Ratio */}
        <TwoColumnText>
          <Caption>{label_Ratio}</Caption>
          <Caption>{ratio}</Caption>
        </TwoColumnText>

        {/** Espaço em branco */}
        <TwoColumnText />

        {/** Status */}
        <TwoColumnText>
          <Caption style={styles.status}>{'downloading'}</Caption>
          {''}
        </TwoColumnText>

        {/** Espaço em branco */}
        <TwoColumnText />
        {}
      </SurfaceCard>
    </TouchableOpacity>
  );
};

const Separator = () => {
  return (
    <View style={{ paddingVertical: 10, alignItems: 'center' }}>
      {}
      <View
        style={{
          height: 2,
          borderRadius: 2,
          width: 20,
          backgroundColor: 'white',
        }}
      />
      {}
    </View>
  );
};

interface TwoColumnTextProps {
  children?: [string | React.ReactNode, string | React.ReactNode];
}

const TwoColumnText = (props: TwoColumnTextProps) => {
  const { children = ['', ''] } = props;
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      {}
      <DefaultText>{children[0]}</DefaultText>
      <DefaultText>{children[1]}</DefaultText>
      {}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 230, // ou talvez 180 seja melhor
    minWidth: 180,
    paddingHorizontal: 10,
    paddingTop: 10,
    alignSelf: 'flex-start',
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
