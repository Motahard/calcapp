import React from 'react'
import PropTypes from 'prop-types'

import { ButtonArrow } from '@/components/HomeFC/ControlPanel/components'

const ControlPanel = ({ showHistory, setShowHistory }) => {
  const handleClick = () => {
    setShowHistory(!showHistory)
  }

  return (
    <ButtonArrow
      right={showHistory}
      onClick={handleClick}
    />
  )
}

ControlPanel.propTypes = {
  showHistory: PropTypes.bool,
  setShowHistory: PropTypes.func,
}

export default ControlPanel
