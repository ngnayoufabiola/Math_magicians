import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import '../assets/Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('0');

  const handleClick = (value) => {
    if (input === '0') {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const clearInput = () => {
    setInput('0');
  };

  const deleteLast = () => {
    if (input.length === 1) {
      setInput('0');
    } else {
      setInput(input.slice(0, -1));
    }
  };

  const calculateResult = () => {
    try {
      setInput(evaluate(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="Calculator">
      <div className="display" data-testid="display">{input}</div>
      <div className="buttons">
        <button type="button" onClick={clearInput}>AC</button>
        <button type="button" onClick={deleteLast}>DEL</button>
        <button type="button" onClick={() => handleClick('%')}>%</button>
        <button type="button" onClick={() => handleClick('/')}>÷</button>

        <button type="button" onClick={() => handleClick('7')}>7</button>
        <button type="button" onClick={() => handleClick('8')}>8</button>
        <button type="button" onClick={() => handleClick('9')}>9</button>
        <button type="button" onClick={() => handleClick('*')}>×</button>

        <button type="button" onClick={() => handleClick('4')}>4</button>
        <button type="button" onClick={() => handleClick('5')}>5</button>
        <button type="button" onClick={() => handleClick('6')}>6</button>
        <button type="button" onClick={() => handleClick('-')}>−</button>

        <button type="button" onClick={() => handleClick('1')}>1</button>
        <button type="button" onClick={() => handleClick('2')}>2</button>
        <button type="button" onClick={() => handleClick('3')}>3</button>
        <button type="button" onClick={() => handleClick('+')}>+</button>

        <button type="button" onClick={() => handleClick('0')} className="zero">0</button>
        <button type="button" onClick={() => handleClick('.')}>.</button>
        <button type="button" onClick={calculateResult}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
