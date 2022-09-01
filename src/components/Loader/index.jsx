import React from 'react'

import { Loader } from '@/components/Loader/styled'

import { LOADER_SIZE } from '@/constants/index'

export default () => {
  return (
    <Loader
      type="Bars"
      height={LOADER_SIZE}
      width={LOADER_SIZE}
    />
  )
}
