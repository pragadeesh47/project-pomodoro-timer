import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Main from "./Main"

const App = () => {
  
  return (
    <>
   
    <BrowserRouter>
        <Routes>
            <Route path = "/" Component={Login} />
            <Route path = "/home" Component={Main} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
