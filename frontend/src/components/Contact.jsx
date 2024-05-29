import React, { useState } from 'react'
import './style.css'

function Contact({contact}) {
  return (
    <div className='contact container-border pointer flex-v'>
        {/* <img src={contact.photoURL ? contact?.photoURL : 'default_contact.png'} width={'110rem'} /> */}
        <img src='default_contact.png' width={'110rem'} />
        <p className="title">{contact?.name}</p>
        <p>{contact?.email}</p>
        <p>{contact?.phone}</p>
        <p>{contact?.address}</p>
        <p className='contact__title'>{contact?.title}</p>
    </div>
  )
}

export default Contact
