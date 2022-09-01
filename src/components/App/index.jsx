import React, { lazy, Suspense } from 'react'
import { useLocalTheme } from '@/hooks/useLocalTheme'
import { useLocalHistoryFC } from '@/hooks/useLocalHistoryFC'
import { useLocalHistoryCL } from '@/hooks/useLocalHistoryCL'
import { CalculatorFuncContext } from '@/context/CalculatorFunc.context'
import { CalculatorClassContext } from '@/context/CalculatorClass.context'

import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import {
  HOME_PAGE_ROUTE,
  HOMECL_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'
import themeStyled from '@/theme/theme'
import { handleTheme } from '@/utils/theme.utils'

import Loader from '@/components/Loader'
import Navigation from '@/components/Navbar'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { AppContainer } from '@/components/App/styled'

const HomePageFC = lazy(() => import('@/pages/HomeFC'))
const SettingsPage = lazy(() => import('@/pages/Settings'))
const HomePageCL = lazy(() => import('@/pages/HomeCL'))

export default () => {
  const [historyFC, setHistoryFC] = useLocalHistoryFC()
  const [historyCL, setHistoryCL] = useLocalHistoryCL()
  const [theme, setTheme] = useLocalTheme()
  const themeColor = handleTheme(theme)

  const themeObj = {
    colors: themeColor,
    ...themeStyled,
  }
  return (
    <ThemeProvider theme={themeObj}>
      <ErrorBoundary>
        <Navigation />
        <AppContainer>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path={HOME_PAGE_ROUTE}
                element={
                  <CalculatorFuncContext.Provider value="hi">
                    <HomePageFC
                      historyFC={historyFC}
                      setHistoryFC={setHistoryFC}
                    />
                  </CalculatorFuncContext.Provider>
                }
              />
              <Route
                path={HOMECL_PAGE_ROUTE}
                element={
                  <CalculatorClassContext.Provider value="bye">
                    <HomePageCL
                      historyCL={historyCL}
                      setHistoryCL={setHistoryCL}
                    />
                  </CalculatorClassContext.Provider>
                }
              />
              <Route
                path={SETTINGS_PAGE_ROUTE}
                element={
                  <SettingsPage
                    changeThemeValue={setTheme}
                    themeValue={theme}
                    setHistoryFC={setHistoryFC}
                    setHistoryCL={setHistoryCL}
                  />
                }
              />
            </Routes>
          </Suspense>
        </AppContainer>
      </ErrorBoundary>
    </ThemeProvider>
  )
}
