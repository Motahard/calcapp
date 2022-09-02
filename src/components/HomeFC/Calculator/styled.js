import styled from "styled-components"

export const CalculatorContainer = styled.div`
    margin: auto;
    padding: ${props => props.theme.spaces[3]}px;
    max-width: ${props => props.theme.sizeWidth.large}px;
    height: ${props => props.theme.sizeHeight.med}px;
    display: flex;
    background-color: ${props => props.theme.colors.primaryBackColor};
    color: ${props => props.theme.colors.primaryFontColor};
    border-radius: 10px;
`

export const KeypadDisplayContainer = styled.div`
    width: 100%;
    padding: ${props => props.theme.spaces[3]}px;
    position: relative;
    display: flex;
    flex-direction: column;
`

export const HistoryControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-x: hidden;
`