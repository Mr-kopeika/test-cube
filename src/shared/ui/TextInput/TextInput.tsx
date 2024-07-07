import styled, { css } from 'styled-components'

type TextInputProps = {
  name?: string
  placeholder?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  width?: string
  height?: string
  type?: 'text' | 'number'
  min?: number
  max?: number
  defaultValue?: number | string
  className?: string
  $invalid?: boolean
}

type StyledInputProps = {
  width?: string
  height?: string
  $invalid?: boolean
}

const StyledInput = styled.input<StyledInputProps>`
  border-radius: 6px;
  border: none;
  width: ${(props) => props.width ?? 'auto'};
  height: ${(props) => props.height ?? '40px'};
  padding: 8px 16px;

  font-family: ${(props) => props.theme.fontFamily.inter};
  font-size: ${(props) => props.theme.fontSize.medium};
  line-height: 24px;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.focusOutlined};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &[type='number'] {
    -moz-appearance: textField;
  }

  ${(props) =>
    props.$invalid &&
    css`
      border: 1px solid red;
      & + span {
        font-size: 12px;
        font-family: ${(props) => props.theme.fontFamily.inter};
        color: red;

        position: absolute;
        bottom: -20px;
        left: 0;
      }
    `}
`

const StyledWrapper = styled.div`
  position: relative;
`

export const TextInput = (props: TextInputProps) => {
  return (
    <StyledWrapper>
      <StyledInput {...props} />
      {props.$invalid ? <span>Error</span> : null}
    </StyledWrapper>
  )
}
