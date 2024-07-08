import { Button, Cube, Flex, RadioButton, Select } from '@/shared/ui'
import { betOptions, cubeNumberOptions } from '../../model/data'
import { useState } from 'react'
import { RadioButtonWithInput } from '../RadioButtonWithInput/RadioButtonWithInput'
import styled from 'styled-components'
import { useUnit } from 'effector-react'
import { $user } from '@/widgets/signIn'
import { $gameMessages } from '@/pages/game/model'

const StyledWrapper = styled.div`
  width: 100%;
`

const StyledSpan = styled.span`
  color: white;
  font-family: ${(props) => props.theme.fontFamily.inter};
  font-size: ${(props) => props.theme.fontSize.small};
`

const StyledFlex = styled(Flex)`
  position: relative;
  gap: 16px;
`

const StyledDisable = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 30px;
`
const StyledMessage = styled.span`
  font-size: ${(props) => props.theme.fontSize.large};
  font-family: ${(props) => props.theme.fontFamily.inter};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  text-align: center;
  color: white;
  position: absolute;
  top: -50px;
`

const StyledSecondMessage = styled(StyledMessage)`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  top: -22px;
`

export const CubeGame = () => {
  const user = useUnit($user)
  const messages = useUnit($gameMessages)
  const [cubeValue, setCubeValue] = useState(1)
  const [reRoll, setReRoll] = useState(false)
  const [currentRadio, setCurrentRadio] = useState('')

  const playHandler = () => {
    const newValue = Math.floor(Math.random() * 6) + 1
    setCubeValue(newValue)
    setReRoll(!reRoll)
  }

  const radioHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setCurrentRadio(event.target.value)
  }

  return (
    <StyledFlex direction='column' width='fit-content'>
      <StyledMessage>{messages.title}</StyledMessage>
      <StyledSecondMessage>{messages.result}</StyledSecondMessage>
      {!user && <StyledDisable />}

      <Cube isReRoll={reRoll} value={cubeValue} />

      <StyledWrapper>
        <StyledSpan>Размер ставки</StyledSpan>
        <Select $options={betOptions} width='100%' tabIndex={!user ? -1 : 0} />
      </StyledWrapper>

      <StyledWrapper>
        <StyledSpan>Варианты ставок</StyledSpan>
        <Flex direction='column'>
          <Flex>
            <RadioButton
              label='Четное'
              name='event'
              value='even'
              width='165px'
              onChange={radioHandler}
            />
            <RadioButton
              label='Не четное'
              name='event'
              value='odd'
              width='165px'
              onChange={radioHandler}
            />
          </Flex>
          <Flex>
            <RadioButton
              label='От 1 до 3'
              name='event'
              value='1To3'
              width='165px'
              onChange={radioHandler}
            />
            <RadioButton
              label='От 4 до 6'
              name='event'
              value='4To6'
              width='165px'
              onChange={radioHandler}
            />
          </Flex>
          <RadioButtonWithInput
            label='Конкретное число'
            width='100%'
            name='event'
            radioValue='number'
            currentChecked={currentRadio}
            onRadioChange={radioHandler}
            selectOptions={cubeNumberOptions}
            tabIndex={!user ? -1 : 0}
          />
        </Flex>
      </StyledWrapper>
      <Button
        disabled={currentRadio === ''}
        $styleType='primary'
        width='100%'
        onClick={playHandler}
      >
        Сделать ставку
      </Button>
    </StyledFlex>
  )
}
