import React from 'react';
import { StyleProp, View, ViewStyle, useColorScheme } from 'react-native';
import { SurfaceCard } from '../Atoms';
import { DefaultText } from '../Text';
import { FileInFolder } from '../File/File';
import { Folder as FolderType } from '../../models/Folder/Folder';
import { FluentIcon } from '../../Libs/Icons/Fluent/FluentIcons';

interface FolderProps extends FolderType {
  isSubfolder?: boolean;
}

const _Folder = (props: FolderProps & { cardStyle?: StyleProp<ViewStyle> }) => {
  const { name, files, subFolders, cardStyle, isSubfolder } = props;
  const isDark = useColorScheme() === 'dark';
  const headerBg = isDark
    ? 'rgba(255, 255, 255, 0.0512)'
    : 'rgba(255, 255, 255, 0.6)';

  const bodyBg = isDark ? 'rgba(11, 11, 11, 0.5)' : 'rgba(246, 246, 246, 0.5)';

  // const borderColor = isDark ? 'rgba(11, 11, 11, 0.5)' : 'rgba(246, 246, 246, 0.5)';

  return (
    <SurfaceCard style={cardStyle}>
      {/* Nome da pasta e togles */}
      <View
        style={{
          backgroundColor: isSubfolder ? 'transparent' : headerBg,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {/* Left */}
        <View style={{ padding: 6, flexDirection: 'row' }}>
          {/* Icon container */}
          <View style={{ padding: 4 }}>
            {/* Icon */}
            <FluentIcon
              color={'#FFFFFF'}
              name={'ic_fluent_chevron_right_20_regular'}
              width={20}
              height={20}
            />
          </View>

          {/* Icon container */}
          <View style={{ padding: 4 }}>
            {/* Icon */}
            <FluentIcon
              color={'#FFFFFF'}
              name={'ic_fluent_folder_20_regular'}
              width={20}
              height={20}
            />
          </View>
        </View>

        {/* Center */}
        <View style={{ paddingRight: 10 }}>
          {/* Folder name */}
          <DefaultText>{name}</DefaultText>
        </View>
      </View>

      {/* corpo da pasta */}
      <View
        style={{
          // gap: 10,
          paddingLeft: 49,
          backgroundColor: isSubfolder ? undefined : bodyBg,
          borderTopWidth: isSubfolder ? undefined : 1,
          borderColor: isSubfolder ? undefined : 'rgba(0, 0, 0, 0.0578)',
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}>
        {/* arquivos */}
        {files.map(file => (
          <FileInFolder
            key={file.name}
            fileName={file.name}
            fileType={file.extension || ''}
            status={'completed'}
            size={file.size}
            progress={0}
          />
        ))}

        {/* Sub folders */}
        {subFolders.map(folder => (
          <SubFolder key={folder.name} {...folder} isSubfolder />
        ))}
      </View>
    </SurfaceCard>
  );
};

const SubFolder = (props: FolderProps) => {
  return (
    <_Folder
      {...props}
      cardStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
    />
  );
};

export const Folder = (props: FolderProps) => {
  return <_Folder {...props} />;
};
