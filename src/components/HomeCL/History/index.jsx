import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'

import {
  HistoryContainer,
  HistoryName,
  HistoryElement,
} from '@/components/HomeCL/History/components'

export default class History extends Component {
  render() {
    const { history, showHistory } = this.props
    const displayHistory = [...history].reverse()

    if (!showHistory) return null
    return (
      <HistoryContainer>
        <HistoryName>History</HistoryName>
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
}
