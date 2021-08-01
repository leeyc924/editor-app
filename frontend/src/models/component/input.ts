export interface IInputProps {
  value?: string | number | readonly string[] | undefined,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  type?: string,
}