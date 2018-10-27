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
      <div>
        <h1>Menu Camera</h1>
        <Webcam />
        <a href="/menu-camera-captured">Capture</a>
      </div>
    )
  }
}

export default MenuCamera
