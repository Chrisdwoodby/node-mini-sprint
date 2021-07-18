import React from 'react';

const QuoteList = props => {
  console.log(props.listOfQuotes)
  return props.listOfQuotes.map((quote) => (
      <li>{quote}</li>
  ))
}

export default QuoteList