import { ComponentMeta } from '@storybook/react-native';
import { TorrentDownload } from './Torrent';

export default {
  title: 'components/TorrentDownload',
  component: TorrentDownload,
  argTypes: {
    onPress: { action: 'onPress' },
  },
  args: {
    title:
      'download.title.com.um.nome.estupidadmente.long.de.exibi.no.cmpoentnest.umpoiudcomaislonco.para.tesr.tereal.lihas',
  },
} as ComponentMeta<typeof TorrentDownload>;

export const Basic: ComponentMeta<typeof TorrentDownload> = {};
