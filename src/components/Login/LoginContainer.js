import { connect } from "react-redux";
import Login from "./Login";
import { login } from "./loginActions";

function mapStateToProps(state) {
  return {
    ...state.Login
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => dispatch(login(username, password))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);