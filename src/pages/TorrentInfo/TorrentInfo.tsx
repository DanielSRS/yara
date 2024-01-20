import React from 'react';
import { View } from 'react-native';
import { styles } from './TorrentInfo.styles';

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
  return null;
};
