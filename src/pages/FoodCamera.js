import React from 'react'
import Webcam from "react-webcam";

class FoodCamera extends React.Component {
  state = {
    captured: false,
    showMenu: false
  }

  setWebcamRef = webcam => {
    this.webcam = webcam;
  }

  componentDidMount = () => {}

  componentWillUnmount = () => {}

  capture = () => {
    this.setState({
      captured: true,
      capturedImage: this.webcam.getScreenshot()
    })
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
            <button className="image-label" onClick={this.showMenu}>
              ข้าวกระเพราหมู (฿ 30) <i className="fas fa-times-circle"></i>
            </button>
          </div>
          {(this.state.showMenu &&
            <div style={{}}>
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
          <Webcam width="100%" height="300" ref={this.setWebcamRef} />
          <div style={{
            textAlign: 'center'
          }}>
            <button onClick={this.capture} className="capture-button">Capture</button>
          </div>
        </div>
      )
    }
  }
}

export default FoodCamera
