import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
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
