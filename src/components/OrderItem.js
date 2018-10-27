import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background: white;
  display: flex;
  animation: Fadein 2s;

  @keyframes Fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Padding = styled.div`
  display: flex;
  flex: 1;
  padding-right: 0;

  > img {
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }
  padding: 8px;
`

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0 1em;
  h5 {
    margin: 0;
  }
`

const Color = styled.div`
  width: 4px;
  background-image: ${props => `url("${props.icon}")`};
  background-position: left;
  background-size: cover;
  border-radius: 0 8px 8px 0;
`

class OrderItem extends React.PureComponent {
  render() {
    return (
      <Container>
        <Padding>
          <img src={this.props.image} alt="" />
          <Detail>
            <h5>{this.props.title}</h5>
            <h5>x{this.props.quantity}</h5>
          </Detail>
        </Padding>
        <Color icon={this.props.icon} />
      </Container>
    )
  }
}

export default OrderItem
