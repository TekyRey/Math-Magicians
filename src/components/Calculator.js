import React, { Component } from 'react';
import calculate from '../logic/calculate.js';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operator: null,
    };
  }

  handleClick = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState(result);
  };

  resultDisplayClick = (e) => {
    this.setState({
      total: e.target.textContent,
    });
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-body">
        <div className="result" onChange={this.resultDisplayClick}>
          <p>{total}
            {operation}
            {next}</p>
        </div>
        <div className="button">
          <button onClick={this.handleClick} name="AC" type="button">AC</button>
          <button onClick={this.handleClick} name="+/-" type="button">+/-</button>
          <button onClick={this.handleClick} name="%" type="button">%</button>
          <button onClick={this.handleClick} className='end' name="/" type="button">÷</button>
          <br />

          <button onClick={this.handleClick} name="7" type="button">7</button>
          <button onClick={this.handleClick} name="8" type="button">8</button>
          <button onClick={this.handleClick} name="9" type="button">9</button>
          <button onClick={this.handleClick} className='end' name="x" type="button">x</button>
          <br />

          <button onClick={this.handleClick} name="4" type="button">4</button>
          <button onClick={this.handleClick} name="5" type="button">5</button>
          <button onClick={this.handleClick} name="6" type="button">6</button>
          <button onClick={this.handleClick} className='end' name="-" type="button">-</button>
          <br />

          <button onClick={this.handleClick} name="1" type="button">1</button>
          <button onClick={this.handleClick} name="2" type="button">2</button>
          <button onClick={this.handleClick} name="3" type="button">3</button>
          <button onClick={this.handleClick} className='end' name="+" type="button">+</button>
          <br />

          <button onClick={this.handleClick} className='btn' name="0" type="button">0</button>
          <button onClick={this.handleClick} name="." type="button">.</button>
          <button onClick={this.handleClick} className='end' name="=" type="button">=</button>
          <br />
        </div>
      </div>
    );
  }
}

export default Calculator;
