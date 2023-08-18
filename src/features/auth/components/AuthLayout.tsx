import { Suspense } from 'react'
import classnames from 'classnames'
import classes from '../assets/Auth.module.scss'
import { LoggedInOutlet } from '@layouts/LoggedInOutlet'
import { PagePreloader } from '@components/PagePreloader/PagePreloader'

export function AuthLayout() {
  return (
    <div className={classnames(classes.wrapper, 'flex items-center justify-center flex-grow')}>
      <Suspense fallback={<PagePreloader />}>
        <LoggedInOutlet />
      </Suspense>
    </div>
  )
}
