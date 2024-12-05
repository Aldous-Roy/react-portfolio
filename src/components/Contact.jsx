import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h2 className='text-4xl font-bold text-center my-10'>Get In Touch</h2>
        <div className='text-center tracking-tight'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <p className='my-4'>{CONTACT.email}</p>
        </div>
    </div>
  )
}

export default Contact