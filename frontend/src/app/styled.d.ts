import 'styled-components'

declare module 'styled-components' {
  export interface ITheme {
    [index: string]: string,
    white: string,
    black: string,
    grayEEE: string,
    grayDF: string,
    grayDDD: string,
    grayCCC: string,
    gray666: string,
    gray333: string,
    gray111: string,
    red: string,
    blue: string,
    green: string,
  }

  export interface DefaultTheme extends ITheme {
  }
}