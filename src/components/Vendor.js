import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
  ${props => !props.selected && `filter: grayscale(0)`};
`

const ImageContainer = styled.div`
  background: white;
  padding: 0 1em;
  padding-bottom: 0.25em;

  > img {
    box-shadow: 0 0 16px rgba(0,0,0,0.4);
    border-radius: 16px;
    width: 100%;
    box-sizing: border-box;
  }
`

const Name = styled.div`
  text-align: center;
  font-size: 14px;
`

class Vendor extends React.PureComponent {
  state = {
    selected: false,
  }

  render() {
    return (
      <Block>
        <ImageContainer>
          <img src={this.props.icon} alt="" />
        </ImageContainer>
        <Name>{this.props.name}</Name>
      </Block>
    )
  }
}

export default Vendor