import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator-body">
        <div className="result">
          <p>0</p>
        </div>
        <div className="button">
          <button name="AC" type="button">AC</button>
          <button name="+/-" type="button">+/-</button>
          <button name="%" type="button">%</button>
          <button className='end' name="/" type="button">÷</button>
          <br />

          <button name="7" type="button">7</button>
          <button name="8" type="button">8</button>
          <button name="9" type="button">9</button>
          <button className='end' name="x" type="button">x</button>
          <br />

          <button name="4" type="button">4</button>
          <button name="5" type="button">5</button>
          <button name="6" type="button">6</button>
          <button className='end' name="-" type="button">-</button>
          <br />

          <button name="1" type="button">1</button>
          <button name="2" type="button">2</button>
          <button name="3" type="button">3</button>
          <button className='end' name="+" type="button">+</button>
          <br />

          <button className='btn' name="0" type="button">0</button>
          <button name="." type="button">.</button>
          <button className='end' name="=" type="button">=</button>
          <br />
        </div>
      </div>
    );
  }
}

export default Calculator;
