import React, { useState } from 'react';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import './App.css';

function App() {
  // set the state of the calculator
  let [calc, setCalc] = useState({
    sign: '',
    num: 0,
    res: 0
  })

  // create an array of button values
  const btnValues = [
    ['C', '+-', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ]

  return (
    <Wrapper>
      <Screen value={calc.num ? calc.num : calc.res}/>
      <ButtonBox>
        {btnValues.flat().map((btn, i) => (
          <Button key={i}
            className={btn === '=' ? 'equals' : ''}
            value={btn}
            onClick={
              btn === 'C'
              ? resetClickHandler
              : btn === '+-'
              ? invertClickHandler
              : btn === '%'
              ? percentClickHandler
              : btn === '='
              ? equalsClickHandler
              : btn === '/' || btn === 'X' || btn === '-' || btn === '+'
              ? signClickHandler
              : btn === '.'
              ? commaClickHandler
              : numClickHandler
            }
          />
        ))}
      </ButtonBox>
    </Wrapper>
  );
}

export default App;
