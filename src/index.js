import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

import Application from '@/components/App'

import GlobalStyles from '@/globalStyles'

ReactDOM.render(
  <BrowserRouter>
    <Application />
    <GlobalStyles />
  </BrowserRouter>,
  document.getElementById('root'),
)
