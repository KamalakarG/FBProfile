import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";

export const HeaderButtonComponent = ({ imageName, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Image style={[styles.img, { tintColor: "#fff" }]} source={imageName} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 20,
    height: 20,
  },
});
