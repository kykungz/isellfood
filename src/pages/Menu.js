import React from 'react'
import styled from 'styled-components'
import MenuItem from '../components/MenuItem'

const Container = styled.div`
  > * {
    margin: 1em;
  }
`
class Menu extends React.PureComponent {
  state = {
    menu: [
      {
        image:
          '/images/food1.jpg',
        title: 'ข้าวหมูกระเทียม',
        price: '45'
      },
      {
        image:
          '/images/food2.jpg',
        title: 'ข้าวผัดแกงเขียวหวาน',
        price: '50'
      }
    ],
  }
  componentDidMount = () => {
  }

  render() {
    return (
      <Container>
        <h3 className="heading">รายการอาหาร</h3>
        {this.state.menu.map(food => (
          <MenuItem {...food} />
        ))}
      </Container>
    )
  }
}

export default Menu
