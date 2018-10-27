import React from 'react'
import Webcam from "react-webcam";

class MenuCamera extends React.Component {
  state = {
    msg: 'cam',
  }

  componentDidMount = () => {}

  componentWillUnmount = () => {}

  render() {
    return (
      <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
        <Webcam 
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
        <div className="bottom-button-wrapper">
          <a href="/menu-camera-captured" className="capture-button">Capture</a>
        </div>
      </div>
    )
  }
}

export default MenuCamera
