import { Button, Cube, Flex, RadioButton, Select } from '@/shared/ui'
import { betOptions, cubeNumberOptions } from '../../model/data'
import { useState } from 'react'
import { RadioButtonWithInput } from '../RadioButtonWithInput/RadioButtonWithInput'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  width: 100%;
`

const StyledSpan = styled.span`
  color: white;
  font-family: ${(props) => props.theme.fontFamily.inter};
  font-size: ${(props) => props.theme.fontSize.small};
`

export const CubeGame = () => {
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
    <Flex direction='column' width='fit-content' $gap='16px'>
      <Cube isReRoll={reRoll} value={cubeValue} />
      <StyledWrapper>
        <StyledSpan>Размер ставки</StyledSpan>
        <Select $options={betOptions} width='100%' />
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
    </Flex>
  )
}
