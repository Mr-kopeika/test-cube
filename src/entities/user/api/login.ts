import axios from 'axios'
import { IUser, ILoginData } from '../model/User'

export async function login(params: ILoginData) {
  const { data } = await axios.post<IUser>(
    `${import.meta.env.VITE_BASE_URL}/api/client-login`,
    {
      login: params.login,
      password: params.password,
    },
    { withCredentials: true },
  )

  return data
}
