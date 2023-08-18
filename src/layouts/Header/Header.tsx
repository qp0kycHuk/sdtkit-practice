import classes from './Header.module.css'

interface IHeaderProps {}

export function Header({}: IHeaderProps) {
  return (
    <header className="flex items-center py-6">
      <div className={classes.logo}>STDKIT практика</div>
      <div className="flex gap-8 ml-10">
        <button className="btn btn-text">Список студентов</button>
        <button className="btn btn-text">Список задач</button>
      </div>
    </header>
  )
}
