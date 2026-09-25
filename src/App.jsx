import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />

        {/* <Route element={}>
          protected route and will protect product dashborad
      </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App