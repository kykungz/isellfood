import React from 'react'

class Clock extends React.PureComponent {
  state = {
    currentTime: ''
  }

  startTime = () => {
    let today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    m = this.checkTime(m)
    s = this.checkTime(s)
    this.setState({
      currentTime: h + ":" + m + ":" + s
    })
    let t = setTimeout(this.startTime, 500)
  }

  componentDidMount = () => {
    this.startTime()
  }
  
  checkTime = (i) => {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
    return i
  }
  
  render() {
    return (
      <span>
        {this.state.currentTime}
      </span>
    )
  }
}

export default Clock
