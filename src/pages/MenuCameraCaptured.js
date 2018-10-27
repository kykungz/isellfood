import React from 'react'

class MenuCameraCaptured extends React.Component {
  state = {
    msg: 'camera',
  }

  componentDidMount = () => {}

  componentWillUnmount = () => {}

  render() {
    return (
      <div>
        <ul className="menu-list">
          <li>
            <strong>ข้าวกระเพราหมูสับ</strong>
            <span>฿ 30</span>
          </li>
          <li>
            <strong>ข้าวไข่เจียว</strong>
            <span>฿ 25</span>
          </li>
        </ul>
        <div className="bottom-button-wrapper">
          <a href="/food-camera" className="capture-button">ถ่ายรูปอาหาร</a>
        </div>
      </div>
    )
  }
}

export default MenuCameraCaptured
