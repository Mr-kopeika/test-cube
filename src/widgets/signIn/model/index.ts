import { createEffect, createEvent, createStore } from 'effector'
import { ILoginData, IUser } from './User'

export const $user = createStore<IUser | null>(null)
export const load = createEvent<IUser>()
export const updateBalance = createEvent<number>()
export const loadUserFx = createEffect<ILoginData, IUser, Error>()
export const loadUserAutoFx = createEffect<void, IUser, Error>()
