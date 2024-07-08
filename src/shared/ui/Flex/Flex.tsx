import { ReactNode } from 'react'
import styled from 'styled-components'

type FlexProps = {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  align?: 'stretch' | 'center' | 'start' | 'end'
  $justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  $gap?: string
  width?: string
  height?: string
  children?: ReactNode
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction ?? 'row'};
  align-items: ${(props) => props.align ?? 'center'};
  justify-content: ${(props) => props.$justify ?? 'center'};
  gap: ${(props) => props.$gap ?? '8px'};
  width: ${(props) => props.width ?? 'auto'};
  height: ${(props) => props.height ?? 'auto'};
`

export const Flex = (props: FlexProps) => {
  return <StyledFlex {...props}>{props.children}</StyledFlex>
}
