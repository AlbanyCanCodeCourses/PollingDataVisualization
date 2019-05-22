import React, { Component } from "react";
import { Element } from "react-faux-dom";
import * as d3 from "d3";
import Card from "./Cards/cardData";
import axios from "axios";
import * as stats from "../../utils/stats";
import "./BarChart.css";
import "./styles.css";
import SideBar from "./Sidebar";
import config from '../../config';

class Barchart extends Component {
  state = {
    rawData: null,
    studentData: null,
    hasError: false,
    overall: true,
    median: true,
    multiple: true,
    men: true,
    poc: true,
    women: true,
    single: true,
    veterans: true
  };

  updateData = studentData => {
    let studentDataSet = [
      {
        category: "Overall",
        average: stats.avg(studentData),
        display: this.state.overall
      },
      {
        category: "Median",
        average: stats.calculateMedian(
          studentData.map(obj => stats.parseCurrency(obj.salarychange))
        ),
        display: this.state.median
      },
      {
        category: "Multiple Classes",
        average: stats.avg(
          studentData.filter(obj => obj.numberofclasses !== "1")
        ),
        display: this.state.multiple
      },
      {
        category: "Men",
        average: stats.avg(studentData.filter(obj => obj.gender === "Male")),
        display: this.state.men
      },
      {
        category: "POC",
        average: stats.avg(studentData.filter(obj => obj.demographic !== "W")),
        display: this.state.poc
      },
      {
        category: "Women",
        average: stats.avg(studentData.filter(obj => obj.gender === "Female")),
        display: this.state.women
      },
      {
        category: "Single Class",
        average: stats.avg(
          studentData.filter(obj => obj.numberofclasses === "1")
        ),
        display: this.state.single
      },
      {
        category: "Veterans",
        average: stats.avg(studentData.filter(obj => obj.veteran === "Y")),
        display: this.state.veterans
      }
    ];
    return studentDataSet;
  };

  updateOverall = () => {
    this.setState({ overall: !this.state.overall });
  };

  updateMedian = () => {
    this.setState({ median: !this.state.median });
  };

  updateMultiple = () => {
    this.setState({ multiple: !this.state.multiple });
  };

  updateMen = () => {
    this.setState({ men: !this.state.men });
  };

  updatePOC = () => {
    this.setState({ poc: !this.state.poc });
  };

  updateWomen = () => {
    this.setState({ women: !this.state.women });
  };

  updateSingle = () => {
    this.setState({ single: !this.state.single });
  };

  updateVeterans = () => {
    this.setState({ veterans: !this.state.veterans });
  };

  getLiveData = async () => {
    await axios
      .get(
        `${config.apiUrl}api/graduates/data-visualization`
      )
      .then(resp => {
        console.log(this.updateData(resp.data.data));
        this.setState({ rawData: resp.data.data });
        this.setState({ studentData: this.updateData(resp.data.data) });
      })
      .catch(error => this.setState({ hasError: true, error }));
  };

  componentDidMount = () => {
    this.getLiveData();
  };

  plot(chart, width, height) {
    let studentDataSet = this.updateData(this.state.rawData);
    const xScale = d3
      .scaleBand()
      .domain(
        studentDataSet
          .filter(function(el) {
            return el.display === true;
          })
          .map(d => d.category)
      )
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(
          studentDataSet.filter(function(el) {
            return el.display === true;
          }),
          d => d.average
        )
      ])
      .range([height, 0]);
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    chart
      .selectAll(".bar")
      .data(
        studentDataSet.filter(function(el) {
          return el.display === true;
        })
      )
      .enter()
      .append("rect")
      .classed("bar", true)
      .attr("x", d => xScale(d.category))
      .attr("y", d => yScale(d.average))
      .attr("height", d => height - yScale(d.average))
      .attr("width", d => xScale.bandwidth())
      .style("fill", (d, i) => colorScale(i));

    // chart
    //   .selectAll(".bar-label")
    //   .data(studentDataSet)
    //   .enter()
    //   .append("text")
    //   .classed("bar-label", true)
    //   .attr("x", d => xScale(d.category) + xScale.bandwidth() / 4)
    //   .attr("dx", 0)
    //   .attr("y", d => yScale(d.average))
    //   .attr("dy", -6)
    //   .text(d => d.average);

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
  }

  drawChart(filteredData) {
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
      left: 150,
      right: 40
    };

    const chart = svg
      .append("g")
      .classed("display", true)
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    this.plot(chart, chartWidth, chartHeight, filteredData);

    return el.toReact();
  }

  render() {
    return (
      <div id="Barchart">
        {console.log(this.state)}
        <SideBar
          {...this.state}
          pageWrapId={"page-wrap"}
          outerContainerId={"Barchart"}
          updateParentOverall={this.updateOverall}
          updateParentMedian={this.updateMedian}
          updateParentMen={this.updateMen}
          updateParentMultiple={this.updateMultiple}
          updateParentPOC={this.updatePOC}
          updateParentWomen={this.updateWomen}
          updateParentSingle={this.updateSingle}
          updateParentVeterans={this.updateVeterans}
        />
        <div id="page-wrap" className="center-chart">
          {this.state.studentData &&
            this.drawChart(this.updateData(this.state.rawData))}

          <Card {...this.state} />
        </div>
      </div>
    );
  }
}

export default Barchart;
