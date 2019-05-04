import React from "react";
import { BarChart } from "./../../node_modules/react-d3-components";
import "./App.css";
import axios from "../../node_modules/axios";
import jsonData from "../assets/mockup-data-revised.json";

const Container = () => {
  var data = [
    {
      label: "Answer",
      values: [
        { x: 'data 1', y: 10 },
        { x: "data 2", y: 5 },
        { x: "data 3", y: 15 }
      ]
    }
  ];

  return (
   
    <BarChart
      data={data}
      width={800}
      height={400}
      margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
    />
  );
};

export default Container;
