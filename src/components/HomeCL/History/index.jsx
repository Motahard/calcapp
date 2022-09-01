import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'

import { clearHistoryLS } from '@/utils/storage.utils'

import {
  HistoryContainer,
  HistoryName,
  HistoryElement,
  HistoryClear,
  HistoryClearNameContainer,
} from '@/components/HomeFC/History/styled'

export default class History extends Component {
  handleClear = () => {
    const { setHistory } = this.props
    setHistory([])
    clearHistoryLS('cl')
  }

  render() {
    const { history, showHistory } = this.props
    const displayHistory = [...history].reverse()

    if (!showHistory) return null
    return (
      <HistoryContainer>
        <HistoryClearNameContainer>
          <HistoryName>History</HistoryName>
          <HistoryClear onClick={this.handleClear}>
            X
          </HistoryClear>
        </HistoryClearNameContainer>
        {displayHistory.length > 0 &&
          displayHistory.map(item => (
            <HistoryElement key={uuid()}>
              {item}
            </HistoryElement>
          ))}
      </HistoryContainer>
    )
  }
}

History.propTypes = {
  history: PropTypes.array,
  showHistory: PropTypes.bool,
  setHistory: PropTypes.func,
}
