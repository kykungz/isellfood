import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home'
import Management from '../pages/Management'

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
