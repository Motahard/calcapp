import React from 'react'
import PropTypes from 'prop-types'

import {
  DisplayExpression,
  DisplayValue,
  DisplayResult,
} from '@/components/HomeFC/Display/styled'

const Display = ({ value, result, operator }) => {
  const displayValue = value.toString()
  return (
    <DisplayExpression>
      <DisplayValue>
        {displayValue !== '' && displayValue + operator}
      </DisplayValue>
      <DisplayResult id="display">{result}</DisplayResult>
    </DisplayExpression>
  )
}

Display.propTypes = {
  value: PropTypes.string,
  result: PropTypes.string,
  operator: PropTypes.string,
}

export default Display
