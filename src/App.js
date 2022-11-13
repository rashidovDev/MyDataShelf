import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Registration, Login, Home, Disk } from './components/navigate'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './actions/user'
import { redirect } from "react-router-dom";

const App = () => {
  
  const isAuth = useSelector(state => state.user.isAuth)

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(auth())
  },[])

  return (
    <>
      <Navbar/>
      {!isAuth ? (
        <Routes>
      <Route path="/registration" element={<Registration/>} />
      <Route path="/login" element={<Login/>} />
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
    />
        </Routes>
      ) :
      (
        <Routes>
      <Route path="/" element={<Disk/>} />
      <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
        </Routes>
      )
    }
 
    </>
  )
}

export default App