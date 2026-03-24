import React, { useState } from 'react';
import { Parser } from 'expr-eval';
import './App.css';

const Calculator = () => {
  const [expression, setExpression] = useState('0'); // what’s displayed

  // Handle button clicks
  const handleClick = (value) => {

    // Clear
    if (value === 'AC') {
      setExpression('0');
      return;
    }

    // Toggle +/-
    if (value === '+/-') {
      try {
        setExpression((parseFloat(expression) * -1).toString());
      } catch {
        setExpression('0');
      }
      return;
    }

    // Percent (divide last number by 100)
    if (value === '%') {
      try {
        const lastNumber = expression.match(/(\d+\.?\d*)$/); // last number
        if (lastNumber) {
          const percent = parseFloat(lastNumber[0]) / 100;
          const newExp = expression.replace(/(\d+\.?\d*)$/, percent.toString());
          setExpression(newExp);
        }
      } catch {
        setExpression('0');
      }
      return;
    }

    // Equals
    if (value === '=') {
      try {
        // Replace display operators with JS operators
        const formatted = expression.replace(/x/g, '*').replace(/÷/g, '/');
        const result = Parser.evaluate(formatted); // simple calculation
        setExpression(result.toString());
      } catch {
        setExpression('Error');
      }
      return;
    }

    // Append number or operator
    if (expression === '0' && !['+', '-', 'x', '÷', '.'].includes(value)) {
      setExpression(value);
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="Calculator">
      <div className="display">{expression}</div>

      <div className="buttons">
        <button onClick={() => handleClick('AC')}>AC</button>
        <button onClick={() => handleClick('+/-')}>+/-</button>
        <button onClick={() => handleClick('%')}>%</button>
        <button onClick={() => handleClick('÷')}>÷</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('x')}>x</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button className="zero" onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('=')}>=</button>
      </div>
    </div>
  );
};

export default Calculator;