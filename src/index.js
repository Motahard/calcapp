import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from '@/globalStyles'

import Application from '@/components/App'

ReactDOM.render(
  <BrowserRouter>
    <Application />
    <GlobalStyles />
  </BrowserRouter>,
  document.getElementById('root'),
)
