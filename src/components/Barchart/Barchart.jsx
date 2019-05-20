import React, { Component } from "react";
import { Element } from "react-faux-dom";
import * as d3 from "d3";
import data from "./data.js";

class Barchart extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data
      });
    });
  }

  plot(chart, width, height) {
    var svg = d3.select("svg"),
      // margin = { top: 20, right: 20, bottom: 30, left: 40 },
      // width = +svg.attr("width") - margin.left - margin.right,
      // height = +svg.attr("height") - margin.top - margin.bottom,
      g = svg.append("g");
    // .attr(
    //   "transform",
    //   "translate(" + margin.left + "," + margin.top + ")"
    // );
    console.log(g);
    const xScale = d3
      .scaleBand()
      .domain(this.state.data.map(d => d.catagory))
      .padding(0.05)
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(this.state.data, d => d.value)])
      .range([height, 0]);
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    chart
      .selectAll(".bar")
      .data(this.state.data)
      .enter()
      .append("rect")
      .classed("bar", true)
      .attr("x", d => xScale(d.catagory))
      .attr("y", d => yScale(d.value))
      .attr("height", d => height - yScale(d.value))
      .attr("width", d => xScale.bandwidth())
      .style("fill", (d, i) => colorScale(i));

    chart
      .selectAll(".bar-label")
      .data(this.state.data)
      .enter()
      .append("text")
      .classed("bar-label", true)
      .attr("x", d => xScale(d.catagory) + xScale.bandwidth() / 2)
      .attr("dx", 0)
      .attr("y", d => yScale(d.value))
      .attr("dy", -6)
      .text(d => d.value);

    const xAxis = d3.axisBottom().scale(xScale);

    chart
      .append("g")
      .classed("x axis", true)
      .attr("transform", `translate(0,${height})`)
      .call(xAxis);

    const yAxis = d3
      .axisLeft()
      .ticks(5)
      .scale(yScale);

    chart
      .append("g")
      .classed("y axis", true)
      .attr("transform", "translate(0,0)")
      .call(yAxis);

    chart
      .select(".x.axis")
      .append("text")
      .attr("x", width / 2)
      .attr("y", 60)
      .attr("fill", "#000")
      .style("font-size", "20px")
      .style("text-anchor", "middle")
      .text("Category");

    chart
      .select(".y.axis")
      .append("text")
      .attr("x", 0)
      .attr("y", 0)
      .attr("transform", `translate(-50, ${height / 2}) rotate(-90)`)
      .attr("fill", "#000")
      .style("font-size", "20px")
      .style("text-anchor", "middle")
      .text("Average Student Salary Increase");

    var legend = chart
      .append("g")
      .attr("font-family", "Montserrat")
      .attr("font-size", 10)
      .attr("text-anchor", "end")
      .selectAll("g")
      // .data(keys.slice().reverse())
      .enter()
      .append("g")
      .attr("transform", function(d, i) {
        return "translate(0," + i * 20 + ")";
      });

      legend.append("rect")
      .attr("x", width - 17)
      .attr("width", 15)
      .attr("height", 15)
      // .attr("fill", z)
      // .attr("stroke", z)
      .attr("stroke-width",2)
      // .on("click",function(d) { update(d) });

      legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9.5)
      .attr("dy", "0.32em")
      .text(function(d) { return d; });

      //////////////////////

    // const yGridlines = d3.axisLeft()
    //     .scale(yScale)
    //     .ticks(5)
    //     .tickSize(-width,0,0)
    //     .tickFormat('')

    // chart.append('g')
    //     .call(yGridlines)
    //     .classed('gridline', true);
  }

  drawChart() {
    const width = 800;
    const height = 450;

    const el = new Element("div");
    const svg = d3
      .select(el)
      .append("svg")
      .attr("id", "chart")
      .attr("width", width)
      .attr("height", height);

    const margin = {
      top: 60,
      bottom: 100,
      left: 120,
      right: 40
    };

    const chart = svg
      .append("g")
      .classed("display", true)
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    this.plot(chart, chartWidth, chartHeight);

    return el.toReact();
  }

  render() {
    return (
      <div className="Barchart">
        {this.state.data && this.drawChart()}
        <svg />
      </div>
    );
  }
}

export default Barchart;
