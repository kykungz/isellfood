import React from 'react'
import styled from 'styled-components'

const Block = styled.div``

const ImageContainer = styled.div`
  background: white;
  margin: 0.5em;
  margin-bottom: 0.25em;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  > img {
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.4);
    border-radius: 16px;
    width: 100%;
    box-sizing: border-box;
  }
  &.grey img {
    filter: grayscale(100%);
    opacity: 0.7;
  }

  i {
    position: absolute;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.7);
    right: 7px;
    top: 5px;
  }
`

const Name = styled.div`
  text-align: center;
  font-size: 14px;
`

const Popup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);
  .popup-container {
    position: absolute;
    top: 50%;
    left: 20px;
    right: 20px;
    margin: -50px 0 0 0;
    border: 1px solid #eee;
    background: #fff;
    color: #555;
  }
  p {
    padding: 10px;
    margin: 0;
  }
`

const ButtonGroup = styled.div`
  overflow: hidden;
  button {
    text-align: center;
    width: 50%;
    display: block;
    border: 0;
    border-top: 1px solid #ddd;
    background: none;
    float: left;
    padding: 10px;
    &:focus {
      outline: 0;
    }
    &:first-child {
      border-right: 1px solid #ddd;
    }
  }
`

class Vendor extends React.Component {
  state = {
    selected: this.props.selected,
    prompt: false,
  }

  confirm = () => {
    this.setState({
      prompt: false,
      selected: true,
    })
  }

  deny = () => {
    this.setState({
      prompt: false,
      selected: false,
    })
  }

  toggle = () => {
    // activate --> show prompt only when there is some message
    if (!this.state.selected && this.props.details) {
      this.setState({
        prompt: true,
      })
    } else {
      // deactivate
      this.setState({
        selected: !this.state.selected,
      })
    }
  }

  render() {
    return (
      <div>
        <Block onClick={this.toggle}>
          <ImageContainer className={this.state.selected ? '' : 'grey'}>
            <img src={this.props.icon} alt="" />
            {this.state.selected && <i className="fas fa-check-circle" />}
          </ImageContainer>
          <Name>{this.props.name}</Name>
        </Block>
        {this.state.prompt &&
          this.props.details && (
            <Popup>
              <div className="popup-container">
                <p>{this.props.details}</p>
                <ButtonGroup>
                  <button className="confirm-button" onClick={this.confirm}>
                    ตกลง
                  </button>
                  <button className="deny-button" onClick={this.deny}>
                    ยกเลิก
                  </button>
                </ButtonGroup>
              </div>
              <div className="overlay" />
            </Popup>
          )}
      </div>
    )
  }
}

export default Vendor
