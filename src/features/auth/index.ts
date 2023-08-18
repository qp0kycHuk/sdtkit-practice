import { lazy } from 'react'

export { AuthLayout } from './components/AuthLayout'

export const Login = lazy(() => import('./components/Login').then((m) => ({ default: m.Login })))
export const Registration = lazy(() =>
  import('./components/Registration').then((m) => ({ default: m.Registration }))
)
