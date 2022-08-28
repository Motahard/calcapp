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

const Calculator = ({ history, setHistory }) => {
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
          history={history}
          setHistory={setHistory}
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
            history={history}
            showHistory={showHistory}
          />
        </HistoryControlContainer>
      ) : null}
    </CalculatorContainer>
  )
}

Calculator.propTypes = {
  history: PropTypes.array,
  setHistory: PropTypes.func,
}

export default Calculator
