import React from 'react';
import { Element } from 'react-faux-dom';
import * as d3 from '../node_modules/d3'
import d0 from './assets/graduates_salaries.json'
import './App.css';

/**
 * This file is temporary - basically a template for react-d3-components usage - Nikita
 * UPDATE: This file is now a placeholder - Nikita
 * UPDATE: This file will render the generated charts - Nikita
 * UPDATE: Now rendering with expected behavior, will clean later - Nikita
 */

const Charts = (props) => {
  const {overall,multipleClasses,singleClass,median,women,poc} = props.location.state

  const calculateMedian = (arr) => {
    let half = Math.floor(arr.length / 2)
    return (arr.length % 2)? arr[half] : (arr[half] + arr[half + 1]) / 2
  }

   let count = 0

   let data = [
     {
     category: "Overall",
     value: overall? d0.reduce((acc,obj,i) => {
       count = i
       acc += Math.round(parseFloat(obj.salary_change.replace(/[$,]/g,'')))
       return acc
     },0) / ++count : null
     },
     {
      category: "Multiple Classes",
      value: multipleClasses? d0.filter(obj => obj.number_of_classes > 1).reduce((acc,obj,i) => {
        count = i
        acc += Math.round(parseFloat(obj.salary_change.replace(/[$,]/g,'')))
        return acc
      },0) / ++count : null
     },
     {
       category: "Single Class",
       value: singleClass? d0.filter(obj => obj.number_of_classes === 1).reduce((acc,obj,i) => {
          count = i
          acc += Math.round(parseFloat(obj.salary_change.replace(/[$,]/g,'')))
          return acc
       },0) / ++count : null
     },
     {
       category: "Median",
       value: median? calculateMedian((d0.map(obj => parseFloat(obj.salary_change.replace(/[$,]/g,''))).sort((a,b) => a - b)))
       : null
     },
     {
       category: "Women",
       value: women? d0.filter(obj => obj.gender === "Female").reduce((acc,obj,i) => {
         count = i
         acc += Math.round(parseFloat(obj.salary_change.replace(/[$,]/g,'')))
         return acc
       },0) / ++count : null
     },
     {
       category: "POC",
       value: poc? d0.filter(obj => obj.demographic !== "W").reduce((acc,obj,i) => {
         count = i
         acc += Math.round(parseFloat(obj.salary_change.replace(/[$,]/g,'')))
         return acc
       },0) / ++count : null
     }
    ].filter(obj => obj.value !== null)

    function plot(chart, width, height) {
      // create scales!
      const xScale = d3.scaleBand()

          .domain(data.map(d => d.category))
          .range([0, width]);
      const yScale = d3.scaleLinear()
          .domain([0, d3.max(data, d => d.value)])
          .range([height, 0]);
      const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

      chart.selectAll('.bar')
          .data(data)
          .enter()
          .append('rect')
          .classed('bar', true)
          .attr('x', d => xScale(d.category))
          .attr('y', d => yScale(d.value))
          .attr('height', d => (height - yScale(d.value)))
          .attr('width', d => xScale.bandwidth())
          .style('fill', (d, i) => colorScale(i));

      chart.selectAll('.bar-label')
          .data(data)
          .enter()
          .append('text')
          .classed('bar-label', true)
          .attr('x', d => xScale(d.category) + xScale.bandwidth()/2)
          .attr('dx', 0)
          .attr('y', d => yScale(d.value))
          .attr('dy', -6)
          .text(d => d.value);

      const xAxis = d3.axisBottom()
          .scale(xScale);
          
      chart.append('g')
          .classed('x axis', true)
          .attr('transform', `translate(0,${height})`)
          .call(xAxis);

      const yAxis = d3.axisLeft()
          .ticks(5)
          .scale(yScale);

      chart.append('g')
          .classed('y axis', true)
          .attr('transform', 'translate(0,0)')
          .call(yAxis);

      chart.select('.x.axis')
          .append('text')
          .attr('x',  width/2)
          .attr('y', 60)
          .attr('fill', '#000')
          .style('font-size', '20px')
          .style('text-anchor', 'middle')
          .text('Category');    
          
      chart.select('.y.axis')
          .append('text')
          .attr('x', 0)
          .attr('y', 0)
          .attr('transform', `translate(-50, ${height/2}) rotate(-90)`)
          .attr('fill', '#000')
          .style('font-size', '20px')
          .style('text-anchor', 'middle')
          .text('Average Student Salary Increase');   
          
      const yGridlines = d3.axisLeft()
          .scale(yScale)
          .ticks(5)
          .tickSize(-width,0,0)
          .tickFormat('')

      chart.append('g')
          .call(yGridlines)
          .classed('gridline', true);
  }

  function drawChart() {
      const width = 800;
      const height = 450;

      const el = new Element('div');
      const svg = d3.select(el)
          .append('svg')
          .attr('id', 'chart')
          .attr('width', width)
          .attr('height', height);

      const margin = {
          top: 60,
          bottom: 100,
          left: 80,
          right: 40
      };

      const chart = svg.append('g')
          .classed('display', true)
          .attr('transform', `translate(${margin.left},${margin.top})`);

      const chartWidth = width - margin.left - margin.right;
      const chartHeight = height - margin.top - margin.bottom
      plot(chart, chartWidth, chartHeight);

      return el.toReact();
  }

    return drawChart()
   
}

export default Charts