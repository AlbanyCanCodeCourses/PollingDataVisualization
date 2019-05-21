import React, { Component } from 'react';
import { Element } from 'react-faux-dom';
import * as d3 from 'd3';
import data from './data.js';
import Card from '../Cards/cardData';
import axios from 'axios';
import * as stats from '../../utils/stats';
import './BarChart.css';

class Barchart extends Component {
  state = {
    studentData: null,
    hasError: false
  };

  getLiveData = async () => {
    await axios
      .get(
        'http://graduateportal-dev.tw7ahpynm7.us-east-2.elasticbeanstalk.com/api/graduates/data-visualization'
      )
      .then(resp => {
        this.setState({ studentData: [...resp.data.data] });
      })
      .catch(error => this.setState({ hasError: true, error }));
  };

  componentDidMount = () => {
    this.getLiveData();
  };

  plot(chart, width, height) {
    console.log(this.state.studentData);
    const studentDataSet = [
      { category: 'Overall', average: stats.avg(this.state.studentData) },
      {
        category: 'Median',
        average: stats.calculateMedian(
          this.state.studentData.map(obj =>
            stats.parseCurrency(obj.salarychange)
          )
        )
      },
      {
        category: 'Multiple Classes',
        average: stats.avg(
          this.state.studentData.filter(obj => obj.numberofclasses !== '1')
        )
      },
      {
        category: 'Men',
        average: stats.avg(
          this.state.studentData.filter(obj => obj.gender === 'Male')
        )
      },
      {
        category: 'POC',
        average: stats.avg(
          this.state.studentData.filter(obj => obj.demographic !== 'W')
        )
      },
      {
        category: 'Women',
        average: stats.avg(
          this.state.studentData.filter(obj => obj.gender === 'Female')
        )
      },
      {
        category: 'Single Class',
        average: stats.avg(
          this.state.studentData.filter(obj => obj.numberofclasses === '1')
        )
      },
      {
        category: 'Veterans',
        average: stats.avg(
          this.state.studentData.filter(obj => obj.veteran === 'Y')
        )
      }
    ];
    console.log(studentDataSet);

    console.log(this.state.studentData);
    const xScale = d3
      .scaleBand()
      .domain(studentDataSet.map(d => d.category))
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(studentDataSet, d => d.average)])
      .range([height, 0]);
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    chart
      .selectAll('.bar')
      .data(studentDataSet)
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr('x', d => xScale(d.category))
      .attr('y', d => yScale(d.average))
      .attr('height', d => height - yScale(d.average))
      .attr('width', d => xScale.bandwidth())
      .style('fill', (d, i) => colorScale(i));

    // chart
    //   .selectAll('.bar-label')
    //   .data(studentDataSet)
    //   .enter()
    //   .append('text')
    //   .classed('bar-label', true)
    //   .attr('x', d => xScale(d.category) + xScale.bandwidth() / 2)
    //   .attr('dx', 0)
    //   .attr('y', d => yScale(d.average))
    //   .attr('dy', -6)
    //   .text(d => d.value);

    const xAxis = d3.axisBottom().scale(xScale);

    chart
      .append('g')
      .classed('x axis', true)
      .attr('transform', `translate(0,${height})`)
      .call(xAxis);

    const yAxis = d3
      .axisLeft()
      .ticks(5)
      .scale(yScale);

    chart
      .append('g')
      .classed('y axis', true)
      .attr('transform', 'translate(0,0)')
      .call(yAxis);

    chart
      .select('.x.axis')
      .append('text')
      .attr('x', width / 2)
      .attr('y', 60)
      .attr('fill', '#000')
      .style('font-size', '20px')
      .style('text-anchor', 'middle')
      .text('Catagory');

    chart
      .select('.y.axis')
      .append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('transform', `translate(-50, ${height / 2}) rotate(-90)`)
      .attr('fill', '#000')
      .style('font-size', '20px')
      .style('text-anchor', 'middle')
      .text('Average Student Salary Increase');
  }

  drawChart() {
    const width = 800;
    const height = 450;

    const el = new Element('div');
    const svg = d3
      .select(el)
      .append('svg')
      .attr('id', 'chart')
      .attr('width', width)
      .attr('height', height);

    const margin = {
      top: 60,
      bottom: 100,
      left: 150,
      right: 40
    };

    const chart = svg
      .append('g')
      .classed('display', true)
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    this.plot(chart, chartWidth, chartHeight);

    return el.toReact();
  }

  render() {
    console.log(this.state.studentData);
    return (
      <div className="center-chart">
        {this.state.studentData && this.drawChart()}
        <Card />
      </div>
    );
  }
}

export default Barchart;
