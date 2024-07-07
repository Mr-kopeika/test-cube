import { ReactNode } from "react";
import { styled } from "styled-components";


type ButtonProps = {
  onClick?: () => void;
  $styleType?: 'primary' | 'default';
  children?: ReactNode;
  width?: string;
  disabled?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  font-family: ${props => props.theme.fontFamily.inter};
  font-size: ${props => props.theme.fontSize.medium};

  height: ${props => props.theme.buttonHeight};
  width: ${props => props.width ?? 'auto'};

  border-radius: 5px;
  padding: 10px 16px;
  color: white;
  
  background-color: ${props => props.$styleType === 'primary'
    ? props.theme.colors.primaryButton
    : props.theme.colors.button
  };

  border-bottom: 1px solid 
  ${props => props.$styleType === 'primary'
    ? props.theme.colors.primaryButtonBorder
    : props.theme.colors.buttonBorder
  };

  &:hover {
    background-color: ${props => props.$styleType === 'primary'
    ? props.theme.colors.primaryButtonHover
    : props.theme.colors.buttonHover
  };
  }
  &:active {
    background-color: ${props => props.theme.colors.buttonActive};
    border-bottom: 1px solid ${props => props.theme.colors.buttonActiveBorder};
  }
  &:disabled {
    background-color: ${props => props.theme.colors.primaryButtonDisabled};
    border-bottom: 1px solid ${props => props.theme.colors.primaryButtonBorderDisabled};
    color: ${props => props.theme.colors.fontColorDisabled};
  }
`

export const Button = (props: ButtonProps) => {

  return (
    <StyledButton type="button" {...props}>
      {props.children}
    </StyledButton>
  )
}
