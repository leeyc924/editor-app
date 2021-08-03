export interface IInputProps {
}

export interface IButtonProps {
  size: string,
  color: string,
  outline?: boolean,
  to?: string,
}

export interface IButtonSize {
  [index: string]: {
    height: string,
    fontSize: string,
  },
  large: {
    height: string,
    fontSize: string,
  },
  medium: {
    height: string,
    fontSize: string,
  },
  small: {
    height: string,
    fontSize: string,
  },
}