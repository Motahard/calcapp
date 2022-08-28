import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  KeypadContainer,
  KeypadButton,
} from '@/components/HomeFC/Keypad/components'

import { operationsAndNumbers } from '@/utils'
import { setHistoryLS } from '@/utils/storage.utils'
import { buttonHandler } from '@/utils/calculate.utils'

const Keypad = ({
  result,
  setResult,
  setHistory,
  history,
  value,
  setValue,
  operator,
  setOperator,
}) => {
  const [touched, setTouched] = useState(false)
  const [expression, setExpression] = useState(false)

  const handleClick = e => {
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
        setTouched(true)
        setExpression(true)
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
          setTouched(false)
        } else if (touched) {
          if (Number(result) === 0 && Number(value) === 0)
            return
          const res = handleEqual(operator)
          res && setValue(res)
          setOperator(val)
          setTouched(false)
        }
        break
      }
      case 'CE': {
        setResult('0')
        setValue('')
        setOperator('')
        setExpression(false)
        break
      }
      case 'C': {
        const res = buttonHandler(objState)
        setResult(res)
        break
      }
      case '=': {
        const res = handleEqual(val)
        res && setResult(res)
        setOperator('')
        setValue('')
        setTouched(false)
        break
      }
      default: {
        if (!touched) {
          setResult(val)
          setTouched(true)
          return
        }
        const res = buttonHandler(objState)
        setResult(res)
      }
    }
    // if (val === '+/-') {
    //   if (expression) return
    //   const res = buttonHandler(objState).toString()
    //   setResult(res)
    // } else if (val === '.') {
    //   buttonHandler(objState) && setResult(result + val)
    // } else if (val === '(') {
    //   setTouched(true)
    //   setExpression(true)
    //   setResult(val)
    // } else if (val === ')') {
    //   buttonHandler(objState) && setResult(result + val)
    // } else if (val.match(/[*+/-%/]/)) {
    //   if (expression) {
    //     const res = buttonHandler(objState)
    //     setResult(res)
    //   } else if (!operator) {
    //     setOperator(val)
    //     setValue(result)
    //     setTouched(false)
    //   } else {
    //     if (Number(result) === 0 && Number(value) === 0)
    //       return
    //     const res = handleEqual(operator)
    //     res && setValue(res)
    //     setOperator(val)
    //     setTouched(false)
    //   }
    // } else if (val === 'CE') {
    //   setResult('0')
    //   setValue('')
    //   setOperator('')
    //   setExpression(false)
    // } else if (val === 'C') {
    //   const res = buttonHandler(objState)
    //   setResult(res)
    // } else if (val === '=') {
    //   const res = handleEqual(val)
    //   res && setResult(res)
    //   setOperator('')
    //   setValue('')
    //   setTouched(false)
    // } else {
    //   if (!touched) {
    //     setResult(val)
    //     setTouched(true)
    //     return
    //   }
    //   const res = buttonHandler(objState)
    //   setResult(res)
    // }
  }

  const handleEqual = button => {
    if (expression) {
      setExpression(false)
    } else if (!operator) {
      return
    } else if (result === '0' && operator === '/') {
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
    const strHistory = value + operator + result + '=' + res

    setTouched(false)
    setValue('')
    setHistory([...history, strHistory])
    setHistoryLS(strHistory)
    return res
  }

  return (
    <KeypadContainer id="keypad">
      {operationsAndNumbers.map(item => (
        <KeypadButton
          key={item}
          id={item}
          value={item}
          type="button"
          onClick={handleClick}
        />
      ))}
    </KeypadContainer>
  )
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

export default Keypad
