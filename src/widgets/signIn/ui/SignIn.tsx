import { IUser, authWithSid, login } from '../index'
import { $user, load, loadUserAutoFx, loadUserFx, updateBalance } from '@/widgets/signIn/model'
import { Button, Flex, Modal, TextInput } from '@/shared/ui'
import { useUnit } from 'effector-react'
import { useEffect, useState } from 'react'
import { $message, updateMessage, updateMessageHandler } from '@/pages/game/model'

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

$message.on(updateMessage, updateMessageHandler)

export const SignIn = (props: SignInProps) => {
  const messageFn = useUnit(updateMessage)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [submited, setSubmited] = useState(false)
  const [loadUserFn, loadUserAutoFn] = useUnit([loadUserFx, loadUserAutoFx])

  useEffect(() => {
    loadUserAutoFn().then(
      () => messageFn('Сделайте ставку'),
      () => messageFn('Войдите, чтобы продолжить'),
    )
  }, [])

  function signInHandler() {
    if (login && password) {
      loadUserFn({ login, password }).then(() => {
        props.setActive(false)
        messageFn('Сделайте ставку')
      })
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
