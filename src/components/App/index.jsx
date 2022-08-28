import React, { lazy, Suspense } from 'react'
import { useLocalTheme } from '@/hooks/useLocalTheme'
import { useLocalHistoryFC } from '@/hooks/useLocalHistoryFC'

import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {
  HOME_PAGE_ROUTE,
  HOMECL_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'
import themeStyled from '@/theme'

import { handleTheme } from '@/utils/theme.utils'

import Loader from '@/components/Loader'
import Navigation from '@/components/Navbar'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { AppContainer } from '@/components/App/components'
import HomePageCL from '@/pages/HomeCL'

const HomePageFC = lazy(() => import('@/pages/HomeFC'))
const SettingsPage = lazy(() => import('@/pages/Settings'))

export default () => {
  const [historyFC, setHistoryFC] = useLocalHistoryFC()
  const [theme, setTheme] = useLocalTheme()
  const themeColor = handleTheme(theme)

  return (
    <ThemeProvider
      theme={{ colors: themeColor, ...themeStyled }}
    >
      <ErrorBoundary>
        <Navigation />
        <AppContainer>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path={HOME_PAGE_ROUTE}>
                <HomePageFC
                  history={historyFC}
                  setHistory={setHistoryFC}
                />
              </Route>
              <Route exact path={HOMECL_PAGE_ROUTE}>
                <HomePageCL
                  history={historyFC}
                  setHistory={setHistoryFC}
                />
              </Route>
              <Route path={SETTINGS_PAGE_ROUTE}>
                <SettingsPage
                  changeThemeValue={setTheme}
                  themeValue={theme}
                  setHistoryFC={setHistoryFC}
                />
              </Route>
            </Switch>
          </Suspense>
        </AppContainer>
      </ErrorBoundary>
    </ThemeProvider>
  )
}
