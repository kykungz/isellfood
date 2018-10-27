import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home'
import MenuCamera from '../pages/MenuCamera'
import MenuCameraCaptured from '../pages/MenuCameraCaptured'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/menu-camera',
    exact: true,
    component: MenuCamera
  },
  {
    path: '/menu-camera-captured',
    exact: true,
    component: MenuCameraCaptured
  }
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
