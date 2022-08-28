import React from 'react'

import {
  Navbar,
  NavTitle,
  NavList,
  NavItem,
} from '@/components/Navbar/components'

import { routes } from '@/constants'

export default () => (
  <Navbar>
    <NavTitle>Calculator App</NavTitle>
    <NavList>
      {routes.map(item => (
        <NavItem
          id={item.description}
          key={item.id}
          to={item.path}
          exact
        >
          {item.description}
        </NavItem>
      ))}
    </NavList>
  </Navbar>
)
