import { useForm, SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button, FieldCombobox, Field, PasswordField, PhoneField, Select } from '@features/ui'
import { AuthForm } from './AuthForm'
import HatchingChickIcon from '@assets/img/HatchingChick.png'
import SchoolIcon from '@assets/img/School.png'
import LockedIcon from '@assets/img/Locked.png'

const universities = [
  'Кубанский государственный университет',
  'Кубанский государственный университет физической культуры, спорта и туризма',
  'Кубанский государственный технологический университет',
  'Краснодарский филиал Российского экономического университета имени Г.В. Плеханова',
  'Кубанский государственный аграрный университет имени И.Т. Трубилина',
  'Краснодарский филиал Финансового университета при Правительстве Российской Федерации',
  'Северо-Кавказский филиал Российского государственного университета правосудия',
  'Академия маркетинга и социально-информационных технологий - ИМСИТ',
  'Кубанский государственный медицинский университет Министерства Здравоохранения Российской Федерации',
  'Краснодарский государственный институт культуры',
]

export function Registration() {
  const { register, handleSubmit } = useForm<Inputs>()

  const submitHandler: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <AuthForm onSubmit={handleSubmit(submitHandler)}>
      <div className="flex items-center">
        <div className="text-xl font-semibold">Личная информация</div>
        <img src={HatchingChickIcon} alt="" className="w-6 h-6 ml-auto" />
      </div>
      <PhoneField
        placeholder="Логин"
        inputProps={{
          ...register('login', { required: 'Input is required' }),
          required: true,
        }}
      />
      <Field
        placeholder="Фамилия"
        inputProps={{
          ...register('sirname', { required: 'Input is required' }),
          required: true,
        }}
      />
      <Field
        placeholder="Имя"
        inputProps={{
          ...register('name', { required: 'Input is required' }),
          required: true,
        }}
      />

      <Select
        inputProps={{
          ...register('type'),
        }}
        placeholder="Вид деятельности"
      >
        <option value="Креатив">Креатив</option>
        <option value="Информация">Информация</option>
        <option value="Технологии">Технологии</option>
      </Select>
      <Field
        placeholder="E-mail"
        inputProps={{
          ...register('email', { required: 'Input is required' }),
          required: true,
        }}
      />

      <div className="flex items-center">
        <div className="text-xl font-semibold">Университет</div>
        <img src={SchoolIcon} alt="" className="w-6 h-6 ml-auto" />
      </div>
      <FieldCombobox
        options={universities}
        placeholder="Полное название ВУЗа"
        inputProps={{
          ...register('university', { required: 'Input is required' }),
          required: true,
        }}
      />
      <Field placeholder="Факультет" />
      <Field placeholder="Курс" />
      <Field placeholder="Группа" />

      <div className="flex items-center">
        <div className="text-xl font-semibold">Пароль</div>
        <img src={LockedIcon} alt="" className="w-6 h-6 ml-auto" />
      </div>
      <PasswordField
        placeholder="Пароль"
        inputProps={{
          ...register('password', { required: 'Input is required' }),
          required: true,
        }}
      />
      <PasswordField
        placeholder="Повторите пароль"
        inputProps={{
          ...register('password_repeat', { required: 'Input is required' }),
          required: true,
        }}
      />

      <Button type="submit">Зарегистрироваться</Button>

      <div className="text-center">
        Есть аккаунт?{' '}
        <Button
          as={Link}
          to="/login"
          variant="text"
          color="gray"
          className="inline font-medium underline decoration-from-font underline-offset-4"
        >
          Войти
        </Button>
      </div>
    </AuthForm>
  )
}

type Inputs = {
  login: string
  password: string
  password_repeat: string
  sirname: string
  type: string
  name: string
  email: string
  university: string
}
