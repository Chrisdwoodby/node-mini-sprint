import React from 'react';
import $ from 'jquery';

 class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfQuotes: [],
      currQuote: {}
    }
  }
  getQuote() {
    // ajax get request
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/quote',
      contentType: 'application/json',
      success: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  addQuote(quote) {
    // ajax post request
      // success method will be updating state list to include new quote
    this.state.currQuote = {
      quote: 'quote'
    }
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/quote',
      contentType: 'application/json',
      data: JSON.stringify({quote: 'quote'}),
      success: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  render() {


    return (
      // when we click submit we want to set a variable called quote to the value of the input

      // then invoke addquote with quote as its input
      <div id="app">
        <h1>Quote Generator</h1>
          <button id="submit" onClick={this.state.addQuote}>submit</button>
          <input type="text" placeholder="add new quote" value={this.state.currQuote} onChange={this.getQuote.bind(this)}/>
      </div>
    )
  }
}

export default App