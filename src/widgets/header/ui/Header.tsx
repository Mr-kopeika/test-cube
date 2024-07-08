import { Button, Flex } from '@/shared/ui'
import { $user, SignIn } from '@/widgets/signIn'
import { useUnit } from 'effector-react'
import { useState } from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  position: absolute;
  width: 100vw;
  top: 0;
  left: 0;
`

const StyledSpan = styled.span<{ $weight?: 'normal' | 'bold' }>`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-family: ${(props) => props.theme.fontFamily.inter};
  font-weight: ${(props) => (props.$weight === 'bold' ? props.theme.fontWeight.bold : 'normal')};
  color: white;
`

const StyledFlex = styled(Flex)`
  padding: 10px 14px;
  justify-content: space-between;
  height: 64px;
`

export const Header = () => {
  const [activeSignIn, setActiveSignIn] = useState(false)
  const user = useUnit($user)

  const signInHandler = () => {
    setActiveSignIn(true)
  }

  return (
    <StyledWrapper>
      <StyledFlex>
        <StyledSpan $weight='bold'>Test game</StyledSpan>
        {user ? (
          <StyledSpan>{user.balance} (TND)</StyledSpan>
        ) : (
          <Flex $gap='8px'>
            <Button onClick={signInHandler}>Войти</Button>
            <Button onClick={signInHandler}>Регистрация</Button>
          </Flex>
        )}
      </StyledFlex>
      <SignIn active={activeSignIn} setActive={setActiveSignIn} />
    </StyledWrapper>
  )
}
