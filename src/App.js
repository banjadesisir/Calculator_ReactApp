import React, { useState, useEffect } from 'react';
import './App.css';

const Shishir = () => {
  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  }

  const clearDisplay = () => {
    setResult("");
  }

  const calculate = () => {
    // eslint-disable-next-line
    setResult(eval(result).toString());
  }

  useEffect(() => {
    // eslint-disable-next-line
    const handleKeyDown = (event) => {
      const key = event.key;

      if (!isNaN(key) || key === '.') {
        setResult(result.concat(key));
      } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        setResult(result.concat(' ' + key + ' '));
      } else if (key === 'Enter') {
        calculate();
      } else if (key === 'Backspace') {
        setResult(result.slice(0, -1));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [result]);

  return (
    <div className='calc'>
      <input type='text' placeholder='0' id='answer' value={result} readOnly />
      <div className='buttons'>
      <input type='button' value={9} className='button' onClick={clickHandler} />
      <input type='button' value={8} className='button' onClick={clickHandler} />
      <input type='button' value={7} className='button' onClick={clickHandler} />
      <input type='button' value='.' className='button' onClick={clickHandler} />
      <input type='button' value={6} className='button' onClick={clickHandler} />
      <input type='button' value={5} className='button' onClick={clickHandler} />
      <input type='button' value={4} className='button' onClick={clickHandler} />
      <input type='button' value='-' className='button' onClick={clickHandler} />
      <input type='button' value={3} className='button' onClick={clickHandler} />
      <input type='button' value={2} className='button' onClick={clickHandler} />
      <input type='button' value='1' className='button' onClick={clickHandler} />
      <input type='button' value='+' className='button' onClick={clickHandler} />
      <input type='button' value='0' className='button' onClick={clickHandler} />
      <input type='button' value='*' className='button' onClick={clickHandler} />
      <input type='button' value='/' className='button' onClick={clickHandler} />
      <input type='button' value='%' className='button' onClick={clickHandler} />
      <input type='button' value='Clear' className='button button1' onClick={clearDisplay} />
      <input type='button' value='=' className='button button1' onClick={calculate} />

      </div>
    </div>
  )
}

export default Shishir;
