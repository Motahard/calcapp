export const clearHistoryLS = () => {
    localStorage.setItem('history', JSON.stringify([]))
}
export const getHistoryLS = () => {
    const history = localStorage.getItem('history')
    return history
}
export const setThemeLS = theme => {
    const toStore = JSON.stringify(theme)
    localStorage.setItem('theme', toStore)
}

export const getThemeLS = () => {
    const theme = localStorage.getItem('theme')
    return JSON.parse(theme)
}

export const setHistoryLS = history => {
    const historyLS = getHistoryLS()
    if (!historyLS) {
        localStorage.setItem('history', JSON.stringify([history]))
    } else {
        const ls = JSON.parse(historyLS)
        localStorage.setItem('history', JSON.stringify([...ls, history]))
    }
}