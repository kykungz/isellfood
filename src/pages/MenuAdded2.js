import React from 'react'
import styled from 'styled-components'
import MenuItem from '../components/MenuItem'

const Container = styled.div`
  margin: 1em;
`
class MenuAdded2 extends React.PureComponent {
  state = {
    menu: [],
  }
  componentDidMount = () => {
    this.setState({
      menu: [
        {
          image:
            '/images/food1.jpg',
          title: 'ข้าวหมูกระเทียม',
          price: '45',
          fade: false
        },
        {
          image:
            '/images/food2.jpg',
          title: 'ข้าวผัดแกงเขียวหวาน',
          price: '50',
          fade: false
        },
        {
          image:
            '/images/no-img.png',
          title: 'ข้าวกระเพราหมู',
          price: '45'
        },
        {
          image: localStorage.getItem('foodImage'),
          title: 'ข้าวกระเพราไก่',
          price: '45'
        },
        {
          image:
            '/images/no-img.png',
          title: 'ข้าวผัดกะเพราปลาหมึก',
          price: '60'
        },
        {
          image:
            '/images/no-img.png',
          title: 'ข้าวไข่เจียว',
          price: '30'
        },
        {
          image:
            '/images/no-img.png',
          title: 'ผัดไทยกุ้งสด',
          price: '55'
        },
        // {
        //   image:
        //     '/images/no-img.png',
        //   title: 'ผัดซีอิ๊ว',
        //   price: '45'
        // },
        // {
        //   image:
        //     '/images/no-img.png',
        //   title: 'ผัดขี้เมาทะเล',
        //   price: '60'
        // },
        // {
        //   image:
        //     '/images/no-img.png',
        //   title: 'สปาเก็ตตี้ต้มยำ',
        //   price: '60'
        // }
      ]
    })
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

export default MenuAdded2
