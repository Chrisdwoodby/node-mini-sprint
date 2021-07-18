import React from 'react';
import $ from 'jquery';
import QuoteList from './QuoteList.jsx'

 class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfQuotes: [],
      currQuote: ''
    };
    this.getQuote = this.getQuote.bind(this);
    this.addQuote = this.addQuote.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event) {
    var currQuote = this.state.currQuote;
    currQuote = event.target.value;
    this.setState({
      currQuote: currQuote
    });
  }
  getQuote() {
    // ajax get request
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3001/quote',
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
    console.log(this.state)
    var quote = this.state.currQuote;
    // success method will be updating state list to include new quote
    var dataObj = {
      quote: quote
    }
    console.log(dataObj)
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001/quote',
      contentType: 'application/json',
      data: JSON.stringify(dataObj),
      success: (data) => {
        var joined = this.state.listOfQuotes.concat(this.state.currQuote);
        this.setState({
          listOfQuotes: joined
        })
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
          {/* <button id="submit" onClick={this.addQuote}>submit</button> */}
          <input type="text" placeholder="add new quote" onChange={this.onInputChange}/>
          <button id="submit" onClick={this.addQuote}>submit</button>
          <QuoteList listOfQuotes={this.state.listOfQuotes}/>
          <ul>
            {this.state.listOfQuotes.map((item) => {
              <li>{item}</li>
            })}
          </ul>
      </div>
    )
  }
}

export default App