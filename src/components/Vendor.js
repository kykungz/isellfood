import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding-top: 100%;
  background: white;
`

class Vendor extends React.PureComponent {
  render() {
    return (
      <Container>
        <h1>abc</h1>
      </Container>
    )
  }
}

export default Vendor
