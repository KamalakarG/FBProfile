import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import {
  getUsersFromSqliteCall,
  reloadDataCall,
} from "../actions/users.list.actions";
import { connect } from "react-redux";
import UsersListRow from "../rows/users.list.row";
import LoadingSpinner from "../components/loading.spinner";
import { HeaderButtonComponent } from "../components/header.button";

const UsersListView = (props) => {
  const {
    getUsersFromSqliteCall,
    usersList,
    showSpinner,
    navigation,
    reloadData,
    reloadDataCall,
  } = props;

  useEffect(() => {
    loadHeaderButtons();
    getUsersFromSqliteCall();
  }, []);

  useEffect(() => {
    console.log("--reload--");
    if (reloadData == true) {
      getUsersFromSqliteCall();
      reloadDataCall(false);
    }
  }, [reloadData]);

  const addUserTapped = () => {
    navigation.navigate("Login");
  };

  const loadHeaderButtons = () => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtonComponent
          imageName={require("../../assets/plus.png")}
          onPress={addUserTapped}
        />
      ),
    });
  };

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <LoadingSpinner isVisible={showSpinner} />
      <FlatList
        style={{ backgroundColor: "#fff", marginVertical: 10 }}
        data={usersList}
        keyExtractor={({ fbId }) => fbId.toString()}
        renderItem={({ item }) => (
          <UsersListRow item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  showSpinner: state.usersListReducer.showSpinner,
  usersList: state.usersListReducer.usersList,
  reloadData: state.usersListReducer.reloadData,
});

const mapDispatchToProps = (dispatch) => ({
  getUsersFromSqliteCall: () => dispatch(getUsersFromSqliteCall()),
  reloadDataCall: (params: Boolean) => dispatch(reloadDataCall(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersListView);
