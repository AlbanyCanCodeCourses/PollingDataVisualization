import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

/**
 * Allowing you to see Redux actions in your dev tools.
 * @see https://github.com/zalmoxisus/redux-devtools-extension#usage
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk, promiseMiddleware()];
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware))
);

export default store;