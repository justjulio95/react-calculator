import React from 'react';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <Wrapper>
      <Screen value="0"/>
      <ButtonBox>
        <Button
          className=''
          value='0'
          onClick={() => {console.log('I got clicked!!')}}
        ></Button>
      </ButtonBox>
    </Wrapper>
  );
}

export default App;
