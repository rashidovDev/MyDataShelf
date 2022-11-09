import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Registration, Login, Home } from './components/navigate'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './actions/user'

const App = () => {
  
  const isAuth = useSelector(state => state.user.isAuth)

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(auth())
  },[])

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      {!isAuth && (
        <>
      <Route path="/registration" element={<Registration/>} />
      <Route path="/login" element={<Login/>} />
        </>
      ) }
      </Routes>
    </>
  )
}

export default App