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
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ]

  const toLocaleString = (num) => 
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

  const removeSpaces = (num) => num.toString().replace(/\s/g, "");

  function numClickHandler(e) {
    // No whole numbers start with 0
    // No multiple 0s before a comma
    // Format will be "0." if "." is pressed
    // Numbers entered can only be up to 16 digits long
    e.preventDefault();
    const value = e.target.innerHTML;
    
    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === '0' && value === '0'
          ? '0'
          : removeSpaces(calc.num) % 1 === 0
          ? toLocaleString(Number(removeSpaces((calc.num + value))))
          : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res
      })
    }
  }

  function commaClickHandler(e) {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
    })
  }

  function signClickHandler(e) {
    e.preventDefault();
    const value = e.target.innerHTML;
    
    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0
    })
  }

  function equalsClickHandler() {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === '+'
          ? a + b
          : sign === '-'
          ? a - b
          : sign === 'X'
          ? a * b
          : a / b;
  
      const result =
        calc.num === '0' && calc.sign === '/'
          ? 'Cannot divide by 0'
          : toLocaleString(
              math(
                Number(removeSpaces(calc.res)),
                Number(removeSpaces(calc.num)),
                calc.sign
              )
            );
  
      setCalc({
        ...calc,
        res: result,
        sign: '',
        num: 0
      });
    }
  }

  function invertClickHandler() {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num * -1)) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res * -1)) : 0,
      sign: ''
    })
  }

  function percentClickHandler() {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: ''
    })
  }

  function resetClickHandler() {
    setCalc({
      ...calc,
      num: 0,
      res: 0,
      sign: ''
    })
  }

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
