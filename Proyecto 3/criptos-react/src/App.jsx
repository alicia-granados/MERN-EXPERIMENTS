import { useState } from 'react'
import styled from '@emotion/styled'

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
`
function App() {
  return (
    <div className="App">
      <Heading>Desde APP</Heading>
    </div>
  )
}

export default App
