import { ReactNode } from 'react'
import styled from 'styled-components'
import CloseSvg from '../images/close.svg'

type ModalProps = {
  active: boolean
  setActive: (active: boolean) => void
  children?: ReactNode
}

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  z-index: 10;

  &.active {
    display: flex;
  }

  .modal_content {
    position: relative;
    pointer-events: all;
    background-color: #250e36;
    padding: 50px;
    border-radius: 4px;
  }

  .active_content {
  }
`

const StyledButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 20px;
  height: 20px;
  background-color: transparent;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`

export const Modal = (props: ModalProps) => {
  return (
    <StyledWrapper
      className={`${props.active ? 'active' : ''}`}
      onClick={() => props.setActive(false)}
    >
      <div
        className={`modal_content ${props.active ? 'active_content' : ''}`}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <StyledButton onClick={() => props.setActive(false)}>
          <img src={CloseSvg} alt='close modal' />
        </StyledButton>
        {props.children}
      </div>
    </StyledWrapper>
  )
}
