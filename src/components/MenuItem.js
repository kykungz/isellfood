import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;
  margin: 1em 0;
  background: #fff;
  &.container-fade {
    animation: Fadein 2s;
  }
  &.checked {
    // background: rgba(202, 234, 174, 0.46);
    box-shadow: 0 0 0 1px #0080007d;
    i {
      color: #008000b5;
    }
  }

  i {
    color: #bbb;
  }

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
  input {
    width: 100%;
    font-size: 20px;
    padding: 0;
    border: 0;
    border-bottom: 1px dashed #bbb;
    background: none;
  }
  i {
    font-size: 20px;
    margin-left: 10px;
    margin-right: -10px;
  }
  .price {
    width: 70px;
    text-align: right;
  }
`

class MenuItem extends React.Component {
  state = {
    checked: true
  }
  click = () => {
    this.setState({
      checked: !this.state.checked
    })
    if (this.props.onClick) this.props.onClick()
  }
  render() {
    let image = <img src='/images/no-img.png' alt="" />
    if (this.props.image) {
      image = <img src={this.props.image} alt="" />
    }

    let checked = <i className="far fa-check-square"></i>
    if (!this.state.checked) {
      checked = <i className="far fa-square"></i>
    }

    let className = '';
    if (this.props.fade !== false) {
      className += ' container-fade';
    }
    if (this.props.verify && this.state.checked) {
      className += ' checked';
    }

    let content = (
      <Padding>
        {image}
        <Detail>
          <h5>{this.props.title}</h5>
          <h5 className="price">
            <span>฿ {this.props.price}</span>
            {this.props.verify && 
              checked
            }
          </h5>
        </Detail>
      </Padding>
    )
    if (this.props.blank === true) {
      content = (
        <Padding>
          {image}
          <Detail>
            <input type="text" placeholder="กรอกชื่อเมนูใหม่" />
          </Detail>
        </Padding>
      )
    }

    return (
      <Container className={className} onClick={this.click}>
        {content}
      </Container>
    )
  }
}

export default MenuItem
