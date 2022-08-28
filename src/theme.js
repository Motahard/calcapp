const lightPrimaryFontColor = '#000000'
const lightPrimaryBackColor = '#f4f4f4'
const lightSecondaryFontColor = '#ffffff'
const lightSecondaryBackColor = '#333333'
const darkPrimaryFontColor = '#ffffff'
const darkPrimaryBackColor = '#333333'
const darkSecondaryFontColor = '#000000'
const darkSecondaryBackColor = '#f4f4f4'
const coloredPrimaryFontColor = '#ffffff'
const coloredPrimaryBackColor = '#c06c84'
const coloredSecondaryFontColor = '#ffffff'
const coloredSecondaryBackColor = '#6c5b7b'

const fontFamily = 'sans-serif'
const inactiveLink = ' #b9b6b6'

const sizeWidth = {
  xs: 200,
  small: 300,
  med: 992,
  large: 1300,
}
const sizeHeight = {
  xs: 60,
  small: 768,
  med: 600,
  large: 1300,
}
const sizeScreen = {
  xs: 500,
  small: 800,
  med: 1000,
  large: 1300,
}

export const lightTheme = {
  primaryFontColor: lightPrimaryFontColor,
  primaryBackColor: lightPrimaryBackColor,
  secondaryFontColor: lightSecondaryFontColor,
  secondaryBackColor: lightSecondaryBackColor,
}
export const darkTheme = {
  primaryFontColor: darkPrimaryFontColor,
  primaryBackColor: darkPrimaryBackColor,
  secondaryFontColor: darkSecondaryFontColor,
  secondaryBackColor: darkSecondaryBackColor,
}
export const coloredTheme = {
  primaryFontColor: coloredPrimaryFontColor,
  primaryBackColor: coloredPrimaryBackColor,
  secondaryFontColor: coloredSecondaryFontColor,
  secondaryBackColor: coloredSecondaryBackColor,
}

export const themes = [
  {
    id: 0,
    val: 'light',
    description: 'Light Theme',
  },
  {
    id: 1,
    val: 'dark',
    description: 'Dark Theme',
  },
  {
    id: 2,
    val: 'colored',
    description: 'Colored Theme',
  },
]

export default {
  fontFamily,
  inactiveLink,
  sizeScreen,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 22, 24, 32, 40, 56, 72, 80],
  sizeWidth,
  sizeHeight,
}