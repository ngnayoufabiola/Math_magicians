import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
  const [expression, setExpression] = useState('0');

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

    // Percent
    if (value === '%') {
      try {
        const lastNumber = expression.match(/(\d+\.?\d*)$/);
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
        const formatted = expression.replace(/x/g, '*').replace(/÷/g, '/');
        const result = evaluate(formatted);
        setExpression(result.toString());
      } catch {
        setExpression('Error');
      }
      return;
    }

    // Prevent replacing 0 with another number
    if (expression === '0' && !['+', '-', 'x', '÷', '.'].includes(value)) {
      setExpression(value);
    } else {
      setExpression(expression + value);
    }
  };

  const buttons = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  return (
    <div className="calculator">
      <Display expression={expression} />

      <div className="buttons">
        {buttons.map((btn) => (
          <Button
            key={btn}
            label={btn}
            onClick={handleClick}
            className={btn === '0' ? 'zero' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
