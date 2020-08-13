import React from "react";
import { View, Modal, StyleSheet, ActivityIndicator } from "react-native";

const LoadingSpinner = (props) => {
  const { isVisible } = props;

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.modalView}>
        <View style={styles.mainView}>
          <ActivityIndicator size="large" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  modalView: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  mainView: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 25,
  },
});

export default LoadingSpinner;
