import React, { Component } from "react";
import Card from "./cardDataUI";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-3">
            <Card title="Veterans" text="67" text2="$15,000" />
          </div>
          <div className="col-md-3">
            <Card title="POC" text="50" text2="$20,000" />
          </div>
          <div className="col-md-3">
            <Card title="Women" text="75" text2="12,500" />
          </div>
          <div className="col-md-3">
            <Card title="Overall" text="200" text2="$30,000" />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
