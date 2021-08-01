import { IPalette, ITheme } from "styled-components"

const palette: IPalette = {
  white: '#FFFFFF',
  black: '#000000',
  grayEEE: '#EEEEEE',
  grayDDD: '#DDDDDD',
  grayCCC: '#CCCCCC',
  grayDF: '#dfdfdf',
  gray666: '#666666',
  gray333: '#333333',
  gray111: '#111111',
  red: '#F05B5B',
  blue: '#41A1EA',
  green: '#1DC961',
}

export const theme: ITheme = {
  ...palette,
  background: {
    white: palette.white,
    gray: palette.grayDF,
  },
  button: {
  }
}
