import FetchUsersFromSqlite from "../action-types/users.list.action.types";

const initialState = {
  showSpinner: false,
  usersList: [],
  fecthError: "",
  reloadData: false,
};

const usersListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FetchUsersFromSqlite.FETCH_USERS_FROM_SQLITE:
      return {
        ...state,
        showSpinner: true,
        usersList: [],
      };
    case FetchUsersFromSqlite.FETCH_USERS_FROM_SQLITE_SUCCESS:
      return {
        ...state,
        showSpinner: false,
        usersList: action.data,
      };
    case FetchUsersFromSqlite.FETCH_USERS_FROM_SQLITE_FAILURE:
      return {
        ...state,
        showSpinner: false,
        fecthError: action.error,
      };
    case FetchUsersFromSqlite.RELOAD_DATA:
      return {
        ...state,
        reloadData: action.params,
      };
    default:
      return state;
  }
};

export default usersListReducer;
