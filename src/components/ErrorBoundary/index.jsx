import React, { Component } from 'react'

import { ErrorText } from '@/components/ErrorBoundary/styled'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  }

  render() {
    return this.state.hasError ? (
      <ErrorText>Something went wrong</ErrorText>
    ) : (
      this.props.children
    )
  }
}
