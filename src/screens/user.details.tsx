import React, { useEffect, useState, Dispatch } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncImage from "../components/async.image";
import styles from "../styles/user.details.styles";
import { deleteUserFromDB } from "../models/sqlite.operations";
import { reloadDataCall } from "../actions/users.list.actions";
import { connect } from "react-redux";

const UserDetailsView = (props) => {
  const { route, navigation, reloadDataCall } = props;

  let temp: any;
  const [item, setItem] = useState(temp);

  useEffect(() => {
    if (route.params) {
      setItem(route.params.item);
    }
  }, [route.params]);

  const deleteUser = async () => {
    let response = await deleteUserFromDB(item.fbId);
    if (response == "success") {
      reloadDataCall(true);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <AsyncImage
        source={{
          uri: item ? item.picture : "",
        }}
        width={200}
        height={200}
        isCircle={true}
      />
      <Text style={styles.text}>{item ? item.fbId : ""}</Text>
      <Text style={styles.text}>{item ? item.name : ""}</Text>
      <TouchableOpacity style={styles.btnDelete} onPress={deleteUser}>
        <Text style={styles.btnText}>Delete User</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  reloadData: state.usersListReducer.reloadData,
});

const mapDispatchToProps = (dispatch) => ({
  reloadDataCall: (params: Boolean) => dispatch(reloadDataCall(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsView);
