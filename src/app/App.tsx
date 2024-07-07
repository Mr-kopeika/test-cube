import styled from 'styled-components'
import { Center } from '../shared/ui'
import { CubeGame } from '@/widgets/cubeGame'
import { useEffect } from 'react'
import { login } from '@/entities/user'

const AppWrapper = styled.div`
  background: linear-gradient(
    268.59deg,
    ${(props) => props.theme.colors.backgroundFirst} 0%,
    ${(props) => props.theme.colors.backgroundSecond} 50%,
    ${(props) => props.theme.colors.backgroundFirst} 100%
  );

  width: 100vw;
  height: 100vh;
`

function App() {
  useEffect(() => {
    login('test_player_try', 'test_player_try').then((result) => console.log(result))
    // authWithSid().then((user) => console.log(user))
    console.log(document.cookie)
  })

  return (
    <AppWrapper>
      <Center>
        <CubeGame />
      </Center>
    </AppWrapper>
  )
}

export default App
