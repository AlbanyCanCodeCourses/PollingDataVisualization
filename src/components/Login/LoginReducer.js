import * as types from "../../constants/actionTypes";

const LoginReducer = (
  state = {
    isLoading: false,
    hasError: false,
    isLoginInvalid: false,
    validationState: null
  },
  action
) => {
  switch (action.type) {
    case types.LOGIN_FULFILLED: {
      const { isSuccess } = action.payload;
      return isSuccess
        ? {
            ...state,
            isLoading: false,
            hasError: false,
            isLoginInvalid: false,
            validationState: "success"
          }
        : {
            ...state,
            isLoading: false,
            hasError: false,
            isLoginInvalid: true,
            validationState: "error"
          };
    }
    case types.LOGIN_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        isLoginInvalid: false,
        validationState: null
      };
    case types.LOGIN_REJECTED:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        isLoginInvalid: false,
        validationState: null
      };
    default:
      return state;
  }
};

export default LoginReducer;