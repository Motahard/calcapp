import { useState, useEffect } from 'react'

import { getThemeLS } from '@/utils/storage.utils'

export const useLocalThemeColor = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const theme = getThemeLS()
    if (theme) setTheme(theme)
  }, [])

  return [theme, setTheme]
}
