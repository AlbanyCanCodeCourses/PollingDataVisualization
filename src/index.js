import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Container from './components/BarChart';
import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
  (<div>
    <Container />
  </div>),
  document.getElementById("root")
);

serviceWorker.unregister();
