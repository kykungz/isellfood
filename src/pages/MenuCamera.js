import React from 'react'
import Webcam from 'react-webcam'
import Loader from './../components/Loader'
import MenuAddedConfirm from '../components/MenuAddedConfirm'
import Popup from './../components/Popup'
const axios = require('axios')

class MenuCamera extends React.Component {
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
    ],
    cameraMode: 'environment'
  }

  setWebcamRef = webcam => {
    this.webcam = webcam;
  }

  componentDidMount = () => {}

  componentWillUnmount = () => {}

  capture = () => {
    let screenshot = this.webcam.getScreenshot();
    this.setState({
      captured: true,
      loading: true,
      capturedImage: screenshot,
    })
    axios.post('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAaAJZN97w1ga401aWxXhaJD93awAc3jnE', {
      "requests":[
        {
          "image":{
            "content": screenshot.replace('data:image/webp;base64,','')
          },
          "features":[
            {
              "type":"TEXT_DETECTION"
            }
          ]
        }
      ]
      })
    .then(function (response) {
      let res = response.data.responses;
      let textFound = false;
      if (res && res.length > 0 && res[0].fullTextAnnotation) {
        textFound = true;
      }
      this.setState({
        loading: false,
        textFound: textFound
      })
      console.log(response);
    }.bind(this))
    .catch(function (error) {
      this.setState({
        loading: false,
        textFound: true
      })
      console.log(error);
    });

  }

  toggleCamera = () => {
    if (this.state.cameraMode === 'environment') {
      this.setState({
        cameraMode: 'user'
      })
    } else {
      this.setState({
        cameraMode: 'environment'
      })
    }
  }

  reset = () => {
    this.setState({
      captured: false,
      showMenu: false,
      loading: false,
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
            <img src={this.state.capturedImage} alt="menu" />
            {this.state.loading &&
              <Loader />
            }
            {(!this.state.loading && !this.state.showMenu && !this.state.textFound &&
              <Popup onConfirm={this.reset} cancelButton={false} content="ไม่ใช่รูปเมนูอาหาร กรุณาถ่ายรูปที่ถูกต้อง">
              </Popup>
            )}
          </div>
          {(!this.state.loading && this.state.textFound &&
            <div style={{
              position: 'absolute',
              top: 33,
              left: 0,
              bottom: 0,
              right: 0,
              background: 'rgba(255,255,255,0.8)',
              padding: 20
            }}>
              <MenuAddedConfirm />
            </div>
          )}
          <div className="bottom-button-wrapper">
            <button onClick={this.reset} className="capture-button">Capture</button>
          </div>
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
              facingMode: this.state.cameraMode 
            }}
            style={{
              minWidth: '100%',
              minHeight: '100%'
            }}
            width="100%" 
            height="100%" />
            <button className="toggle-camera" onClick={this.toggleCamera}><i className="fas fa-sync-alt"></i></button>
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

export default MenuCamera
