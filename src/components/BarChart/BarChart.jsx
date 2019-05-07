import React from "react";
import { BarChart } from "react-d3-components";
import "./BarChart.css";
import axios from "axios";
import jsonData from "../../assets/mockup-data-revised.json";

const Container = () => {

    var data = [
      {
        label: "Answer",
        values: [
          { x: 'UX/UI Design', y: 10, color: "#ff0000" },
          { x: "C++", y: 5, color: "#ff0000" },
          { x: "SQL Server Development", y: -20, color: "ff0000" }
        ]
      }
    ];

  return (
        <BarChart
          data={data}
          width={window.innerWidth*0.6}
          height={400}
          margin={{ top: 50, bottom: 50, left: 50, right: 50 }}
        />
  );
};

export default Container;
