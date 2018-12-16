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
        var tracex = [{
            x:data.date,
            close:data.close,
            high:data.high,
            low:data.low,
            open:data.open,
            type:'candlestick',
            xaxis:'x',
            yaxis:'y',
            decreasing: {line: {color: '#7F7F7F'}},
            increasing: {line: {color: '#17BECF'}},
            line: {color: 'rgba(31,119,180,1)'}
        }]
        
        // var trace1= {
        //     x: data.date,
        //     y:data.close,
        //     type: "scatter",
        //     name:"Daily Close",
        //     line: {color:"blue"}

        // }
        // var trace2= {
        //     x: data.date,
        //     y:data.open,
        //     type: "scatter",
        //     name:"Daily Open",
        //     line: {color:"purple"}

        // }
        // var trace3= {
        //     x: data.date,
        //     y:data.high,
        //     type: "scatter",
        //     name:"Daily high",
        //     line: {color:"green"}

        // }
        // var trace4= {
        //     x: data.date,
        //     y:data.low,
        //     type: "scatter",
        //     name:"Daily low",
        //     line: {color:"red"}

        // }

        // var data_plot = [trace1,trace2,trace3,trace4]

        var layout = {
            title : `${ticker} stock data`,
            dragmode: 'zoom', 
            margin: {
                r: 10, 
                t: 25, 
                b: 40, 
                l: 60
            }, 
            showlegend: false,

        }
        Plotly.newPlot('plot',tracex,layout)
    })
};



