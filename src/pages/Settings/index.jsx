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
      themeValue: this.props.themeColor,
    }
  }

  handleChange = event => {
    const { value } = event.target
    this.setState({ themeValue: value }, () => {
      setThemeLS(value)
      this.props.setThemeColor(value)
    })
  }

  handleClearHistory = () => {
    const { setHistoryFC, setHistoryCL } = this.props
    setHistoryFC([])
    setHistoryCL([])
    clearHistoryLS('fc')
    clearHistoryLS('cl')
  }

  render() {
    const { themeValue } = this.state
    return (
      <Container>
        <SettingsTitle>Settings</SettingsTitle>
        <ButtonContainer>
          <SettingTheme>Switch Theme</SettingTheme>
          <SelectTheme
            value={themeValue}
            onChange={this.handleChange}
          >
            {themes.map(({ id, val, description }) => (
              <OptionTheme key={id} value={val}>
                {description}
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
  setThemeColor: PropTypes.func,
  themeColor: PropTypes.string,
  setHistoryFC: PropTypes.func,
  setHistoryCL: PropTypes.func,
}

export default SettingsPage
