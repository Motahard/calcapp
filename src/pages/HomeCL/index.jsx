import React from 'react'

import Calculator from '@/components/HomeCL/Calculator'

class HomePageCL extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <Calculator {...this.props} />
  }
}

export default HomePageCL
