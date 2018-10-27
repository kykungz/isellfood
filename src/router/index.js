import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home'
import MenuCamera from '../pages/MenuCamera'
import MenuCameraCaptured from '../pages/MenuCameraCaptured'
import FoodCamera from '../pages/FoodCamera'
import Management from '../pages/Management'

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
  },
  {
    path: '/food-camera',
    exact: true,
    component: FoodCamera
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
