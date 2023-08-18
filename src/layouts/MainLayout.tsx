import { Header } from './Header/Header'
import { Suspense } from 'react'
import { PrivateOutlet } from './PrivateOutlet'
import { PagePreloader } from '@components/PagePreloader/PagePreloader'
import { Outlet } from 'react-router-dom'

type IMainLayoutProps = {
  isPrivate?: boolean
}

export function MainLayout({ isPrivate = false }: IMainLayoutProps) {
  // return (<Redirect />)

  return (
    <div className="flex-grow ">
      <Header />
      <div className="flex items-start gap-8 p-8">
        <Suspense fallback={<PagePreloader />}>
          {isPrivate ? <PrivateOutlet /> : <Outlet />}
        </Suspense>
      </div>
    </div>
  )
}
