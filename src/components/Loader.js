import React from 'react'

class Loader extends React.PureComponent {
  render() {
    return (
      <div style={{
        position: 'absolute',
        top: '50%',
        left: "50%",
        marginTop: "-100px",
        marginLeft: "-75px"

      }}>
        <img src="/images/loader.svg" width="150" height="auto" alt="" />
      </div>
    )
  }
}

export default Loader
