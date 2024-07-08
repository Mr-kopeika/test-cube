import { Button, Cube, Flex, RadioButton, Select } from '@/shared/ui'
import { betOptions, cubeNumberOptions } from '../../model/data'
import { useState } from 'react'
import { RadioButtonWithInput } from '../RadioButtonWithInput/RadioButtonWithInput'
import styled from 'styled-components'
import { useUnit } from 'effector-react'
import {
  $gameMessages,
  $secondMessage,
  $user,
  updateBalance,
  updateBalanceHandler,
  updateMessage,
  updateSecondMessage,
  updateSecondMessageHandler,
} from '@/shared/model'

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

  @media (max-height: 750px) {
    top: 0;
  }
`

const StyledSecondMessage = styled(StyledMessage)`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  top: -22px;

  @media (max-height: 750px) {
    top: 20px;
  }
`
$user.on(updateBalance, updateBalanceHandler)
$secondMessage.on(updateSecondMessage, updateSecondMessageHandler)

export const CubeGame = () => {
  const user = useUnit($user)
  const messages = useUnit($gameMessages)
  const [updateMessageFn, updateSecondMessageFn] = useUnit([updateMessage, updateSecondMessage])
  const [updateBalanceFn] = useUnit([updateBalance])
  const [cubeValue, setCubeValue] = useState(1)
  const [reRoll, setReRoll] = useState(false)
  const [currentRadio, setCurrentRadio] = useState('')
  const [selectedNumber, setSelectedValue] = useState(cubeNumberOptions[0].value)
  const [bet, setBet] = useState(betOptions[0])
  const [animation, setAnimation] = useState(false)
  const disableButton =
    !user || currentRadio === '' || Number(bet.value) > user.balance || animation

  const playHandler = () => {
    const newValue = Math.floor(Math.random() * 6) + 1
    setCubeValue(newValue)
    setReRoll(!reRoll)
    setAnimation(true)
    setTimeout(() => {
      updateMessageFn('Результат броска кубика: ' + newValue)
      calculateNewBalance(newValue)
      setAnimation(false)
    }, 700)
  }

  const calculateNewBalance = (cubeValue: number) => {
    if (!user) return
    const currentBalance = user?.balance
    if (isWinner(cubeValue) && currentRadio === 'number') {
      const win = Number(bet.value) * 3
      updateBalanceFn(currentBalance + win)
      updateSecondMessageFn('Вы выиграли ' + win + ' TND!')
    } else if (isWinner(cubeValue) && currentRadio !== 'number') {
      const win = Number(bet.value) * 2
      updateBalanceFn(currentBalance + win)
      updateSecondMessageFn('Вы выиграли ' + win + ' TND!')
    } else {
      updateBalanceFn(currentBalance - Number(bet.value))
      updateSecondMessageFn('Повезет в следующий раз')
    }
  }

  const isWinner = (cubeValue: number) => {
    switch (currentRadio) {
      case 'even':
        return cubeValue % 2 === 0
      case 'odd':
        return cubeValue % 2 === 1
      case '1to3':
        return cubeValue < 4
      case '4to6':
        return cubeValue > 3
      case 'number':
        return cubeValue.toString() == selectedNumber
    }
  }

  const radioHandler: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setCurrentRadio(event.target.value)

  const selectNumberHandler: React.ChangeEventHandler<HTMLSelectElement> = (event) =>
    setSelectedValue(event.target.value)

  return (
    <StyledFlex direction='column' width='fit-content'>
      <StyledMessage>{messages.title}</StyledMessage>
      <StyledSecondMessage>{messages.result}</StyledSecondMessage>
      {!user && <StyledDisable />}

      <Cube isReRoll={reRoll} value={cubeValue} />

      <StyledWrapper>
        <StyledSpan>Размер ставки</StyledSpan>
        <Select
          $options={betOptions}
          width='100%'
          tabIndex={!user ? -1 : 0}
          value={bet}
          setValue={setBet}
        />
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
              value='1to3'
              width='165px'
              onChange={radioHandler}
            />
            <RadioButton
              label='От 4 до 6'
              name='event'
              value='4to6'
              width='165px'
              onChange={radioHandler}
            />
          </Flex>
          <RadioButtonWithInput
            label='Конкретное число'
            width='100%'
            name='event'
            radioValue='number'
            selectValue={selectedNumber}
            currentChecked={currentRadio}
            onRadioChange={radioHandler}
            selectOptions={cubeNumberOptions}
            onSelectChange={selectNumberHandler}
            tabIndex={!user ? -1 : 0}
          />
        </Flex>
      </StyledWrapper>
      <Button disabled={disableButton} $styleType='primary' width='100%' onClick={playHandler}>
        Сделать ставку
      </Button>
    </StyledFlex>
  )
}
