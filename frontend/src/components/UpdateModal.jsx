import React, { useState } from 'react'
import './style.css'

function UpdateModal({ onClose, onSubmit, contact }) {
    const[details, setDetails] = useState(contact)

    function handleChange(e) {
        setDetails((prevValue) => ({ ...prevValue, [e.target.name]: e.target.value }))
    }
    function handleSumbit() {
        onSubmit(details)
        onClose()
    }

    return (
        <div className='addModal modalPage center-both flex-v'>
            <div className="modal flex-v">
                <p className="title">Update Details</p>

                <div className="modal__inputs flex-v">
                    <div className="flex-c"><img src='default_contact.png' width={'140rem'} /></div>
                    <input name="name" value={details?.name} type="text" placeholder='Name' className='inp' onChange={handleChange} />
                    <div className="modal__email flex-h">
                        <input name='email' value={details?.email} type="text" placeholder='Email' className='inp' onChange={handleChange} />
                        <input name='phone' value={details?.phone} type="text" placeholder='Phone' className='inp' onChange={handleChange} />
                    </div>
                    <input name='title' value={details?.title} type="text" placeholder='title' className='inp' onChange={handleChange} />
                    <textarea name='address' value={details?.address} type="text" placeholder='Address' className='inp' onChange={handleChange} />
                    <input type="file" className='inp' />
                    <div className="modal__buttons flex-e">
                        <button className="btn" onClick={onClose}>Close</button>
                        <button className="btn" onClick={handleSumbit}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateModal
