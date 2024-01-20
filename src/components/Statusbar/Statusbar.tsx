import React from 'react';
import { StyleSheet } from 'react-native';
import { SurfaceCard } from '../Atoms';
import { Caption } from '../Text';

export const Statusbar = () => {
  return (
    <SurfaceCard style={styles.container}>
      {/* Total de torrents (ativos?) */}
      <Caption>{'5 torrent(s)'}</Caption>

      {/* Download speed e total downloaded in the current session */}
      <Caption>{'0 KB/s (0 KB)'}</Caption>

      {/* upload speed e total uploaded in the current session */}
      <Caption>{'0 KB/s (0 KB)'}</Caption>
    </SurfaceCard>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 4,
    // backgroundColor: 'transparent',
    // borderColor: 'transparent',
  },
});
