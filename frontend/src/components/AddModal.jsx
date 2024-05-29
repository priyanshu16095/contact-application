import React, { useState } from 'react'
import './style.css'

function AddModal({ onClose, onSubmit }) {
    const[details, setDetails] = useState({
        name: '',
        email: '',
        phone: '',
        title: '',
        address: '',
    })
    function handleChange(e) {
        setDetails(prevValue => ({...prevValue, [e.target.name]: e.target.value}))
    }
    function hanldeAddContact() {
        onSubmit(details)
        onClose()
    }
    return (
        <div className='addModal modalPage center-both flex-v'>
            <div className="modal flex-v">
                <p className="title">Contact Details</p>

                <div className="modal__inputs flex-v">
                    <input name='name' value={details.name} type="text" placeholder='Name' className='inp' onChange={handleChange} />
                    <div className="modal__email flex-h">
                        <input name='email' value={details.email} type="text" placeholder='Email' className='inp' onChange={handleChange} />
                        <input name='phone' value={details.phone} type="text" placeholder='Phone' className='inp' onChange={handleChange} />
                    </div>
                    <input name='title' value={details.title} type="text" placeholder='Title' className='inp' onChange={handleChange} />
                    <textarea name='address' value={details.address} type="text" placeholder='Address' className='inp' onChange={handleChange} />
                    <div className="modal__buttons flex-e">
                        <button className="btn" onClick={onClose}>Close</button>
                        <button className="btn" onClick={hanldeAddContact}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddModal
