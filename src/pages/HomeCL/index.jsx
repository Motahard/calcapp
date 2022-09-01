import React, { Component } from 'react'

import Calculator from '@/components/HomeCL/Calculator'

class HomePageCL extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Calculator {...this.props} />
  }
}

export default HomePageCL
