import React from "react";
import ReactDOM from "react-dom";

class Cards extends React.Component {
  componentDidMount() {
    this.getItems();
  }

  getItems() {
    fetch(
      "http://graduateportal-dev.tw7ahpynm7.us-east-2.elasticbeanstalk.com/api/graduates/data-visualization"
    )
      .then(results => results.json())
      .then(results => console.log(results));
  }
  render() {
    return null;
  }
}

ReactDOM.render(<Cards />, document.getElementById("root"));
