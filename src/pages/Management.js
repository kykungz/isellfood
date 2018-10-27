import React from 'react'
import Vendor from '../components/Vendor'
import ScgPackagingForm from '../components/ScgPackagingForm'
import styled from 'styled-components'
import icons from '../assets/icons'

const vendors = [
  {
    name: 'Food Panda',
    icon: icons.foodpanda,
    details: 'ในการเชื่อมต่อร้านค้า คุณต้องเสียค่าธรรมเนียม 30% ของราคาอาหารให้กับ Food Panda'
  },
  {
    name: 'Grab Food',
    icon: icons.grab,
  },
  {
    name: 'LINE Man',
    icon: icons.line,
  },
  {
    name: 'Skootar',
    icon: icons.skootar,
  },
  {
    name: 'Send Ranger',
    icon: icons.ranger,
  },
  {
    name: 'Lalamove',
    icon: icons.lalamove,
  },
]

const Grid = styled.div`
  margin: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em 0;
  max-width: 400px;
`

class Management extends React.PureComponent {
  state = {}

  render() {
    return (
      <div>
        <Grid>
          {vendors.map(vendor => (
            <Vendor {...vendor} />
          ))}
        </Grid>
        <br /><br />
        <ScgPackagingForm />
      </div>
    )
  }
}

export default Management
