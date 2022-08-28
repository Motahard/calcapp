import styled from "styled-components"

export const ButtonArrow = styled.i`
    position: absolute;
    left: ${props => props.right ? '98%' : '100%'};
    top: 50%;
    cursor: pointer;
    border: solid ${props => props.theme.colors.primaryColor};
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: ${props => props.theme.spaces[1]}px;
    transform: ${props => props.right ? 'rotate(-45deg)' : 'rotate(135deg)'};
    -webkit-transform: ${props => props.right ? 'rotate(-45deg)' : 'rotate(135deg)'};
`