import React from 'react'
import Webcam from 'react-webcam'
import Loader from './../components/Loader'
import MenuItem from '../components/MenuItem'

class FoodCamera extends React.Component {
  state = {
    captured: false,
    showMenu: false,
    loading: false,
    menu: [
      {
        image:
          '/images/no-img.png',
        title: 'ข้าวกระเพราหมู',
        price: '45'
      },
      {
        image:
          '/images/no-img.png',
        title: 'ข้าวกระเพราไก่',
        price: '45'
      },
      {
        image:
          '/images/no-img.png',
        title: 'ข้าวผัดกะเพราปลาหมึก',
        price: '60'
      }
    ]
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
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 1000)

  }

  showMenu = () => {
    this.setState({
      showMenu: true
    })
  }

  selectFood = () => {
    this.props.history.push('/menu-added2')
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
                ข้าวกระเพรา <i className="fas fa-times-circle"></i>
              </button>
            )}
          </div>
          {(this.state.showMenu &&
            <div style={{
              position: 'absolute',
              top: 33,
              left: 0,
              bottom: 0,
              right: 0,
              background: 'rgba(255,255,255,0.8)',
              padding: 20
            }}>
              <h3 className="heading">เลือกเมนูอาหาร</h3>
              {this.state.menu.map((food, i) => (
                <MenuItem {...food} key={i} onClick={this.selectFood} />
              ))}
              <MenuItem blank={true} />
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
