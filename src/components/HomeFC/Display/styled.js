import styled from 'styled-components'

export const DisplayExpression = styled.div`
    margin-right: ${props => props.theme.spaces[5]}px;
    margin-bottom: ${props => props.theme.spaces[3]}px;
    height: ${props => props.theme.sizeHeight.xs}px;
    display: flex;
    justify-content: flex-end;
    font-size: ${props => props.theme.fontSizes[7]}px;
`

export const DisplayValue = styled.p`
    font-size: ${props => props.theme.fontSizes[2]}px;
    color: ${props => props.theme.colors.primaryFontColor}
`

export const DisplayResult = styled.p``