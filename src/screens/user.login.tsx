import React, { useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import {
  loginWIthFbCall,
  isFetchCompletedCall,
} from "../actions/login.actions";
import { connect } from "react-redux";
import { insertUserIntoSqlite } from "../models/sqlite.operations";
import styles from "../styles/user.login.styles";
import { reloadDataCall } from "../actions/users.list.actions";

const UserLogin = (props) => {
  const {
    loginWIthFbCall,
    loginData,
    navigation,
    isFetchCompletedCall,
    isFetchCompleted,
    reloadDataCall,
  } = props;

  useEffect(() => {
    if (isFetchCompleted) {
      insertIntoDB();
    }
  }, [isFetchCompleted]);

  const insertIntoDB = async () => {
    const response = await insertUserIntoSqlite(loginData);
    if (response == "success") {
      reloadDataCall(true);
      isFetchCompletedCall();
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginBtn} onPress={loginWIthFbCall}>
        <Text style={styles.btnText}>Login with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  showSpinner: state.loginReducers.showSpinner,
  loginData: state.loginReducers.loginData,
  isFetchCompleted: state.loginReducers.isFetchCompleted,
  reloadData: state.loginReducers.reloadData,
});

const mapDispatchToProps = (dispatch) => ({
  loginWIthFbCall: () => dispatch(loginWIthFbCall()),
  isFetchCompletedCall: () => dispatch(isFetchCompletedCall()),
  reloadDataCall: (params: Boolean) => dispatch(reloadDataCall(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
