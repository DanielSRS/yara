import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './TorrentInfo.styles';
import { File, Folder, SurfaceCard } from '../../components';
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
  return (
    <View style={{ paddingHorizontal: 18, gap: 2 }}>
      {/* Pastas */}
      {[
        {
          name: 'folder name',
          files: [
            {
              name: 'first file in the folder',
              extension: 'txt',
              size: 4584648,
              downloadProgress: 548568,
              path: 'path',
            },
            {
              name: 'second file in the folder',
              extension: 'mp3',
              size: 87986415689,
              downloadProgress: 54145,
              path: 'path2',
            },
          ],
          subFolders: [
            {
              name: 'subfolder',
              files: [],
              subFolders: [],
            },
          ],
        },
        {
          name: 'empty',
          files: [],
          subFolders: [],
        },
        {
          name: 'foo',
          files: [],
          subFolders: [
            {
              name: 'bar',
              files: [
                {
                  name: 'surprise',
                  extension: 'epub',
                  size: 13548487,
                  downloadProgress: 123,
                  path: 'sklj',
                },
              ],
              subFolders: [],
            },
          ],
        },
      ].map((folder, index) => (
        <Folder
          key={index + ''}
          name={folder.name}
          files={folder.files}
          subFolders={folder.subFolders}
        />
      ))}

      {/* Arquivos */}
      {[
        {
          name: 'random file',
          type: 'tar',
          size: 4584648,
          downloadProgress: 548568,
        },
        {
          name: 'gues what I contain',
          type: 'gz',
          size: 879461532,
          downloadProgress: 651,
        },
      ].map((file, index) => (
        <File
          key={index + ''}
          fileName={file.name}
          fileType={file.type}
          size={file.size}
          progress={file.downloadProgress}
          status={'downloading'}
        />
      ))}
    </View>
  );
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
            />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.infoCardValue}>{infoValue}</Text>
    </SurfaceCard>
  );
};
