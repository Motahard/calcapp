import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ButtonArrow } from '@/components/HomeCL/ControlPanel/components'

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
      <div>
        <ButtonArrow
          right={showHistory}
          onClick={this.handleClick}
        />
      </div>
    )
  }
}

ControlPanel.propTypes = {
  showHistory: PropTypes.bool,
  setShowHistory: PropTypes.func,
}
