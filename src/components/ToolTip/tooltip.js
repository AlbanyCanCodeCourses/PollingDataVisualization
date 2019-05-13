import React, { Component } from "react";
import * as d3 from "d3";
class ToolTip extends Component {
  render() {
    var tooltip_container = d3
      .select(".tooltip")
      .append("svg")
      .attr("height", 200)
      .attr("width", 400);

    tooltip_container
      .append("rect")
      .attr("height", 200)
      .attr("width", 400)
      .attr("fill", "#ff9320");

    var tooltip = d3.select(".tooltip").append("div")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .html("<p>I'm a tooltip writtengfhgfhf in HTML</p><img src='https://github.com/holtzy/D3-graph-gallery/blob/master/img/section/ArcSmal.png?raw=true'></img><br>Fancy<br><span style='font-size: 40px;'>Isn't it?</span>");
;

    return <div className="tooltip" />;
  }
}

export default ToolTip;
