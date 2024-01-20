import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // TorrentInfo
  pageContainer: {
    flex: 1,
  },
  sectionsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    // backgroundColor: 'red',
    flex: 1,
  },
  rightContainer: {
    // backgroundColor: 'blue',
    flex: 1,
    maxWidth: 350,
  },

  /** Torrent info cards */
  infoCardsContainer: {
    gap: 8,
    paddingHorizontal: 18,
    paddingTop: 1,
  },
  splitInTwo: {
    flexDirection: 'row',
    gap: 8,
  },

  /** Info card */
  infoCardContainer: {
    paddingHorizontal: 14,
    paddingVertical: 14,
    gap: 10,
    flexGrow: 1,
    // borderRadius: 3,
  },
  infoCardTitle: {
    fontSize: 14,
  },
  infoCardValue: {
    fontSize: 12,
  },
  infoCardTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  /** Section title */
  sectionTitle: {
    fontSize: 20,
    paddingHorizontal: 18,
    paddingVertical: 20,
  },

  /** TorrentFileList */
  torrentFileListContainer: {
    paddingHorizontal: 18,
    gap: 2,
  },
});
