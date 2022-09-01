import React from 'react'

import { routes } from '@/constants'

import {
  Navbar,
  NavTitle,
  NavList,
  NavItem,
} from '@/components/Navbar/styled'

export default () => {
  return (
    <Navbar>
      <NavTitle>Calculator App</NavTitle>
      <NavList>
        {routes.map(({ description, id, path }) => (
          <NavItem id={description} key={id} to={path}>
            {description}
          </NavItem>
        ))}
      </NavList>
    </Navbar>
  )
}
