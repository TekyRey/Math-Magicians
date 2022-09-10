import React, { Component } from 'react';
import calculate from '../logic/calculate.js';
import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState({
    total: 0,
      next: null,
      operator: null,
  });

  const handleClick = (e) => {
    const result = calculate(input, e.target.textContent);
    setInput(result);
  };

  const resultDisplayClick = (e) => {
    setInput({
      total: e.target.textContent,
    });
  };

      const { total, next, operation } = input;
    return (
      <div className="calculator-body">
        <div className="result" onChange={resultDisplayClick}>
          <p>{total}
            {operation}
            {next}</p>
        </div>
        <div className="button">
          <button onClick={handleClick} name="AC" type="button">AC</button>
          <button onClick={handleClick} name="+/-" type="button">+/-</button>
          <button onClick={handleClick} name="%" type="button">%</button>
          <button onClick={handleClick} className='end' name="/" type="button">÷</button>
          <br />

          <button onClick={handleClick} name="7" type="button">7</button>
          <button onClick={handleClick} name="8" type="button">8</button>
          <button onClick={handleClick} name="9" type="button">9</button>
          <button onClick={handleClick} className='end' name="x" type="button">x</button>
          <br />

          <button onClick={handleClick} name="4" type="button">4</button>
          <button onClick={handleClick} name="5" type="button">5</button>
          <button onClick={handleClick} name="6" type="button">6</button>
          <button onClick={handleClick} className='end' name="-" type="button">-</button>
          <br />

          <button onClick={handleClick} name="1" type="button">1</button>
          <button onClick={handleClick} name="2" type="button">2</button>
          <button onClick={handleClick} name="3" type="button">3</button>
          <button onClick={handleClick} className='end' name="+" type="button">+</button>
          <br />

          <button onClick={handleClick} className='btn' name="0" type="button">0</button>
          <button onClick={handleClick} name="." type="button">.</button>
          <button onClick={handleClick} className='end' name="=" type="button">=</button>
          <br />
        </div>
      </div>
    );
  }


export default Calculator;
