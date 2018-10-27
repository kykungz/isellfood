import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home'
import MenuCamera from '../pages/MenuCamera'
import MenuCameraCaptured from '../pages/MenuCameraCaptured'
import FoodCamera from '../pages/FoodCamera'
import Management from '../pages/Management'
import Order from '../pages/Order'

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
