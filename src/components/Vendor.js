import React from 'react'
import styled from 'styled-components'
import Popup from './Popup'

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
            <Popup onConfirm={this.confirm} onDeny={this.deny} content={this.props.details}>
            </Popup>
          )}
      </div>
    )
  }
}

export default Vendor
