import { ReactNode } from 'react'
import styled from 'styled-components'

type RadioButtonProps = {
  id?: string
  label: string
  name?: string
  value: string | number
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  width?: string
  height?: string
  $textAlign?: 'center' | 'left' | 'right'
  children?: ReactNode
}

const StyledRadioButton = styled.input<{
  $textAlign?: 'center' | 'left' | 'right'
  width?: string
  height?: string
}>`
  display: none;

  & + label {
    display: inline-block;
    font-family: ${(props) => props.theme.fontFamily.inter};
    font-size: ${(props) => props.theme.fontSize.medium};
    color: white;
    padding: ${(props) => props.theme.buttonPadding};
    text-align: ${(props) => props.$textAlign ?? 'center'};
    width: ${(props) => props.width ?? 'auto'};

    background-color: ${(props) => props.theme.colors.button};
    border-bottom: 1px solid ${(props) => props.theme.colors.buttonBorder};
    height: ${(props) => props.height ?? props.theme.buttonHeight};
    border-radius: 5px;
    transition: 0.3s;
  }

  & + label:hover {
    background-color: ${(props) => props.theme.colors.buttonHover};
  }

  &:checked + label {
    border-bottom: 1px solid ${(props) => props.theme.colors.buttonActiveBorder};
    background-color: ${(props) => props.theme.colors.buttonActive};
  }
`

const StyledWrapper = styled.div`
  display: inline-block;
  width: 100%;
`

export const RadioButton = (props: RadioButtonProps) => {
  return (
    <StyledWrapper>
      <StyledRadioButton
        type='radio'
        id={props.id ?? props.label}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        $textAlign={props.$textAlign}
        width={props.width}
      />
      <label htmlFor={props.id ?? props.label}>
        {props.label}
        {props.children}
      </label>
    </StyledWrapper>
  )
}
