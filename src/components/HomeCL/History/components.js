import styled from "styled-components"

export const HistoryContainer = styled.div`
    padding: ${props => props.theme.spaces[3]}px;
    padding-top: 0;
    border-left: 2px solid ${props => props.theme.colors.secondaryBackColor};
    width: ${props => props.theme.sizeWidth.xs}px;
`

export const HistoryName = styled.p`
    text-align: center;
    margin-bottom: ${props => props.theme.spaces[4]}px;
`

export const HistoryElement = styled.p`
    word-wrap: break-word;
    margin-bottom: ${props => props.theme.spaces[3]}px;
`