import styled from "styled-components"

export const HistoryContainer = styled.div`
    padding: 0px ${props => props.theme.spaces[3]}px;
    width: ${props => props.theme.sizeWidth.xs}px;
    border-left: 2px solid ${props => props.theme.colors.secondaryBackColor};
`

export const HistoryName = styled.p`
    margin-bottom: ${props => props.theme.spaces[4]}px;
    text-align: center;
`

export const HistoryElement = styled.p`
    margin-bottom: ${props => props.theme.spaces[3]}px;
    word-wrap: break-word;
`

export const HistoryClear = styled.p`
    cursor: pointer;
    color: ${props => props.theme.colors.secondaryBackColor};
`

export const HistoryClearNameContainer = styled.div`
    padding: 0px ${props => props.theme.spaces[4]}px;
    display: flex;
    justify-content: space-between;
`