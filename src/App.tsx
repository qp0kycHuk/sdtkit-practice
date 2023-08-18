import { AuthLayout, Registration, Login } from '@features/auth'
import { MainLayout } from '@layouts/MainLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout isPrivate />}></Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path="login/" element={<Login />} />
            <Route path="registration/" element={<Registration />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
