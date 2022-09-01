import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ButtonArrow } from '@/components/HomeFC/ControlPanel/styled'

export default class ControlPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleClick = () => {
    const { setShowHistory, showHistory } = this.props
    setShowHistory(!showHistory)
  }

  render() {
    const { showHistory } = this.props
    return (
      <ButtonArrow
        right={showHistory}
        onClick={this.handleClick}
      />
    )
  }
}

ControlPanel.propTypes = {
  showHistory: PropTypes.bool,
  setShowHistory: PropTypes.func,
}
