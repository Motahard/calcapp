import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { operationsAndNumbers } from '@/utils'
import { setHistoryLS } from '@/utils/storage.utils'
import { buttonHandler } from '@/utils/calculate.utils'

import {
  KeypadContainer,
  KeypadButton,
} from '@/components/HomeFC/Keypad/styled'

const setHistoryLSBounded = setHistoryLS('cl')

export default class Keypad extends Component {
  constructor(props) {
    super(props)
    this.state = {
      touched: false,
      expression: false,
    }
  }

  handleClick = e => {
    const {
      result,
      setResult,
      value,
      setValue,
      operator,
      setOperator,
    } = this.props
    const { expression, touched } = this.state

    const val = e.target.value

    const objState = {
      val,
      result,
      value,
      expression,
      operator,
    }

    switch (val) {
      case '+/-': {
        if (expression) return
        const res = buttonHandler(objState).toString()
        setResult(res)
        break
      }
      case '.': {
        buttonHandler(objState) && setResult(result + val)
        break
      }
      case '(': {
        this.setState({
          touched: true,
          expression: true,
        })
        setResult(val)
        break
      }
      case ')': {
        buttonHandler(objState) && setResult(result + val)
        break
      }
      case '+':
      case '-':
      case '/':
      case '*':
      case '%': {
        if (expression) {
          const res = buttonHandler(objState)
          setResult(res)
        } else if (!operator) {
          setOperator(val)
          setValue(result)
          this.setState({ touched: false })
        } else if (touched) {
          if (Number(result) === 0 && Number(value) === 0)
            return
          const res = this.handleEqual(operator)
          if (res) {
            setValue(res)
            setResult(res)
          }
          setOperator(val)
          this.setState({ touched: false })
        }
        break
      }
      case 'CE': {
        setResult('0')
        setValue('')
        setOperator('')
        this.setState({ expression: false })
        break
      }
      case 'C': {
        const res = buttonHandler(objState)
        setResult(res)
        res === '0' && this.setState({ expression: false })
        break
      }
      case '=': {
        const res = this.handleEqual(val)
        res && setResult(res)
        setOperator('')
        setValue('')
        this.setState({ touched: false })
        break
      }
      default: {
        if (!touched) {
          setResult(val)
          this.setState({ touched: true })
          return
        }
        const res = buttonHandler(objState)
        setResult(res)
      }
    }
  }

  handleEqual = button => {
    const {
      result,
      operator,
      value,
      history,
      setValue,
      setResult,
      setHistory,
    } = this.props
    const { expression } = this.state

    if (expression) {
      this.setState({ expression: false })
    } else if (!operator) {
      return
    } else if (
      result === '0' &&
      (operator === '/' || operator === '%')
    ) {
      setResult('0')
      alert('Cannot divide by zero')
      return
    }

    const res = buttonHandler({
      val: button,
      result,
      value,
      expression,
      operator,
    })

    if (!res) return

    const strHistory = `${value} ${operator} ${result} = ${res}`
    this.setState({ touched: false })
    setValue('')
    setHistory([...history, strHistory])
    setHistoryLSBounded(strHistory)
    return res
  }

  render() {
    return (
      <KeypadContainer>
        {operationsAndNumbers.map(item => (
          <KeypadButton
            key={item}
            id={item}
            value={item}
            type="button"
            onClick={this.handleClick}
          />
        ))}
      </KeypadContainer>
    )
  }
}

Keypad.propTypes = {
  result: PropTypes.string,
  setResult: PropTypes.func,
  history: PropTypes.array,
  setHistory: PropTypes.func,
  value: PropTypes.string,
  setValue: PropTypes.func,
  operator: PropTypes.string,
  setOperator: PropTypes.func,
}
