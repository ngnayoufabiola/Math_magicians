import { useState } from 'react';

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
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="Calculator">
      <div className="display">{input}</div>

      <div className="buttons">
        <button onClick={clearInput}>AC</button>
        <button onClick={deleteLast}>DEL</button>
        <button onClick={() => handleClick('%')}>%</button>
        <button onClick={() => handleClick('/')}>÷</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>×</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>−</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('0')} className="zero">0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={calculateResult}>=</button>
      </div>
    </div>
  );
};

export default Calculator;