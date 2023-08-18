import { Navigate, Outlet, useLocation } from 'react-router-dom'
// TODO Auth
import { auth } from '@utils/const/test'

export function PrivateOutlet() {
  // initial user data load

  // const auth = useAuth()
  const location = useLocation()

  if (!auth.isLogedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <Outlet />
}
