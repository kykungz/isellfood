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
  strong {
    margin-top: 13px;
    margin-right: 10px;
  }
`


class ScgPackagingForm extends React.Component {
  state = {
    boxSize: 'S',
    submitted: false
  }

  selectSize = (size) => {
    this.setState({
      boxSize: size
    })
  }

  submit = () => {
    this.setState({
      submitted: true
    })
  }

  render() {
    return (
      <div>
        <h4>สั่งซื้อกล่องรักษ์โลกกับ SCG</h4>
        
        
        <SizeSelection>
          <div className="row">
            <div className="col-3">
              <strong>ขนาด</strong>
            </div>
            <div className="col-9">
              <button onClick={() => this.selectSize('S')} className={"button-group first " + (this.state.boxSize === 'S' ? 'selected' : '')}>S<span>(5x8 นิ้ว)</span></button>
              <button onClick={() => this.selectSize('M')} className={"button-group " + (this.state.boxSize === 'M' ? 'selected' : '')}>M<span>(6x12 นิ้ว)</span></button>
              <button onClick={() => this.selectSize('L')} className={"button-group last " + (this.state.boxSize === 'L' ? 'selected' : '')}>L<span>(10x15 นิ้ว)</span></button>
            </div>
          </div>
        </SizeSelection>
        <div className="row">
          <div className="col-3">
            <strong style={{ marginTop: 7, display: 'block'}}>จำนวน</strong>
          </div>
          <div className="col-9">
            <div className="input-group">
              <input className="form-control" type="number" value="100" />
              <div className="input-group-append">
                <span className="input-group-text">ชิ้น</span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <button onClick={this.submit} className="button" style={{ float: 'right' }}>สั่งซื้อ</button>
        { this.state.submitted &&
          <p className="text-success" style={{ marginTop: 10 }}>ส่งคำสั่งซื้อเรียบร้อยแล้ว</p>
        }
      </div>
    )
  }
}

export default ScgPackagingForm
