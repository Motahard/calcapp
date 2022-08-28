import { useState, useEffect } from 'react'

import { getHistoryLS } from '@/utils/storage.utils'

export const useLocalHistoryFC = () => {
  const [historyFC, setHistoryFC] = useState([])

  useEffect(() => {
    const history = JSON.parse(getHistoryLS())
    if (history && history.length) setHistoryFC(history)
  }, [])

  return [historyFC, setHistoryFC]
}
