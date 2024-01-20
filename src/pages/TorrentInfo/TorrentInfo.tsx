import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './TorrentInfo.styles';
import { SurfaceCard } from '../../components';
import { FluentIcon } from '../../Libs/Icons/Fluent/FluentIcons';

/**
 * Exibe as informações de um torrent ou magnect link
 *
 * As informações são basicas e de acordo com a disponibilidade, ex:
 *
 * Arquivos - (nem sempre disponivel)
 * hash
 * tamanho - (nem sempre disponivel)
 *
 */
export const TorrentInfo = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.sectionsContainer}>
        {/* Left: Files */}
        <View style={styles.leftContainer}>
          <TorrentFileList />
        </View>

        {/* Right: general info */}
        <View style={styles.rightContainer}>
          <TorrentInfoCards />
        </View>
      </View>
    </View>
  );
};

/**
 * Exibe a lista de pastas e arquivos no torrent
 */
const TorrentFileList = () => {
  return null;
};

/**
 * Exibe cards com informações sobre o torrent como
 * quantidade de arquivos, tamanho, hash, nome, data
 * de criação, onde os arquivos serão salvos e etc.
 */
const TorrentInfoCards = () => {
  return (
    <View style={styles.infoCardsContainer}>
      <InfoCard
        infoName={'Name'}
        infoValue={'Torrent_name_with_lots_of_info'}
        showEditButton={true}
      />

      {/* Split in two */}
      <View style={styles.splitInTwo}>
        <InfoCard infoName={'Tamanho total'} infoValue={'9,37 GB'} />
        <InfoCard infoName={'Arquivos'} infoValue={'7'} />
      </View>

      <InfoCard
        infoName={'Destino'}
        infoValue={'/storage/emulated/0/Download'}
        showEditButton={true}
      />

      <InfoCard
        infoName={'Hash'}
        infoValue={'23eeh36ndgfnd354n5f234f5ng3f45ng32f45ng'}
      />
    </View>
  );
};

interface InfoCardProps {
  infoName: string;
  infoValue: string;
  showEditButton?: boolean;
  onEditPress?: () => void;
}
const InfoCard = (props: InfoCardProps) => {
  const { infoName, infoValue, onEditPress, showEditButton = false } = props;
  return (
    <SurfaceCard style={styles.infoCardContainer}>
      <View style={styles.infoCardTitleRow}>
        <Text style={styles.infoCardTitle}>{infoName}</Text>
        {!showEditButton ? null : (
          <TouchableOpacity onPress={onEditPress}>
            <FluentIcon
              name={'ic_fluent_edit_20_regular'}
              width={18}
              height={18}
              color={'black'}
            />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.infoCardValue}>{infoValue}</Text>
    </SurfaceCard>
  );
};
