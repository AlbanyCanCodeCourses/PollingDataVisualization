import React from "react";
import ReactDOM from "react-dom";
import config from './config';

class Cards extends React.Component {
  componentDidMount() {
    this.getItems();
  }

  getItems() {
    fetch(
      `${config.apiUrl}api/graduates/data-visualization`
    )
      .then(results => results.json())
      .then(results => console.log(results));
  }
  render() {
    return null;
  }
}

ReactDOM.render(<Cards />, document.getElementById("root"));
