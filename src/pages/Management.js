import React from 'react'
import Vendor from '../components/Vendor'

const vendors = [
  {
    name: 'Food Panda',
    icon:
      'https://pbs.twimg.com/profile_images/925647521254379520/4UhQZh47_400x400.jpg',
  },
  {
    name: 'Food Panda',
    icon:
      'https://pbs.twimg.com/profile_images/925647521254379520/4UhQZh47_400x400.jpg',
  },
  {
    name: 'Food Panda',
    icon:
      'https://pbs.twimg.com/profile_images/925647521254379520/4UhQZh47_400x400.jpg',
  },
  {
    name: 'Food Panda',
    icon:
      'https://pbs.twimg.com/profile_images/925647521254379520/4UhQZh47_400x400.jpg',
  },
  {
    name: 'Food Panda',
    icon:
      'https://pbs.twimg.com/profile_images/925647521254379520/4UhQZh47_400x400.jpg',
  },
  {
    name: 'Food Panda',
    icon:
      'https://pbs.twimg.com/profile_images/925647521254379520/4UhQZh47_400x400.jpg',
  },
]

class Management extends React.PureComponent {
  render() {
    return (
      <div>
        {vendors.map(vendor => (
          <Vendor {...vendor} />
        ))}
      </div>
    )
  }
}

export default Management
