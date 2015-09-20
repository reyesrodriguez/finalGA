 $(document).ready(function(){
 


 //-------------this is size of viz window--------------//
var margin = {top: 40, right: 20, bottom: 30, left: 40},
    width = 730
    height = 300 - margin.top - margin.bottom;
var padding = 70;
//-------------this starts the axis------------//
//------------tip function-----------//
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .html(function(d) {
    return  d.borough + "," + d.neighborhood + " " +  d.happiness;
  })
  .offset([-5, 0])
 //---------------takes data from api-----------------//
d3.json("http://45.55.46.92:8080/api/entities/", function(data){
  var svg = d3.select("body")
 	.append("svg")
 	.attr('id', 'viz')
 	.attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .call(tip);
 
// xScale.domain([0, d3.max(data, function(d){return d.neighborhood})]);
// yScale.domain([0, d3.max(data, yValue)+1]);
//--------------creates the axis and ticks----------------//
var xValue = function(d) { return d.rent;},
    xScale = d3.scale.linear().domain([0, 6800, d3.max(data, function(d){return d.rent})])
    .range([0, width]),
    xMap = function(d){ return xScale(xValue(d));},
    xAxis = d3.svg.axis().scale(xScale).orient("bottom");
    
var yValue = function(d) { return d.negative;},
    yScale = d3.scale.linear().domain([0, 50, d3.max(data, function(d){return d.negative})])
    .range([height, 0]),
    yMap = function(d){ return yScale(yValue(d));},
    yAxis = d3.svg.axis().scale(yScale).orient("left");
  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
      .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("x", 770)
      .attr("y", 19)
      .style("text-anchor", "end")
      .text("Rent")


	svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
      .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 15)
      .style("text-anchor", "end")
      .text("How Angry are You?")

//------------------creates the circles----------------//
  curses = svg.selectAll('circle')
		.data(data)
		.enter()
		.append('circle')
		.attr('class', 'hvr-hang');
		curses.attr('r', function(d) {
          return Math.abs(d.rent) / 200})
		.attr('cx', function(d){return xScale(d.rent)})
		.attr('cy', function(d){return yScale(d.negative)})
		.style('stroke', 'black')
		.style('stroke-width', 3)
		.style('opacity', 0.6)
		.style('fill', function(d){
			if(d.borough === "brooklyn"){
				return "purple"
			}
			else if(d.borough === "queens"){
				return "red"
			}
			else if(d.borough === "manhattan"){
				return "yellow"
			}
			else if(d.borough === "bronx"){
				return "green"
			}
			else if(d.borough === "staten island"){
				return "teal"
			}
		})
		.on('mouseover', tip.show)
    .on('mouseout', tip.hide)
})


//--------------------end of first visualization------------///

// var x = d3.scale.linear()
//     .domain([0, 1])
//     .range([0, width]);

// var y = d3.scale.linear()
//     .domain([0, 1])
//     .range([height, 0]);

// var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient("bottom");

// var yAxis = d3.svg.axis()
//     .scale(y)
//     .orient("left");
// var tip = d3.tip()
//   .attr('class', 'd3-tip')
//   .html(function(d) {
//     return  d.rent + "," + d.neighborhood + " " +  d.happiness;
//   })
//   .offset([-5, 0])

// d3.json("http://45.55.46.92:8080/api/entities/", function(data){
//   var svg = d3.select("body")
//  	.append("svg")
//  	.attr('id', 'viz')
//  	.attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
//   .call(tip);

//   svg.append("g")
//     .attr("class", "x axis")
//     .attr("transform", "translate(0," + height + ")")
//     .call(xAxis);

// svg.append("g")
//     .attr("class", "y axis")
//     .call(yAxis);
 
//   curses = svg.selectAll('circle')
// 		.data(data)
// 		.enter()
// 		.append('circle')
// 		.attr('class', 'hvr-hang');
// 		curses.attr('r', function(d, i) {
//           return Math.abs(d.happiness) })
// 		.attr('cx', function(d) {return Math.max(0 + padding, Math.random() * width - padding)})
// 		.attr('cy', function(d) {return Math.max(0 + padding, Math.random() * height - padding)})
// 		.style('stroke', 'black')
// 		.style('stroke-width', 3)
// 		.style('opacity', 0.6)
// 		.style('fill', function(d){
// 			if(d.happiness > 1){
// 				return "black"
// 			}
// 			else if(d.borough === "queens"){
// 				return "red"
// 			}
// 			else if(d.borough === "manhattan"){
// 				return "yellow"
// 			}
// 			else if(d.borough === "bronx"){
// 				return "green"
// 			}
// 			else if(d.borough === "staten island"){
// 				return "teal"
// 			}
// 		})
// 		.on('mouseover', tip.show)
//     .on('mouseout', tip.hide)
// 	})

  })
