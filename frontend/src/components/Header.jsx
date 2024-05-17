import React, { useEffect, useState } from 'react'
import AddModal from './AddModal'
import LightModeIcon from '@mui/icons-material/LightMode';
import axios from 'axios';

function Header() {
    const[theme, setTheme] = useState("light")
    function handleThemeClick() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme]) 
    
    const[showModal, setShowModal] = useState(false)
    function onClose() {
        setShowModal(false)
    }

    const ADD_URL = "http://localhost:8000/api/contact"
    function hanldeAddContact(formData) {
        axios.post(ADD_URL, formData)
        .then(() => alert("Contact Added Sucessfully"))
        .catch(error => alert(error.message))
    }

  return (
    <div className='header container flex-s'>
        <p className="title">Contacts (12)</p>
        <div className="header__left flex-h">
        <div className="round" onClick={handleThemeClick}><LightModeIcon className='icon' /></div>
        <button className="btn" onClick={() => setShowModal(true)}>Add</button>
        {showModal && <AddModal onClose={onClose} onSubmit={hanldeAddContact} />}
        </div>
    </div>
  )
}

export default Header
