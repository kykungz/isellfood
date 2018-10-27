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
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.05);
`

const Splash = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background: white;
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  z-index: 9999;
  align-items: center;
  > img {
    width: 70%;
  }
  animation: Fadein 2000ms;
  @keyframes Fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

class App extends Component {
  state = {
    splash: true,
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        splash: false,
      })
    }, 0)
  }

  render() {
    return (
      <Router>
        <div>
          <GlobalStyle />
          <Splash isOpen={this.state.splash}>
            <img src="/images/logo-with-text.png" alt="" />
          </Splash>
          {!this.state.splash && (
            <>
              <Header>
                <Link to="/order">
                  <img
                    src="/images/logo.png"
                    width="30px"
                    height="auto"
                    alt=""
                    style={{ float: 'left' }}
                  />
                </Link>
                <i
                  className="fas fa-user"
                  style={{
                    float: 'right',
                    margin: '5px 5px 0 0',
                    color: '#7d7d7d',
                    fontSize: '24px',
                  }}
                />
                <span
                  style={{
                    color: '#777',
                    fontWeight: 'bold',
                    fontSize: '19px',
                    display: 'block',
                    marginTop: 3,
                  }}
                >
                  <i className="far fa-clock" style={{ fontSize: '16px' }} />
                  &nbsp; <Clock />
                </span>
              </Header>

              <RouterView />
              <div className="navigation">
                <div
                  style={{
                    float: 'left',
                  }}
                >
                  <Link to="/order" className="menu-item">
                    <img
                      src="/images/icon_order.png"
                      style={{
                        width: 35,
                        marginBottom: 4,
                      }}
                      alt=""
                    />
                    Orders
                  </Link>
                  <Link to="/menu" className="menu-item">
                    <img src="/images/icon_menu.png" alt="" />
                    Menu
                  </Link>
                </div>
                <div
                  style={{
                    float: 'right',
                  }}
                >
                  <Link to="/manage" className="menu-item">
                    <img
                      src="/images/icon_store.png"
                      style={{
                        marginBottom: 4,
                      }}
                      alt=""
                    />
                    Stores
                  </Link>
                  <Link to="/stats" className="menu-item">
                    <img src="/images/icon_stat.png" alt="" />
                    Stats
                  </Link>
                </div>
                <Link to="/menu-camera" className="capture-button" />
              </div>
            </>
          )}
        </div>
      </Router>
    )
  }
}

export default App
