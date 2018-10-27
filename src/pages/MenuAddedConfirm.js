import React from 'react'
import styled from 'styled-components'
import MenuItem from '../components/MenuItem'
import { Link } from 'react-router-dom'

const Container = styled.div`
  margin: 1em;
`
class MenuAddedConfirm extends React.PureComponent {
  state = {
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
      }
    ],
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        addedMenu: [
          {
            image: null,
            title: 'ข้าวกระเพราหมู',
            price: '45'
          },
          {
            image: null,
            title: 'ข้าวกระเพราไก่',
            price: '45'
          },
          {
            image: null,
            title: 'ข้าวผัดกะเพราปลาหมึก',
            price: '60'
          },
          {
            image: null,
            title: 'ข้าวไข่เจียว',
            price: '30'
          },
          {
            image: null,
            title: 'ผัดไทยกุ้งสด',
            price: '55'
          },
          {
            image: null,
            title: 'ผัดซีอิ๊ว',
            price: '45'
          },
          {
            image: null,
            title: 'ผัดขี้เมาทะเล',
            price: '60'
          },
          {
            image: null,
            title: 'สปาเก็ตตี้ต้มยำ',
            price: '60'
          }
        ]
      })
    }, 500)
  }

  render() {
    return (
      <Container>
        <h3 className="heading">ยืนยันรายการอาหาร</h3>
        
        {this.state.addedMenu && this.state.addedMenu.map(food => (
          <MenuItem {...food} verify={true} />
        ))}
        <div style={{
          textAlign: 'center'
        }}>
          <Link to="/menu-added" className="button delay-in">ยืนยันเมนูถูกต้อง</Link>
        </div>
      </Container>
    )
  }
}

export default MenuAddedConfirm
