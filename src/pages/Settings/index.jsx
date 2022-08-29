import React from 'react'
import PropTypes from 'prop-types'

import {
  clearHistoryLS,
  setThemeLS,
} from '@/utils/storage.utils'
import { themes } from '@/theme'

import {
  Container,
  SettingsTitle,
  SettingTheme,
  SelectTheme,
  OptionTheme,
  ButtonClearHistory,
} from '@/pages/Settings/components'

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
    clearHistoryLS()
  }

  render() {
    return (
      <Container>
        <SettingsTitle>Settings</SettingsTitle>
        <div>
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
        </div>
        <div>
          <ButtonClearHistory
            onClick={this.handleClearHistory}
          >
            Clear All History
          </ButtonClearHistory>
        </div>
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
