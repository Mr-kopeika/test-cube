import { combine, createEvent, createStore } from 'effector'

export const $message = createStore('')
export const updateMessage = createEvent<string>()

export const updateMessageHandler = (_: string, message: string) => message

export const $secondMessage = createStore('')
export const updateSecondMessage = createEvent<string>()

export const updateSecondMessageHandler = (_: string, message: string) => message

export const $gameMessages = combine({ title: $message, result: $secondMessage })
