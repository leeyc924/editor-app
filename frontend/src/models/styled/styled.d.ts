import 'styled-components'

declare module 'styled-components' {
  export interface IPalette {
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

  export interface ITheme extends IPalette {
    button: {},
    background: {
      white,
      gray,
    },
  }

  export interface DefaultTheme extends ITheme, IPalette {

  }
}