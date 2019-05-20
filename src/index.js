<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Container from './components/BarChart/BarChart.jsx';
import App from './components/App.jsx';
import * as serviceWorker from "./serviceWorker";
=======
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "./history";
import store from "./store";
import App from "./components/App";
import "./index.css";
// import * as serviceWorker from './serviceWorker';
>>>>>>> upstream/master

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// ReactDOM.render(<App />, document.getElementById('root'));

<<<<<<< HEAD
ReactDOM.render(
  (<div>
    <App />
  </div>),
  document.getElementById("root")
);

serviceWorker.unregister();
=======
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
>>>>>>> upstream/master
