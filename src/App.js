import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import RouterView from './router'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import Clock from './components/Clock'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e0e0e0;
    padding: 0;
    margin: 54px 0 80px 0 !important;
    min-height: 100%;
  }
`

const Header = styled.header`
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding: 10px;
  z-index: 20;
  box-shadow: 0 0 5px 5px rgba(0,0,0,0.05);
`;

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header>
            <Link to="/order"><img src="/images/logo.png" width="30px" height="auto" alt="" style={{ float: 'left' }}/></Link>
            <i className="fas fa-user" style={{ 
              float: 'right',
              margin: '5px 5px 0 0',
              color: '#7d7d7d',
              fontSize: '24px'
              }}></i>
            <span style={{
              color: '#777',
              fontWeight: 'bold',
              fontSize: '19px',
              display: 'block',
              marginTop: 3
            }}>
              <i className="far fa-clock" style={{fontSize: '16px'}}></i>&nbsp; <Clock></Clock>
            </span>
          </Header>
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
            <Link to="/menu-camera" className="capture-button"></Link>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
