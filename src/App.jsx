import { useState } from 'react'
import List from './components/Link'
import data from './data'
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: pink;
    *, *:before, *:after {
        box-sizing: border-box;
    }
    a {
        color: $base-color;
    }
  }
`;

const Main = styled.main `
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
const Section = styled.section `
  background: white;
  border-radius: 3px;
  box-shadow: 0 5px 15px rgb(0 0 0 / 40%);
  padding: 2rem;
`
const Button = styled.button `
  display: block;
  width: 100%;
  padding: 0.7rem 0;
  background: goldenrod;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  margin: 50px 0 20px;
`

function App() {
  const [people, setPeople] = useState(data)
  return (
    <>
      <GlobalStyle />
      <Main className="App">
        <Section>
          <h1>{people.length} birthdays today</h1>
          <List people={people}/>
          <Button className='' onClick={()=> setPeople([])}>Clear All</Button>
        </Section>
      </Main>
    </>
  )
}

export default App
