import React from 'react';
import {BarChart, ScatterPlot, LineChart} from 'react-d3-components'
import data from './assets/MOCK_DATA_150.json'
import './App.css';

/**
 * This file is temporary - basically a template for react-d3-components usage - Nikita
 */

const Charts = (props) => {
    let d9 = data.map(s => {
        return {
          x: parseFloat(s.current_salary.slice(1)),
          y: parseFloat(s.previous_salary.slice(1)),
        }
      })
      let dF = d9
    
      dF.sort((a,b)=> a.x - b.x)
    
      console.log("dF",dF)
    
      let dP = {
        label: 'somethingC',
        values: [...dF]
      }
    
      let d0 = data.map(s => {
        return {
          x: parseFloat(s.current_salary.slice(1)),
          y: parseFloat(s.previous_salary.slice(1)),
        }
      })
    
      let dG = d0
    
      dG.sort((a,b) => a.x - b.x)
    
      console.log("dG",dG)
    
      let dY = [].concat(...(data.map(s => {
        return [
          {
            x: 'somethingA',
            y: parseFloat(s.previous_salary.slice(1)),
          },
          {
            x: 'somethingB',
            y: parseFloat(s.current_salary.slice(1)),
          }
        ]
      })))
    
      let dX = {
        label: 'somethingA',
        values: [...dG]
      }
    
      let dZ = {
        label: 'somethingA',
        values: [...dY]
      }
    
      console.log(dX)
      return (
        <div >
          <BarChart 
            data={dZ} 
            width={800}
            height={600}
            margin={{ top: 10, bottom: 50, left: 0, right: 10 }}
          />
          <hr />
            <div className="sp">
            <ScatterPlot
                    data={dX}
                    width={980}
                    height={600}
                    margin={{top: 10, bottom: 50, left: 60, right: 10}}/>
            </div>
          <hr/>
          <LineChart
                    data={dP}
                    width={1200}
                    height={600}
                    margin={{top: 10, bottom: 50, left: 60, right: 5}}/>
        </div>
      )
}

export default Charts