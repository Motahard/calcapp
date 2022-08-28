import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: ${props => props.theme.spaces[4]}px ${props => props.theme.spaces[3]}px;
    background: ${props => props.theme.colors.primaryBackColor};
    color: ${props => props.theme.colors.primaryFontColor};
`

export const NavTitle = styled.p`
    font-size: ${props => props.theme.fontSizes[4]}px;
`

export const NavList = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${props => props.theme.spaces[3]}px;
`

export const NavItem = styled(NavLink)`
    text-decoration: none;
    color: ${props => props.theme.inactiveLink};
    font-size: ${props => props.theme.fontSizes[4]}px;
    &.active {
        border-bottom: 1px solid ${props => props.theme.colors.primaryFontColor};
        color: ${props => props.theme.colors.primaryFontColor};
    }
`