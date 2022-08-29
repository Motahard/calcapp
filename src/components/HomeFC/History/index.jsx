import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'

import {
  HistoryContainer,
  HistoryName,
  HistoryElement,
} from '@/components/HomeFC/History/components'

const History = ({ history, showHistory }) => {
  const displayHistory = [...history].reverse()

  if (!showHistory) return null
  return (
    <HistoryContainer id="history">
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

History.propTypes = {
  history: PropTypes.array,
  showHistory: PropTypes.bool,
}

export default History
