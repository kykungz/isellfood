import React from 'react'
import { Route } from 'react-router-dom'

import Stats from '../pages/Stats'
import MenuCamera from '../pages/MenuCamera'
import MenuAdded from '../pages/MenuAdded'
import MenuAdded2 from '../pages/MenuAdded2'
import FoodCamera from '../pages/FoodCamera'
import Management from '../pages/Management'
import Order from '../pages/Order'
import Menu from '../pages/Menu'

const routes = [
  {
    path: '/',
    exact: true,
    component: Menu,
  },
  {
    path: '/menu',
    exact: true,
    component: Menu
  },
  {
    path: '/menu-camera',
    exact: true,
    component: MenuCamera
  },
  {
    path: '/menu-added',
    exact: true,
    component: MenuAdded
  },
  {
    path: '/menu-added2',
    exact: true,
    component: MenuAdded2
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
  {
    path: '/stats',
    exact: true,
    component: Stats
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
