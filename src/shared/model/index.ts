import { ILoginData, IUser } from '@/widgets/signIn'
import { combine, createEffect, createEvent, createStore } from 'effector'

export const $message = createStore('')
export const updateMessage = createEvent<string>()

export const updateMessageHandler = (_: string, message: string) => message

export const $secondMessage = createStore('')
export const updateSecondMessage = createEvent<string>()

export const updateSecondMessageHandler = (_: string, message: string) => message

export const $gameMessages = combine({ title: $message, result: $secondMessage })

export const $user = createStore<IUser | null>(null)
export const load = createEvent<IUser>()
export const updateBalance = createEvent<number>()
export const loadUserFx = createEffect<ILoginData, IUser, Error>()
export const loadUserAutoFx = createEffect<void, IUser, Error>()

export const updateBalanceHandler = (store: IUser | null, newBalance: number) => {
  if (!store) return store
  const storeCopy = { ...store }
  storeCopy.balance = newBalance
  return storeCopy
}
