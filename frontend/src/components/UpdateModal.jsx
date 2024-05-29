import React, { useState } from 'react'
import './style.css'
import axios from 'axios'

function UpdateModal({ onClose, onSubmit, contact }) {
    const [details, setDetails] = useState(contact)

    function handleChange(e) {
        setDetails((prevValue) => ({ ...prevValue, [e.target.name]: e.target.value }))
    }
    function handleSumbit() {
        onSubmit(details)
        onClose()
    }

    const PHOTO_URL = "http://localhost:8000/api/contact/uploadPhoto"
    const [file, setFile] = useState(null)
    const hanldeFileChange = (e) => {
        setFile(e.target.files[0])
    }
    async function uploadPhoto() {
        const formData = new FormData()
        formData.append('id', contact?.id)
        formData.append('file', file)
        console.log(formData)
        try {
            axios.put(PHOTO_URL, formData, {
                headers: { 'Content-Type': 'mulitpart/form-data' }
              })
                .then(() => alert('Image uploaded sucessfully!'))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    function handleImageSubmit() {
        uploadPhoto()
      }

    return (
        <div className='addModal modalPage center-both flex-v'>
            <div className="modal flex-v">
                <p className="title">Update Details</p>

                <div className="modal__inputs flex-v">
                    <div className="flex-c"><img src={contact.photoURL ? contact.photoURL : 'default_contact.png'} width={'140rem'} /></div>
                    <input name="name" value={details?.name} type="text" placeholder='Name' className='inp' onChange={handleChange} />
                    <div className="modal__email flex-h">
                        <input name='email' value={details?.email} type="text" placeholder='Email' className='inp' onChange={handleChange} />
                        <input name='phone' value={details?.phone} type="text" placeholder='Phone' className='inp' onChange={handleChange} />
                    </div>
                    <input name='title' value={details?.title} type="text" placeholder='title' className='inp' onChange={handleChange} />
                    <textarea name='address' value={details?.address} type="text" placeholder='Address' className='inp' onChange={handleChange} />
                    <div className="modal__photo flex-h">
                        <input type="file" className='inp' onChange={e => hanldeFileChange(e)} />
                        <button className="btn" onClick={uploadPhoto}>Change Photo</button>
                    </div>
                    <div className="modal__buttons flex-e">
                        <button className="btn" onClick={onClose}>Close</button>
                        <button className="btn" onClick={handleImageSubmit}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateModal
