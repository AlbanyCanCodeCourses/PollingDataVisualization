<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
=======
import React from 'react';
import ReactDOM from 'react-dom';
>>>>>>> 4ccd887b18ef830677176471973a2e99b9d8163d
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "./history";
import store from "./store";
import App from "./components/App";
import "./index.css";
<<<<<<< HEAD

import "bootstrap/dist/css/bootstrap.min.css";

=======
>>>>>>> 4ccd887b18ef830677176471973a2e99b9d8163d
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
