import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import RouterView from './router'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e0e0e0;
    padding: 0;
    margin: 0;
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <GlobalStyle />
          <RouterView />
          <div className="navigation">
            <div style={{
              float: 'left',
            }}>
              <Link to="/menu" className="menu-item">
                <img src="/images/icon_menu.png" alt="" />
                Menu
              </Link>
              <Link to="/manage" className="menu-item">
              <img src="/images/icon_store.png" style={{
                marginBottom: 4
              }} alt="" />
                Stores
              </Link>
            </div>
            <div style={{
              float: 'right',
            }}>
              <Link to="/stats" className="menu-item">
                <img src="/images/icon_stat.png" alt="" />
                Stats
              </Link>
              <Link to="/order" className="menu-item">
                <img src="/images/icon_order.png" style={{
                  width: 35,
                  marginBottom: 4
                }} alt="" />
                Orders
              </Link>
            </div>
            <Link to="/menu-camera" className="capture-button" style={{

            }}></Link>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
