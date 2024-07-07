export type UserId = string & {
  branded: 'UserId'
}

export const UserId = {
  as: (value: string) => value as UserId,
}

export interface IUser {
  id: UserId
  login: string
  balance: number
}

export interface ILoginData {
  login: string
  password: string
}
