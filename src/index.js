import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Container from './components/BarChart/BarChart.jsx';
import App from './components/App.jsx';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  (<div>
    <App />
  </div>),
  document.getElementById("root")
);

serviceWorker.unregister();
