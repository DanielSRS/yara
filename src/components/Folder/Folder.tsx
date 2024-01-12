import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { SurfaceCard } from '../Atoms';
import { DefaultText } from '../Text';
import { FileInFolder } from '../File/File';
import { Folder as FolderType } from '../../models/Folder/Folder';
import { FluentIcon } from '../../Libs/Icons/Fluent/FluentIcons';

interface FolderProps extends FolderType {
  //
}

const _Folder = (props: FolderProps & { cardStyle?: StyleProp<ViewStyle> }) => {
  const { name, files, subFolders, cardStyle } = props;

  return (
    <SurfaceCard style={cardStyle}>
      {/* Nome da pasta e togles */}
      <View
        style={{
          // backgroundColor: 'red',
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
          <SubFolder key={folder.name} {...folder} />
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
