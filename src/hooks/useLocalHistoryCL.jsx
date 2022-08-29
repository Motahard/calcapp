import { useState, useEffect } from 'react'

import { getHistoryLS } from '@/utils/storage.utils'

export const useLocalHistoryCL = () => {
  const [historyCL, setHistoryCL] = useState([])

  useEffect(() => {
    const history = JSON.parse(getHistoryLS('cl'))
    if (history && history.length) setHistoryCL(history)
  }, [])

  return [historyCL, setHistoryCL]
}
