import React from 'react'
import PropTypes from 'prop-types'

import {
  DisplayExpression,
  DisplayValue,
} from '@/components/HomeFC/Display/components'

const Display = ({ value, result, operator }) => {
  const displayValue = value.toString()
  return (
    <DisplayExpression>
      <DisplayValue>
        {displayValue !== '' && displayValue + operator}
      </DisplayValue>
      <p id="display">{result}</p>
    </DisplayExpression>
  )
}

Display.propTypes = {
  value: PropTypes.string,
  result: PropTypes.string,
  operator: PropTypes.string,
}

export default Display
