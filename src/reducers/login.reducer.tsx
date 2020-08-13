import LoginActionTypes from "../action-types/login.action.types";

const initialState = {
  showSpinner: false,
  loginData: [],
  loginError: "",
  isFetchCompleted: false,
};

const loginReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case LoginActionTypes.LOGIN_WITH_FB:
      return {
        ...state,
        showSpinner: true,
      };
    case LoginActionTypes.LOGIN_WITH_FB_SUCCESS:
      return {
        ...state,
        showSpinner: false,
        loginData: action.data,
        isFetchCompleted: true,
      };
    case LoginActionTypes.LOGIN_WITH_FB_FAILURE:
      return {
        ...state,
        showSpinner: false,
        loginError: action.error,
      };
    case LoginActionTypes.IS_FETCH_COMPLETED:
      return {
        ...state,
        isFetchCompleted: false,
      };
    default:
      return state;
  }
};

export default loginReducers;
