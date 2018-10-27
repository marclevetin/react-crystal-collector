import React, { Component } from 'react';

// components
import CrystalList from './components/CrystalList';


class App extends Component {
  state = {
    numberCrystals: 6,
    targetNumber: 100
  }

  componentDidMount() {
    this.generateTargetNumber()
  }

  handleCrystalChange = (event) => {
    const newValue = event.target.value;

    this.setState({
      numberCrystals: newValue
    })
  }

  generateTargetNumber = () => {
    const newTarget = Math.floor( Math.random() * 100 ) + 20;
    this.setState({
      targetNumber: newTarget
    });
  }

  render() {
    return (
      <div>
        <input value={this.state.numberCrystals} onChange={this.handleCrystalChange}/>
        <h1>Crystal Collector</h1>
        <button>Rules</button>
        <button>Win history</button>
        <h2>Rules</h2>
        <p>Each crystal has a secret value.</p>
        <p>Click crystals until your score matches the target value and win!</p>
        <p>Your next game begins automatically.</p>
        <h2>Win history</h2>
        <p>Wins: 0</p>
        <p>Losses: 0</p>
        <h2>Scores</h2>
        <h3>Current: 0</h3>
        <h3>Target: {this.state.targetNumber}</h3>
        <CrystalList 
          numberCrystals = {this.state.numberCrystals}
        />
      </div>
    );
  }
}

export default App;
