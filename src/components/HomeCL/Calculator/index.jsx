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
} from '@/components/HomeCL/Calculator/components'

export default class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      result: '0',
      operator: '',
      showHistory: true,
    }
    this.setResult = this.handleResult.bind(this)
    this.setValue = this.handleValue.bind(this)
    this.setOperator = this.handleOperator.bind(this)
    this.setShowHistory = this.handleShowHistory.bind(this)
  }

  handleResult = value => {
    this.setState({
      result: value,
    })
  }

  handleValue = value => {
    this.setState({
      value: value,
    })
  }

  handleOperator = value => {
    this.setState({
      operator: value,
    })
  }

  handleShowHistory = value => {
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
        {showHistory ? (
          <HistoryControlContainer>
            <History
              history={historyCL}
              showHistory={showHistory}
            />
          </HistoryControlContainer>
        ) : null}
      </CalculatorContainer>
    )
  }
}

Calculator.propTypes = {
  historyCL: PropTypes.array,
  setHistoryCL: PropTypes.func,
}
