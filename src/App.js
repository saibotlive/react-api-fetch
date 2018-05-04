import React from 'react';
import Main from './components/Main';
import { Wrapper, Container } from './ui/Styles';
import Header from './components/Header';

const App = () => (
  <Wrapper>
    <Container>
      <Header/>
      <Main />
    </Container>
  </Wrapper>
);
export default App;
