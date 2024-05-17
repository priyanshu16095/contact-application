import React, { useEffect, useState } from 'react'
import Contact from './Contact'
import UpdateModal from './UpdateModal'
import './style.css'
import { CircularProgress } from '@mui/material'
import axios from 'axios'

function Contacts() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [selectedContact, setSelectedContact] = useState(0)

  const [page, setPage] = useState(0)
  const [size, setSize] = useState(8)
  const [totalElements, setToalElements] = useState(0)

  const totalPages = Math.ceil(totalElements / size)
  const pageNumbers = Array.from(Array(totalPages).keys())

  const URL = `http://localhost:8000/api/contact/contacts?page=${page}&size=${size}`
  const UPDATE_URL = "http://localhost:8000/api/contact"

  async function fetchAPI() {
    try {
      setLoading(true)
      const response = await axios.get(URL)
      setToalElements(response.data.totalElements)
      setContacts(response.data.content)
      setLoading(false)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  useEffect(() => { fetchAPI() }, [page])
  if (loading) return <div className="center-both"><CircularProgress /></div>
  if (error) return <p className="md-font center-both">{error}</p>

  function onClose() {
    setShowModal(false)
  }
  function handleUpdateSubmit(updatedFormData) {
    axios.put(UPDATE_URL, updatedFormData)
      .then(() => alert("Contact Updated Sucessfully :)"))
      .catch(error => console.log(error.message))
  }

  return (
    <div className="contacts flex-v container">
      <div className='contacts__contacts flex-h'>
        {contacts && contacts.length ?
          contacts.map(contact => (
            <div key={contact.id} className='contacts__contact pointer' onClick={() => { setSelectedContact(contact.id); setShowModal(true) }}>
              <Contact contact={contact} />
            </div>
          ))
          : null}
        {showModal && <UpdateModal onClose={onClose} contact={contacts[selectedContact - 1]} onSubmit={handleUpdateSubmit} />}
      </div>
      <div className="contacts__pagination flex-c">
        {pageNumbers && pageNumbers.length ? pageNumbers.map(pageNumber => <button className='btn' onClick={() => setPage(pageNumber)} key={pageNumber}>{pageNumber + 1}</button>) : null}
      </div>
    </div>
  )
}

export default Contacts
