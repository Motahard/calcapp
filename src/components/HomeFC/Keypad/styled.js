import styled from "styled-components"

export const KeypadContainer = styled.div`
    padding: ${props => props.theme.spaces[3]}px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: ${props => props.theme.spaces[3]}px ${props => props.theme.spaces[4]}px;
    border-top: 2px solid ${props => props.theme.colors.secondaryBackColor};
    & > input:last-of-type {
        grid-column: 2 / -1;
    }
    @media (max-width: ${props => props.theme.sizeScreen.med}px) {
        & {
            gap: ${props => props.theme.spaces[3]}px ${props => props.theme.spaces[4]}px;
        }
    }
    @media (max-width: ${props => props.theme.sizeScreen.small}px) {
        & {
            gap: ${props => props.theme.spaces[3]}px ${props => props.theme.spaces[3]}px;
        }
    }
    @media (max-width: ${props => props.theme.sizeScreen.xs}px) {
        & {
            gap: ${props => props.theme.spaces[2]}px;
        }
    }
`

export const KeypadButton = styled.input`
    padding: ${props => props.theme.spaces[3]}px;
    align-text: center;
    font-size: ${props => props.theme.fontSizes[6]}px;
    border-radius: 10px;
    border: 3px solid ${props => props.theme.colors.secondaryBackColor};
    background-color: ${props => props.theme.colors.secondaryBackColor};
    color: ${props => props.theme.colors.secondaryFontColor};
    cursor: pointer;
`