import { Button, Cube, Flex, RadioButton, Select, TextInput } from '@/shared/ui'
import { betOptions, cubeNumberOptions } from '../../model/data'
import { useState } from 'react'
import { RadioButtonWithInput } from '../RadioButtonWithInput/RadioButtonWithInput'

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
      <TextInput width='100%' placeholder='Логин' />
      <Select $options={betOptions} width='100%' />
      <Flex direction='column'>
        <Flex>
          <RadioButton label='Четное' name='event' value='even' width='165px' onChange={radioHandler} />
          <RadioButton label='Не четное' name='event' value='odd' width='165px' onChange={radioHandler} />
        </Flex>
        <Flex>
          <RadioButton label='От 1 до 3' name='event' value='1To3' width='165px' onChange={radioHandler} />
          <RadioButton label='От 4 до 6' name='event' value='4To6' width='165px' onChange={radioHandler} />
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
      <Button disabled={currentRadio === ''} $styleType='primary' width='100%' onClick={playHandler}>
        Сделать ставку
      </Button>
    </Flex>
  )
}
