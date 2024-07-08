import axios from 'axios'
import { IUser } from '../model/User'

export async function authWithSid() {
  const { data } = await axios.get<IUser>(`${import.meta.env.VITE_BASE_URL}/api/auth/me`, {
    withCredentials: true,
  })

  return data
}
