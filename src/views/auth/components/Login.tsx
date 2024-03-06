import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, PasswordField, PhoneField } from '@features/ui'
import { AuthForm } from './AuthForm'
import { AuthTabs } from './AuthTabs'
import { Link } from 'react-router-dom'

export function Login() {
  const { register, handleSubmit } = useForm<Inputs>()

  const submitHandler: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <AuthForm onSubmit={handleSubmit(submitHandler)}>
      <AuthTabs />

      <PhoneField
        placeholder="Логин"
        inputProps={{
          ...register('login', { required: 'Input is required' }),
          required: true,
        }}
      ></PhoneField>
      <PasswordField
        placeholder="Пароль"
        inputProps={{
          ...register('password', { required: 'Input is required' }),
          required: true,
        }}
      ></PasswordField>

      <Button type="submit">Войти</Button>

      <div className="text-center">
        Нет аккаунта?{' '}
        <Button
          as={Link}
          to="/registration"
          variant="text"
          color="gray"
          className="inline font-medium underline decoration-from-font underline-offset-4 decoration-dashed decoration-default/40"
        >
          Зарегистрируйтесь!
        </Button>
      </div>
    </AuthForm>
  )
}

type Inputs = {
  login: string
  password: string
}
