import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterView from './router'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e0e0e0;
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <GlobalStyle />
          <RouterView />
        </div>
      </Router>
    )
  }
}

export default App
