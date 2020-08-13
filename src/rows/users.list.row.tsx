import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AsyncImage from "../components/async.image";
import styles from "../styles/user.list.row";

const UsersListRow = (props) => {
  const { item, navigation } = props;

  const moveToDetailsView = () => {
    navigation.navigate("User Details", {
      item: item,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={moveToDetailsView}>
      <View style={styles.rowAlign}>
        <View style={styles.row}>
          <AsyncImage
            source={{
              uri: item.picture,
            }}
            width={60}
            height={60}
            isCircle={true}
          />
          <View style={styles.details}>
            <Text style={styles.name} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.fbId}>{item.fbId}</Text>
          </View>
        </View>
        <Image
          source={require("../../assets/right-arrow.png")}
          style={styles.imgArrow}
        />
      </View>
      <View style={styles.line} />
    </TouchableOpacity>
  );
};

export default UsersListRow;
