import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  DisplayExpression,
  DisplayValue,
  DisplayResult,
} from '@/components/HomeFC/Display/styled'

export default class Display extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { value, operator, result } = this.props
    const displayValue = value.toString()
    return (
      <DisplayExpression>
        <DisplayValue>
          {displayValue !== '' && displayValue + operator}
        </DisplayValue>
        <DisplayResult>{result}</DisplayResult>
      </DisplayExpression>
    )
  }
}

Display.propTypes = {
  value: PropTypes.string,
  result: PropTypes.string,
  operator: PropTypes.string,
}
