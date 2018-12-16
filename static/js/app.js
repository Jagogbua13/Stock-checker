// var url = `/GOOG`
// d3.json(url).then(function(data){
//     console.log(data)
//     var trace1= [{
//         x: data.date,
//         y:data.close,
//         type: "scatter"
//     }]
//     Plotly.newPlot('plot',trace1)
// });

// console.log("this is working")

var submit = d3.select("#submit");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#patient-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  buildCharts(inputValue);
});


function buildCharts(ticker){
    
    
    var url = `/${ticker}`
    d3.json(url).then(function(data){
        var trace1= [{
            x: data.date,
            y:data.close,
            type: "scatter"
        }]
        Plotly.newPlot('plot',trace1)
    })
};



//var ticker = d3.select("#patient-form-input").property("value");