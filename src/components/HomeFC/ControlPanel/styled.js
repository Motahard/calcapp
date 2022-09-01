import styled from "styled-components"

export const ButtonArrow = styled.i`
    padding: ${props => props.theme.spaces[1]}px;
    display: inline-block;
    position: absolute;
    left: ${props => props.right ? '98%' : '100%'};
    top: 50%;
    cursor: pointer;
    border: solid ${props => props.theme.colors.primaryColor};
    border-width: 0 3px 3px 0;
    transform: ${props => props.right ? 'rotate(-45deg)' : 'rotate(135deg)'};
    -webkit-transform: ${props => props.right ? 'rotate(-45deg)' : 'rotate(135deg)'};
`