import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home'
import Management from '../pages/Management'
import Order from '../pages/Order'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/manage',
    exact: true,
    component: Management,
  },
  {
    path: '/order',
    exact: true,
    component: Order,
  },
]

export default () => (
  <>
    <Route
      component={() => {
        window.scrollTo(0, 0)
        return null
      }}
    />
    {routes.map(route => (
      <Route key={route.path} {...route} />
    ))}
  </>
)
