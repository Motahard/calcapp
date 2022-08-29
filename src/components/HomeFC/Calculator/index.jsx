import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Display from '@/components/HomeFC/Display'
import Keypad from '@/components/HomeFC/Keypad'
import History from '@/components/HomeFC/History'
import ControlPanel from '@/components/HomeFC/ControlPanel'
import {
  CalculatorContainer,
  KeypadDisplayContainer,
  HistoryControlContainer,
} from '@/components/HomeFC/Calculator/components'

const Calculator = ({ historyFC, setHistoryFC }) => {
  const [value, setValue] = useState('')
  const [result, setResult] = useState('0')
  const [operator, setOperator] = useState('')
  const [showHistory, setShowHistory] = useState(true)

  return (
    <CalculatorContainer>
      <KeypadDisplayContainer>
        <Display
          result={result}
          value={value}
          operator={operator}
        />
        <Keypad
          result={result}
          setResult={setResult}
          history={historyFC}
          setHistory={setHistoryFC}
          value={value}
          setValue={setValue}
          operator={operator}
          setOperator={setOperator}
        />
        <ControlPanel
          showHistory={showHistory}
          setShowHistory={setShowHistory}
        />
      </KeypadDisplayContainer>
      {showHistory ? (
        <HistoryControlContainer>
          <History
            history={historyFC}
            showHistory={showHistory}
          />
        </HistoryControlContainer>
      ) : null}
    </CalculatorContainer>
  )
}

Calculator.propTypes = {
  historyFC: PropTypes.array,
  setHistoryFC: PropTypes.func,
}

export default Calculator
