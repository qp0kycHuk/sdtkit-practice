import { Navigate, Outlet, useLocation } from 'react-router-dom'
// TODO Auth
import { auth } from '@utils/const/test'

export function LoggedInOutlet() {
  const location = useLocation()

  if (auth.isLogedIn) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return <Outlet />
}
