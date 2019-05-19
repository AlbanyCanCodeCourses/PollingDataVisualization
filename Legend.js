import React, { Component } from "react";
import * as d3 from "d3"

class Legend extends Component {
    render() {

var legend = g.append("g")
.attr("font-family", "sans-serif")
.attr("font-size", 10)
.attr("text-anchor", "end")
.selectAll("g")
.data(keys.slice().reverse())
.enter().append("g")
.attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

legend.append("rect")
.attr("x", width - 17)
.attr("width", 15)
.attr("height", 15)
.attr("fill", z)
.attr("stroke", z)
.attr("stroke-width",2)
.on("click",function(d) { update(d) });

legend.append("text")
.attr("x", width - 24)
.attr("y", 9.5)
.attr("dy", "0.32em")
.text(function(d) { return d; });

var filtered = [];

////
//// Update and transition on click:
////

function update(d) {  

//
// Update the array to filter the chart by:
//

// add the clicked key if not included:
if (filtered.indexOf(d) == -1) {
filtered.push(d); 
// if all bars are un-checked, reset:
if(filtered.length == keys.length) filtered = [];
}
// otherwise remove it:
else {
filtered.splice(filtered.indexOf(d), 1); 
}

//
// Update the scales for each group(/states)'s items:
//
var newKeys = [];
keys.forEach(function(d) {
if (filtered.indexOf(d) == -1 ) {
  newKeys.push(d);
}
})
x1.domain(newKeys).rangeRound([0, x0.bandwidth()]);
y.domain([0, d3.max(data, function(d) { return d3.max(keys, function(key) { if (filtered.indexOf(key) == -1) return d[key]; }); })]).nice();

// update the y axis:
      svg.select(".y")
      .transition()
      .call(d3.axisLeft(y).ticks(null, "s"))
      .duration(500);


//
// Filter out the bands that need to be hidden:
//
var bars = svg.selectAll(".bar").selectAll("rect")
.data(function(d) { return keys.map(function(key) { return {key: key, value: d[key]}; }); })

bars.filter(function(d) {
   return filtered.indexOf(d.key) > -1;
})
.transition()
.attr("x", function(d) {
  return (+d3.select(this).attr("x")) + (+d3.select(this).attr("width"))/2;  
})
.attr("height",0)
.attr("width",0)     
.attr("y", function(d) { return height; })
.duration(500);

//
// Adjust the remaining bars:
//
bars.filter(function(d) {
  return filtered.indexOf(d.key) == -1;
})
.transition()
.attr("x", function(d) { return x1(d.key); })
.attr("y", function(d) { return y(d.value); })
.attr("height", function(d) { return height - y(d.value); })
.attr("width", x1.bandwidth())
.attr("fill", function(d) { return z(d.key); })
.duration(500);


// update legend:
legend.selectAll("rect")
.transition()
.attr("fill",function(d) {
  if (filtered.length) {
    if (filtered.indexOf(d) == -1) {
      return z(d); 
    }
     else {
      return "white"; 
    }git 
  }
  else {
   return z(d); 
  }
})
.duration(100);git


}

}
}
export default Legend;

