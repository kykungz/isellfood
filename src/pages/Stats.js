import React from 'react'
import styled from 'styled-components'

const StatNumber = styled.div`
  text-align: center;
  padding: 10px 10px;
  background: #543492;
  color: #fff;
  margin: 15px 0;
  span {
    display: block;
  }
  strong {
    font-size: 26px;
  }
`

class Stats extends React.Component {
  state = {
    msg: 'Stats',
  }

  componentDidMount = () => {}

  componentWillUnmount = () => {}

  render() {
    return (
      <div style={{ margin: '1em', paddingTop: 1 }}>
        <h3 className="heading">สถิติ</h3>
        <div className="row">
          <div className="col">
            <StatNumber style={{ background: 'rgb(73, 189, 204)'}}>
              <span>จำนวนยอดขาย</span>
              <strong>125</strong>
              
            </StatNumber>
          </div>
          <div className="col">
            <StatNumber>
              <span>ยอดขาย</span>
              <strong>฿ 23,145</strong>
            </StatNumber>
          </div>
        </div>
        <img src="/images/graph.png" width="100%" height="auto" alt="" />
      </div>
    )
  }
}

export default Stats
