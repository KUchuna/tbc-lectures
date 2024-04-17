'use client';
import ContactInput from '@/components/ContactInput.jsx'
import React from 'react'


export default function LoginForm(props) {
    
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    
    function handleEmail(e) {
        setEmail(e.target.value)
    }
    
    function handlePassword(e) {
        setPassword(e.target.value)
    }

    return (
        <>
            <ContactInput 
                label='Email'
                placeholder='Enter your email'
                type='email'
                name='email'
                onchange={handleEmail}
                />
            <ContactInput 
                label='Password'
                placeholder='Enter your password'
                type='password'
                name='password'
                onchange={handlePassword}
                />
            <button className='profile-verify' type='submit' onClick={() => props.handleclick(email, password)}>VERIFY</button>
        </>
    )
}