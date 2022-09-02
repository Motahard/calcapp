import React, { lazy, Suspense } from 'react'

import { Routes, Route } from 'react-router-dom'
import {
  HOME_PAGE_ROUTE,
  HOMECL_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'

import {
  PageContent,
  Container,
} from '@/components/Layout/styled'
import Loader from '@/components/Loader'
import Header from '@/components/Header'

const HomePageFC = lazy(() => import('@/pages/HomeFC'))
const SettingsPage = lazy(() => import('@/pages/Settings'))
const HomePageCL = lazy(() => import('@/pages/HomeCL'))

const Layout = ({
  historyFC,
  historyCL,
  themeColor,
  setHistoryFC,
  setHistoryCL,
  setThemeColor,
}) => {
  return (
    <Container>
      <Header />
      <PageContent>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path={HOME_PAGE_ROUTE}
              element={
                <HomePageFC
                  history={historyFC}
                  setHistory={setHistoryFC}
                />
              }
            />
            <Route
              path={HOMECL_PAGE_ROUTE}
              element={
                <HomePageCL
                  history={historyCL}
                  setHistory={setHistoryCL}
                />
              }
            />
            <Route
              path={SETTINGS_PAGE_ROUTE}
              element={
                <SettingsPage
                  setThemeColor={setThemeColor}
                  themeColor={themeColor}
                  setHistoryFC={setHistoryFC}
                  setHistoryCL={setHistoryCL}
                />
              }
            />
          </Routes>
        </Suspense>
      </PageContent>
    </Container>
  )
}

export default Layout
