import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Signup from "./components/pages/Signup"
import Dashboard from './components/pages/Dashboard'
import Signin from './components/pages/Signin'
import Sendmoney from './components/pages/Sendmoney'

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" element = {<Signup/>}></Route>
        <Route path="/signup" element = {<Signup/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}
        ></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/sendmoney" element={<Sendmoney/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
