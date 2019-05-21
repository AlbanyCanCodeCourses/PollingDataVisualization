import history from "../../history";
import { LOGIN } from "../../constants/actionTypes";
import { loginRequest } from "../../services/api";

const loginAction = (username, password) => {
  return {
    type: LOGIN,
    payload: loginRequest(username, password)
  };
};

export const login = (username, password) => {
  return dispatch => {
    dispatch(loginAction(username, password)).then(data => {
      if (data.value.token) {
        history.push("/");
      }
    });
  };
};
