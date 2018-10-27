import React from 'react'
import styled from 'styled-components'

const SizeSelection = styled.p`
  overflow: hidden;
  strong {
    float: left;
  }
  .button-group {
    border: 1px solid #ccc;
    border-left: 0;
    background: #eee;
    display: block;
    float: left;
    padding: 5px 10px;
    &.first {
      border-left: 1px solid #ccc;
      border-radius: 40px 0 0 40px;
      padding-left: 15px;
    }
    &.last {
      border-radius: 0 40px 40px 0;
      padding-right: 15px;

    }
    &.selected {
      background: #999;
    }
    &:focus {
      outline: 0;
    }
    span {
      font-size: 12px;
      display: block;
    }
  }
`


class ScgPackagingForm extends React.Component {
  state = {
    boxSize: 'S',
  }

  selectSize = (size) => {
    this.setState({
      boxSize: size
    })
  }

  render() {
    return (
      <div style={{ padding: '0 1em'}}>
        <h3>สั่งซื้อกล่องรักษ์โลกกับ SCG</h3>
        <SizeSelection>
          <strong>ขนาด</strong>
          <button onClick={() => this.selectSize('S')} className={"button-group first " + (this.state.boxSize === 'S' ? 'selected' : '')}>S<span>(5x8 นิ้ว)</span></button>
          <button onClick={() => this.selectSize('M')} className={"button-group " + (this.state.boxSize === 'M' ? 'selected' : '')}>M<span>(6x12 นิ้ว)</span></button>
          <button onClick={() => this.selectSize('L')} className={"button-group last " + (this.state.boxSize === 'L' ? 'selected' : '')}>L<span>(10x15 นิ้ว)</span></button>
        </SizeSelection>
      </div>
    )
  }
}

export default ScgPackagingForm
