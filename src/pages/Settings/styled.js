import styled from 'styled-components'

export const Container = styled.div`
    margin: auto;
    padding: ${props => props.theme.spaces[5]}px;
    margin-top: ${props => props.theme.spaces[5]}px;
    max-width: ${props => props.theme.sizeScreen.large}px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.primaryBackColor};
    color:  ${props => props.theme.colors.primaryFontColor};
`

export const SettingsTitle = styled.h1`
    margin: ${props => props.theme.spaces[6]}px ${props => props.theme.spaces[9]}px;
    font-weight: normal;
    font-size: ${props => props.theme.fontSizes[7]}px;
`

export const SettingTheme = styled.legend`
    margin: ${props => props.theme.spaces[2]}px; 0;
`
export const SelectTheme = styled.select`
    padding: ${props => props.theme.spaces[3]}px;
    margin-bottom: ${props => props.theme.spaces[3]}px;
    width: ${props => props.theme.sizeWidth.small}px;
    font-size: ${props => props.theme.fontSizes[3]}px;
    background-color: ${props => props.theme.colors.secondaryBackColor};
    color: ${props => props.theme.colors.secondaryFontColor};
    border-radius: 5px;
    border: 2px solid black;
`

export const OptionTheme = styled.option``

export const Button = styled.button`
    padding: ${props => props.theme.spaces[3]}px;
    width: ${props => props.theme.sizeWidth.small}px;
    font-size: ${props => props.theme.fontSizes[3]}px;
    cursor: pointer;
    background-color: ${props => props.theme.colors.secondaryBackColor};
    color: ${props => props.theme.colors.secondaryFontColor};
    border-radius: 5px;
    border: 2px solid black;
`

export const ButtonClearHistory = styled(Button)``
export const ButtonContainer = styled.div``