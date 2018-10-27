import React from 'react'
import Webcam from "react-webcam"
import { Link } from 'react-router-dom'

class MenuCamera extends React.Component {

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
          <Link to="/menu-added-confirm" className="capture-button">Capture</Link>
        </div>
      </div>
    )
  }
}

export default MenuCamera
