import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import { Auth } from './pages/auth'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <div className='app-container'>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/auth' element={<Auth/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    
  )
}

export default App
