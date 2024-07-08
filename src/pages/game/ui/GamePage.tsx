import { Center } from '@/shared/ui'
import { CubeGame } from '@/widgets/cubeGame'
import { Header } from '@/widgets/header'

export const GamePage = () => {
  return (
    <>
      <Center>
        <CubeGame />
      </Center>
      <Header />
    </>
  )
}
