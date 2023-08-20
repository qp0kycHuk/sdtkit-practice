import { Suspense } from 'react'
import classnames from 'classnames'
import { LoggedInOutlet } from '@layouts/LoggedInOutlet'
import { PagePreloader } from '@components/PagePreloader/PagePreloader'
import classes from '../assets/Auth.module.scss'

export function AuthLayout() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          controls={false}
          className="absolute top-0 left-0 object-cover w-full h-full"
        >
          <source src="/media/auth-background.webm" type="video/webm" />
          <source src="/media/auth-background.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className={classnames(
          classes.wrapper,
          'flex items-center justify-center flex-grow relative z-10'
        )}
      >
        <Suspense fallback={<PagePreloader />}>
          <LoggedInOutlet />
        </Suspense>
      </div>
    </>
  )
}
