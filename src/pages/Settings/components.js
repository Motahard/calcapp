import styled from 'styled-components'

export const Container = styled.div`
    max-width: ${props => props.theme.sizeScreen.large}px;
    margin: auto;
    padding: ${props => props.theme.spaces[5]}px;
    margin-top: ${props => props.theme.spaces[5]}px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.primaryBackColor};
    color:  ${props => props.theme.colors.primaryFontColor};
`

export const SettingsTitle = styled.h1`
    font-weight: normal;
    font-size: ${props => props.theme.fontSizes[7]}px;
    margin: ${props => props.theme.spaces[6]}px ${props => props.theme.spaces[9]}px;
`

export const SettingTheme = styled.legend`
    margin: ${props => props.theme.spaces[2]}px; 0;
`
export const SelectTheme = styled.select`
    padding: ${props => props.theme.spaces[3]}px;
    border-radius: 5px;
    width: ${props => props.theme.sizeWidth.small}px;
    font-size: ${props => props.theme.fontSizes[3]}px;
    margin-bottom: ${props => props.theme.spaces[3]}px;
    background: ${props => props.theme.colors.secondaryBackColor};
    color: ${props => props.theme.colors.secondaryFontColor};
    border: 2px solid black;
`

export const OptionTheme = styled.option``

export const Button = styled.button`
    padding: ${props => props.theme.spaces[3]}px;
    border-radius: 5px;
    width: ${props => props.theme.sizeWidth.small}px;
    font-size: ${props => props.theme.fontSizes[3]}px;
    cursor: pointer;
    background: ${props => props.theme.colors.secondaryBackColor};
    color: ${props => props.theme.colors.secondaryFontColor};
    border: 2px solid black;
`

export const ButtonClearHistory = styled(Button)``