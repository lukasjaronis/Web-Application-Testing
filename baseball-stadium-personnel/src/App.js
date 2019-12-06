import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';


const AppStyles = styled.div`

display: flex;
justify-content: center;
align-items: flex-start;
margin: 0 auto;
background: #e3e2df;
height: 100vh;
width: 100%;


`;


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
    strikes: addStrike(this.state.strikes)
  })

  if(this.state.strikes > 2){
      this.setState({
        strikes: 0,
      })
}
}

handleBalls = event => {
  event.preventDefault();
  this.setState({
    balls: this.state.balls + 1
  });
  if (this.state.balls > 3) {
    this.setState({
      balls: 0
    });
  }
}

handleHit = event => {
  event.preventDefault();
  this.setState({
    strikes: 0,
    balls: 0
  });
}


handleFoul = event => {
  event.preventDefault();
  this.setState({
    strikes: this.state.strikes + 1
  });

  if(this.state.strikes === 2) {
    this.setState({
      strikes: 2
    });
  }

}


  render() {

    return (
      <AppStyles>
      <div className="App">
      <Display strikes={this.state.strikes} balls={this.state.balls} />
      <ButtonPanel handleStrikes={this.handleStrikes} handleBalls={this.handleBalls} handleHit={this.handleHit} handleFoul={this.handleFoul}  />
      </div>
      </AppStyles>
    );
  }

}

export default App;
