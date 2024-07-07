import axios from 'axios'
import { IUser } from '../model/User'

export async function login(login: string, password: string) {
  try {
    const { data, headers } = await axios.post<IUser>(
      `${import.meta.env.VITE_BASE_URL}/api/client-login`,
      {
        login,
        password,
      },
      { withCredentials: true },
    )

    console.log(headers['set-cookie'])
    return data
  } catch (err) {
    console.log(err)
    return new Error()
  }
}
