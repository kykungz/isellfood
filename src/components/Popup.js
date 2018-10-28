import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
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
  .no-cancel {
    p {
      text-align: center;
    }
    .confirm-button {
      width: 100%;
    }
    .deny-button {
      display: none;
    }
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

class Popup extends React.PureComponent {

  confirm = () => {
    if (this.props.onConfirm) {
      this.props.onConfirm()
    }
  }
  
  deny = () => {
    if (this.props.onDeny) {
      this.props.onDeny()
    }
  }
  render() {
    return (
      <Container>
        <div className={"popup-container " + (this.props.cancelButton === false ? 'no-cancel' : '') }>
          <p>{this.props.content}</p>
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
      </Container>
    )
  }
}

export default Popup
