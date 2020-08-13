import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "../store/store";
import UsersListView from "../screens/users.list";
import UserLogin from "../screens/user.login";
import UserDetailsView from "../screens/user.details";
import { NAV_BAR } from "../constants";

const HomeStack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStack.Navigator screenOptions={NAV_BAR}>
          <HomeStack.Screen name="Users List" component={UsersListView} />
          <HomeStack.Screen name="Login" component={UserLogin} />
          <HomeStack.Screen name="User Details" component={UserDetailsView} />
        </HomeStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default RootNavigation;
