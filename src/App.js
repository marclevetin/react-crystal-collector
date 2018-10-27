import React, { Component } from 'react';

// components
import CrystalList from './components/CrystalList';


class App extends Component {
  state = {
    targetNumber: 0,
    crystals: [],
    currentNumber: 0,
    wins: 0,
    losses: 0,
    showRules: false
  }

  componentDidMount() {
    this.beginGame();
  }

  beginGame = () => {
    this.generateTargetNumber();
    this.generateCrystals();
  }

  generateCrystals = () => {
    const crystalArray = [];
    
    [1,2,3,4].forEach(number => {
      const newTarget = Math.ceil( Math.random() * 12 );
      const crystal = {}
      crystal["id"] = number;
      crystal["value"] = newTarget

      crystalArray.push(crystal);
    })

    this.setState({
      crystals: crystalArray
    });
  }

  generateTargetNumber = () => {
    const newTarget = Math.floor( Math.random() * 100 ) + 20;
    this.setState({
      targetNumber: newTarget
    });
  }

  processCrystalValue = (value) => {
    const newNumber = this.state.currentNumber + value;

    if (newNumber === this.state.targetNumber) {
      this.setState({
        wins: this.state.wins + 1,
        currentNumber: 0
      })

      this.beginGame();
    } else if (newNumber > this.state.targetNumber) {
      this.setState({
        losses: this.state.losses + 1,
        currentNumber: 0
      })
      this.beginGame();
    } else {
      this.setState({
        currentNumber: newNumber
      });
    }
  }

  showRules = () => {
    this.setState({
      showRules: !this.state.showRules
    });
  }

  render() {
    const showRules = (this.state.showRules) ? `
    Rules
    Each crystal has a secret value.
    Click crystals until your score matches the target value and win!
    Your next game begins automatically.` 
    : ''
    return (
      <div>
        <h1>Crystal Collector</h1>
        <button onClick={this.showRules}>Rules</button>
        <button>Win history</button>
        {showRules}
        <h2>Win history</h2>
        <p>Wins: {this.state.wins}</p>
        <p>Losses: {this.state.losses}</p>
        <h2>Scores</h2>
        <h3>Current: {this.state.currentNumber}</h3>
        <h3>Target: {this.state.targetNumber}</h3>
        <CrystalList 
          crystals = {this.state.crystals}
          processFunction = {this.processCrystalValue}
        />
      </div>
    );
  }
}

export default App;
