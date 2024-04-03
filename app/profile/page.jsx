"use client";

import login from '@/assets/login.svg'
import ContactInput from '@/components/ContactInput.jsx'
import '@/styles/Profile.css'
import React from 'react'
import Image from 'next/image'

export default function Profile() {

    const [info, setInfo] = React.useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmed: ""
    })

    function handleChange(event) {
        const { name, value } = event.target
        setInfo(prevState =>  ({...prevState, [name]: value}))
    }

    function handleClick() {
        if(info.confirmed != info.password) {
            alert("passwords do not match!")
        }
    }

    return (
        <div className="profile-page-container parent-flex-column-center">
            <div className="profile-title-container parent-flex-column-center">
                <Image src={login} alt="" />
                <h4 className='profile-title'>Create new account</h4>
            </div>
            <div className='profile-form-container'>
                <ContactInput 
                    label='Name'
                    placeholder='Enter your full name'
                    value={info.name}
                    onchange={handleChange}
                    name='name'
                />
                <ContactInput 
                    label='Email'
                    placeholder='Enter your email'
                    type='email'
                    value={info.email}
                    onchange={handleChange}
                    name='email'
                />
                <ContactInput 
                    label='Phone number'
                    placeholder='Enter your phone number'
                    value={info.phone}
                    onchange={handleChange}
                    name='phone'
                />
                <ContactInput 
                    label='Password'
                    placeholder='Enter your password'
                    type='password'
                    value={info.password}
                    onchange={handleChange}
                    name='password'
                />
                <ContactInput 
                    label='Confirm password'
                    placeholder='Confirm your password'
                    type='password'
                    value={info.confirmed}
                    onchange={handleChange}
                    name='confirmed'
                />
                <button className='profile-verify' onClick={handleClick}>VERIFY</button>
            </div>
        </div>
    )
}