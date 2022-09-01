import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'

import { clearHistoryLS } from '@/utils/storage.utils'

import {
  HistoryContainer,
  HistoryName,
  HistoryElement,
  HistoryClearNameContainer,
  HistoryClear,
} from '@/components/HomeFC/History/styled'

const History = ({ history, showHistory, setHistory }) => {
  const handleClear = () => {
    setHistory([])
    clearHistoryLS('fc')
  }

  const displayHistory = [...history].reverse()

  if (!showHistory) return null
  return (
    <HistoryContainer id="history">
      <HistoryClearNameContainer>
        <HistoryName>History</HistoryName>
        <HistoryClear onClick={handleClear}>X</HistoryClear>
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

History.propTypes = {
  history: PropTypes.array,
  showHistory: PropTypes.bool,
  setHistory: PropTypes.func,
}

export default History
