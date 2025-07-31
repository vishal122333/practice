import React from 'react'
import './App.css'
import Header from './component/Header.jsx'
import Login from './component/Login.jsx'
import LiveClock from "./component/Clock.jsx"
import Example from './component/OurTeam.jsx'


function App() {
  

  return (
    <>
      <div className='w-full h-full text-white bg-black grid-bg '>
       
       
      
        <Header />
        <Login />
        <LiveClock />
        <Example /> 
           
        <button className="cursor-pointer hover:cursor-wait bg-blue-500 text-white p-4 rounded">Hover me</button>
      </div>
    </>
  )
}

export default App


