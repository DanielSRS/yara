import React from 'react';
import { Modal } from 'react-native';

export const LocalContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        // Alert.alert('Modal has been closed.');
        // setModalVisible(!modalVisible);
        console.log('Closing modal');
      }}>
      {children}
    </Modal>
  );
};
