import {
    lightTheme,
    darkTheme,
    coloredTheme,
  } from '@/theme'

export const handleTheme = theme => {
    switch (theme) {
      case 'light':
        return lightTheme
      case 'dark':
        return darkTheme
      case 'colored':
        return coloredTheme
      default:
        return lightTheme
    }
  }