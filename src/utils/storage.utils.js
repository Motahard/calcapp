export const clearHistoryLS = type => {
    localStorage.setItem(type, JSON.stringify([]))
    localStorage.setItem(type, JSON.stringify([]))
}
export const getHistoryLS = type => {
    if(type === 'fc') {
        return localStorage.getItem('fc')
    } else if (type === 'cl') {
        return localStorage.getItem('cl')
    }
}
export const setHistoryLS = type => history => {
    const historyLS = getHistoryLS(type)
    if (!historyLS) {
        localStorage.setItem(type, JSON.stringify([history]))
    } else {
        const ls = JSON.parse(historyLS)
        localStorage.setItem(type, JSON.stringify([...ls, history]))
    }
}
export const setThemeLS = theme => {
    const toStore = JSON.stringify(theme)
    localStorage.setItem('theme', toStore)
}

export const getThemeLS = () => {
    const theme = localStorage.getItem('theme')
    return JSON.parse(theme)
}

export const setStateLS = (type, state) => {
    const toStore = JSON.stringify(state)
    localStorage.setItem(`${type}-state`, toStore)
}

export const getStateLS = type => {
    const state = localStorage.getItem(`${type}-state`)
    return JSON.parse(state)
}