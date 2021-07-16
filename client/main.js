$(document).ready(function() {

// get a quote from the server when the page loads and add it to the dom
  getQuote();

// when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
  });

  function getQuote(){

    //YOUR CODE HERE, Add a GET request
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/quote',
      contentType: 'application/json',
      success: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  function addQuote(quote){
    console.log(quote);
    //YOUR CODE HERE, Add a POST request
    var dataObj = {
      quote: quote
    }
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/quote',
      contentType: 'application/json',
      // dataType: 'json',
      data: JSON.stringify(dataObj),
      success: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
});
