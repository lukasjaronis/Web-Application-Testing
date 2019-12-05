import React, { Component } from 'react';
import './App.css';

import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

export const addStrike = currentStrike => {
  return currentStrike + 1;
}

class App extends Component {

state = {

  balls: 0,
  strikes: 0
}

handleStrikes = event => {
  event.preventDefault();

  this.setState({
    strikes: addStrike(this.setState.strikes)
  });

if (this.state.strike > 2) {
  this.setState({
    strikes: 0
  });
}

}



  render() {

    return (
      <div className="App">
  
      </div>
    );

  }

}

export default App;
