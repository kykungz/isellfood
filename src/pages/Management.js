import React from 'react'
import Vendor from '../components/Vendor'
import ScgPackagingForm from '../components/ScgPackagingForm'
import styled from 'styled-components'
import icons from '../assets/icons'

const vendors = [
  {
    name: 'Food Panda',
    icon: icons.foodpanda,
    details:
      'ในการเชื่อมต่อร้านค้า คุณต้องเสียค่าธรรมเนียม 30% ของราคาอาหารให้กับ Food Panda',
  },
  {
    name: 'Grab Food',
    icon: icons.grab,
    details:
      'ในการเชื่อมต่อร้านค้า คุณต้องเสียค่าธรรมเนียม 30% ของราคาอาหารให้กับ Grab Food',
  },
  {
    name: 'LINE Man',
    icon: icons.line,
    details:
      'ในการเชื่อมต่อร้านค้า คุณต้องเสียค่าธรรมเนียม 30% ของราคาอาหารให้กับ LINE Man',
  },
  {
    name: 'Skootar',
    icon: icons.skootar,
    details:
      'ในการเชื่อมต่อร้านค้า คุณต้องเสียค่าธรรมเนียม 30% ของราคาอาหารให้กับ Skootar',
  },
  {
    name: 'SendRanger',
    icon: icons.ranger,
    details:
      'ในการเชื่อมต่อร้านค้า คุณต้องเสียค่าธรรมเนียม 30% ของราคาอาหารให้กับ SendRanger',
  },
  {
    name: 'Lalamove',
    icon: icons.lalamove,
    details:
      'ในการเชื่อมต่อร้านค้า คุณต้องเสียค่าธรรมเนียม 30% ของราคาอาหารให้กับ Lalamove',
  },
]

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1em 0;
  max-width: 400px;
`

class Management extends React.PureComponent {
  state = {}

  render() {
    return (
      <div className="p-4">
        <h4 className="mb-4 p-1 text-center">
          <b>🏡 ร้าน HUBBA ตามสั่ง</b>
        </h4>
        <h4 className="p-1">บริการจัดส่งอาหารออนไลน์</h4>
        <Grid>
          {vendors.map(vendor => (
            <Vendor {...vendor} />
          ))}
        </Grid>
        <br />
        <br />
        <ScgPackagingForm />
      </div>
    )
  }
}

export default Management
