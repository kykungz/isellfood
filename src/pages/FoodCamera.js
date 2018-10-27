import React from 'react'
import Webcam from 'react-webcam'
import Loader from './../components/Loader'

class FoodCamera extends React.Component {
  state = {
    captured: false,
    showMenu: false,
    loading: false
  }

  setWebcamRef = webcam => {
    this.webcam = webcam;
  }

  componentDidMount = () => {}

  componentWillUnmount = () => {}

  capture = () => {
    this.setState({
      captured: true,
      loading: true,
      capturedImage: this.webcam.getScreenshot()
    })
    let $this = this;
    setTimeout(function(){ 
      this.setState({
        loading: false
      })
    }.bind(this), 3000)

  }

  showMenu = () => {
    this.setState({
      showMenu: true
    })
  }

  render() {
    if (this.state.captured) {
      return (
        <div>
          <div style={{
            position: 'relative'
          }}>
            <img src={this.state.capturedImage} alt="food" />
            {this.state.loading &&
              <Loader />
            }
            {(!this.state.loading && !this.state.showMenu &&
              <button className="image-label" onClick={this.showMenu}>
                ข้าวกระเพราหมู (฿ 30) <i className="fas fa-times-circle"></i>
              </button>
            )}
          </div>
          {(this.state.showMenu &&
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              background: 'rgba(255,255,255,0.8)',
              padding: 20
            }}>
              <h3 className="small-heading">เลือกเมนูอาหาร</h3>
              <ul className="menu-list button-style">
                <li>
                  <button>
                    <strong>ข้าวกระเพราหมูสับ</strong>
                    <span>฿ 30</span>
                  </button>
                </li>
                <li>
                  <button>
                    <strong>ข้าวไข่เจียว</strong>
                    <span>฿ 25</span>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      )
    } else {
      return (
        <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
          <Webcam 
            ref={this.setWebcamRef}
            videoConstraints={{
              width: 1280,
              height: 720,
              facingMode: "environment" 
            }}
            style={{
              minWidth: '100%',
              minHeight: '100%'
            }}
            width="100%" 
            height="100%" />
            <div style={{
              textAlign: 'center'
            }}>
            <div className="bottom-button-wrapper">
              <button onClick={this.capture} className="capture-button">Capture</button>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default FoodCamera
