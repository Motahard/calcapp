import React from 'react'
import { useLocalThemeColor } from '@/hooks/useLocalThemeColor'
import { useLocalHistoryFC } from '@/hooks/useLocalHistoryFC'
import { useLocalHistoryCL } from '@/hooks/useLocalHistoryCL'

import { ThemeProvider } from 'styled-components'

import theme from '@/theme/theme'
import { handleThemeColor } from '@/utils/theme.utils'

import { ErrorBoundary } from '@/components/ErrorBoundary'
import Layout from '@/components/Layout'

export default () => {
  const [historyFC, setHistoryFC] = useLocalHistoryFC()
  const [historyCL, setHistoryCL] = useLocalHistoryCL()
  const [themeColor, setThemeColor] = useLocalThemeColor()
  const colors = handleThemeColor(themeColor)

  const themeWithColors = {
    colors,
    ...theme,
  }

  return (
    <ThemeProvider theme={themeWithColors}>
      <ErrorBoundary>
        <Layout
          historyCL={historyCL}
          setHistoryCL={setHistoryCL}
          historyFC={historyFC}
          setHistoryFC={setHistoryFC}
          themeColor={themeColor}
          setThemeColor={setThemeColor}
        />
      </ErrorBoundary>
    </ThemeProvider>
  )
}
