import classnames from 'classnames'
import classes from '../assets/Auth.module.scss'
import { ReactComponent as Logo } from '../assets/logo.svg'

interface IAuthFormProps
  extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

export function AuthForm({ children, ...props }: IAuthFormProps) {
  return (
    <form {...props} className={classnames(classes.form, 'flex flex-col gap-6')}>
      <div className={classes.logo}>
        <Logo className="max-w-full" />
      </div>
      {children}
    </form>
  )
}
