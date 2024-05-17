import React from 'react'
import Header from './Header'
import Contacts from './Contacts'
import './style.css'

function Home() {
  return (
    <div className='home flex-v'>
        <Header />  
        <Contacts />
    </div>
  )
}

export default Home
