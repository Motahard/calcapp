import React, { Component } from 'react'

import PropTypes from 'prop-types'

import Display from '@/components/HomeCL/Display'
import Keypad from '@/components/HomeCL/Keypad'
import History from '@/components/HomeCL/History'
import ControlPanel from '@/components/HomeCL/ControlPanel'
import {
  CalculatorContainer,
  KeypadDisplayContainer,
  HistoryControlContainer,
} from '@/components/HomeFC/Calculator/styled'

export default class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      result: '0',
      operator: '',
      showHistory: true,
    }
  }

  setResult = value => {
    this.setState({
      result: value,
    })
  }

  setValue = value => {
    this.setState({
      value: value,
    })
  }

  setOperator = value => {
    this.setState({
      operator: value,
    })
  }

  setShowHistory = value => {
    this.setState({
      showHistory: value,
    })
  }

  render() {
    const { historyCL, setHistoryCL } = this.props
    const {
      result,
      value,
      operator,
      showHistory,
    } = this.state
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
            setResult={this.setResult}
            history={historyCL}
            setHistory={setHistoryCL}
            value={value}
            setValue={this.setValue}
            operator={operator}
            setOperator={this.setOperator}
          />
          <ControlPanel
            showHistory={showHistory}
            setShowHistory={this.setShowHistory}
          />
        </KeypadDisplayContainer>
        {showHistory && (
          <HistoryControlContainer>
            <History
              history={historyCL}
              setHistory={setHistoryCL}
              showHistory={showHistory}
            />
          </HistoryControlContainer>
        )}
      </CalculatorContainer>
    )
  }
}

Calculator.propTypes = {
  historyCL: PropTypes.array,
  setHistoryCL: PropTypes.func,
}
