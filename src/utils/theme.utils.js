import {
    lightTheme,
    darkTheme,
    coloredTheme,
  } from '@/theme/theme'

export const handleThemeColor = theme => {
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