import { IUser, authWithSid, login } from '@/entities/user'
import { $user, load, loadUserAutoFx, loadUserFx, updateBalance } from '@/entities/user/model'
import { Button, Flex, Modal, TextInput } from '@/shared/ui'
import { useUnit } from 'effector-react'
import { useState } from 'react'

type SignInProps = {
  active: boolean
  setActive: (active: boolean) => void
}

export const loadUserHandler = (_: IUser | null, user: IUser) => {
  user.balance = 100
  return user
}
export const updateBalanceHandler = (store: IUser | null, newBalance: number) => {
  if (store) store.balance = newBalance
  return store
}

loadUserFx.use(login)
loadUserAutoFx.use(authWithSid)

$user.on(load, loadUserHandler)
$user.on(updateBalance, updateBalanceHandler)
$user.on(loadUserFx.doneData, loadUserHandler)
$user.on(loadUserAutoFx.doneData, loadUserHandler)

export const SignIn = (props: SignInProps) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [submited, setSubmited] = useState(false)
  const [loadUserFn] = useUnit([loadUserFx])

  function signInHandler() {
    if (login && password) {
      loadUserFn({ login, password })
      setSubmited(false)
    }
    setSubmited(true)
  }

  return (
    <Modal {...props}>
      <Flex direction='column' $gap='16px'>
        <TextInput
          width='338px'
          placeholder='Login'
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          $invalid={submited && !login}
        />
        <TextInput
          width='338px'
          placeholder='Password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          $invalid={submited && !password}
        />
        <Button width='338px' onClick={signInHandler}>
          Войти
        </Button>
      </Flex>
    </Modal>
  )
}
