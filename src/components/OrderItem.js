import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  overflow-y: hidden;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background: white;
  display: flex;
  animation: Fadein 2s;
  > div {
    flex: 1;
  }

  @keyframes Fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &.removing {
    animation: Fadeout 0.4s;
  }
  @keyframes Fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .button {
    margin-bottom: 0;
  }
`

const Padding = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 8px;
`

const Icon = styled.img`
  border-radius: 8px;
  width: 40px;
  height: 40px;
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
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  height: 200%;
  width: 4px;
  background-image: ${props => `url("${props.icon}")`};
  background-position: center left;
  background-size: cover;
  border-radius: 0 8px 8px 0;
`

class OrderItem extends React.PureComponent {
  render() {
    return (
      <Container className={this.props.removing ? 'removing' : ''}>
        <div className="p-2 pr-3">
          <h4 className="p-2 mb-0 pb-0 d-flex justify-content-between align-items-center">
            <div>#{this.props.orderNum}</div>
            <div>{this.props.name}</div>
          </h4>
          {this.props.items.map(item => (
            <Padding key={item.id}>
              <Icon src={item.image} alt="" />
              <Detail>
                <h5>{item.title}</h5>
                <h5>x{item.quantity}</h5>
              </Detail>
              <div>
                {item.price}
                บ.
              </div>
            </Padding>
          ))}
          <h3 className="d-flex justify-content-between align-items-center text-right p-2">
            <Icon style={{ borderRadius: 0 }} src={this.props.icon} alt="" />
            {this.props.items.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0)} บาท
          </h3>
          <button
            onClick={this.props.onRemove}
            className="btn-block button"
          >
            ปิดออเดอร์
          </button>
        </div>
        <Color icon={this.props.icon} />
      </Container>
    )
  }
}

export default OrderItem
