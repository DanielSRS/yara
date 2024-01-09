import React from "react";
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { LocalContainer } from "./LocalContainer";

export const Lodal = () => {
  const { height, width } = useWindowDimensions();
  const totalWindowSpace = {
    minWidth: width,
    minHeight: height + 32,
  }
  return (
    <LocalContainer
      // animationType="slide"
      // transparent={true}
      // visible={true}
      // onRequestClose={() => {
      //   // Alert.alert('Modal has been closed.');
      //   // setModalVisible(!modalVisible);
      //   console.log("Closing modal");
      // }}
    >
      <Pressable
        style={[styles.centeredView, totalWindowSpace]}
        onPress={() => console.log("dismiss")}
        >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => console.log("Toggle modal")}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </Pressable>
    </LocalContainer>
  );
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: "red",
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'blue'
  },
});
