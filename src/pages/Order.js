import React from 'react'
import styled from 'styled-components'
import OrderItem from '../components/OrderItem'
import icons from '../assets/icons'

const Container = styled.div`
  > * {
    margin: 1em;
  }
`

let count = 1

const foodMock = [
  {
    image:
      'http://4.bp.blogspot.com/-1NumiWwNeFk/TfowGXrKsXI/AAAAAAAAEKE/zwC8KNhfhuo/s1600/pm91n.jpg',
    title: 'กระเพราไก่ไข่ดาว',
  },
  {
    image:
      'https://img.kaidee.com/prd/20170112/127999443/b/1d87601d-0be3-4c5b-93cf-992604c8b2c9.jpg',
    title: 'ข้าวมันไก่',
  },
  {
    image:
      'http://food.mthai.com/app/uploads/2016/12/13886251_1091978310882315_6978743676846625302_n.jpg',
    title: 'ยำมาม่าทรงเครื่อง',
  },
  {
    image: 'http://f.ptcdn.info/514/021/000/1406027652-D127331551-o.jpg',
    title: 'คะน้าหมูกรอบ',
  },
]

const generateOrder = () => ({
  ...foodMock[parseInt(Math.random() * foodMock.length)],
  icon: Object.values(icons)[
    parseInt(Math.random() * Object.keys(icons).length)
  ],
  quantity: parseInt(Math.random() * 9) + 1,
})

class Order extends React.PureComponent {
  state = {
    orders: [generateOrder()],
  }
  componentDidMount = () => {
    setInterval(() => {
      if (Math.random() > 0.5) {
        this.addOrder()
      }
    }, 2000)
  }

  addOrder = () => {
    this.setState({
      orders: [...this.state.orders, generateOrder()],
    })
  }
  render() {
    return (
      <Container>
        {this.state.orders.map(order => (
          <OrderItem {...order} />
        ))}
      </Container>
    )
  }
}

export default Order
