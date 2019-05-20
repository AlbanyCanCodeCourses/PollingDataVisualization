import history from "../../history";
import { LOGOUT } from "../../constants/actionTypes";


const logoutAction = () => {
  return {
    type: LOGOUT
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  return dispatch => {
    dispatch(logoutAction());
    let currentRoute = history.location.pathname;
    if ((/^\/profile\/add/.test(currentRoute)) || (/^\/profile\/\w+\/edit/.test(currentRoute))) {
      history.push("/");
    };
  };
};