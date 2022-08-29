import styled from "styled-components"

export const CalculatorContainer = styled.div`
    max-width: ${props => props.theme.sizeWidth.large}px;
    margin: auto;
    display: flex;
    padding: ${props => props.theme.spaces[3]}px;
    height: ${props => props.theme.sizeHeight.med}px;
    background-color: ${props => props.theme.colors.primaryBackColor};
    color: ${props => props.theme.colors.primaryFontColor};
    margin-top: ${props => props.theme.spaces[4]}px;
    border-radius: 10px;
`

export const KeypadDisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${props => props.theme.spaces[3]}px;
    position: relative;
`

export const HistoryControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-x: hidden;
`