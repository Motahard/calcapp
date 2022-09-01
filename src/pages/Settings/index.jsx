import React from 'react'
import PropTypes from 'prop-types'

import {
  clearHistoryLS,
  setThemeLS,
} from '@/utils/storage.utils'
import { themes } from '@/theme/theme'

import {
  Container,
  SettingsTitle,
  SettingTheme,
  SelectTheme,
  OptionTheme,
  ButtonClearHistory,
  ButtonContainer,
} from '@/pages/Settings/styled'

class SettingsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      themeValue: this.props.themeValue,
    }
  }

  handleChange = event => {
    const { value } = event.target
    this.setState({ themeValue: value }, () => {
      setThemeLS(value)
      this.props.changeThemeValue(value)
    })
  }

  handleClearHistory = () => {
    this.props.setHistoryFC([])
    this.props.setHistoryCL([])
    clearHistoryLS('fc')
    clearHistoryLS('cl')
  }

  render() {
    return (
      <Container>
        <SettingsTitle>Settings</SettingsTitle>
        <ButtonContainer>
          <SettingTheme>Switch Theme</SettingTheme>
          <SelectTheme
            value={this.state.themeValue}
            onChange={this.handleChange}
          >
            {themes.map(item => (
              <OptionTheme key={item.id} value={item.val}>
                {item.description}
              </OptionTheme>
            ))}
          </SelectTheme>
        </ButtonContainer>
        <ButtonContainer>
          <ButtonClearHistory
            onClick={this.handleClearHistory}
          >
            Clear All History
          </ButtonClearHistory>
        </ButtonContainer>
      </Container>
    )
  }
}

SettingsPage.propTypes = {
  changeThemeValue: PropTypes.func,
  themeValue: PropTypes.string,
  setHistoryFC: PropTypes.func,
  setHistoryCL: PropTypes.func,
}

export default SettingsPage
