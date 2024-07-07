import styled from "styled-components"


type TextInputProps = {
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  width?: string;
  height?: string;
  type?: 'text' | 'number';
  min?: number;
  max?: number;
  defaultValue?: number | string;
}

type StyledInputProps = {
  width?: string;
  height?: string;
}

const StyledInput = styled.input<StyledInputProps>`
  border-radius: 6px;
  width: ${props => props.width ?? 'auto'};
  height: ${props => props.height ?? '40px'};
  padding: 8px 16px;

  font-family: ${props => props.theme.fontFamily.inter};
  font-size: ${props => props.theme.fontSize.medium};
  line-height: 24px;

  &:focus {
    border: 1px solid ${props => props.theme.colors.focusOutlined};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button, {
    -webkit-appearance: none;
  }
  &[type='number'] {
    -moz-appearance: textField;
  }
`

export const TextInput = (props: TextInputProps) => {

  return (
    <StyledInput {...props} />
  )
}