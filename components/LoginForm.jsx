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
        <form>
            <ContactInput 
                label='Email'
                placeholder='Enter your email'
                type='email'
                name='email'
                value={email}
                onchange={handleEmail}
                />
            <ContactInput 
                label='Password'
                placeholder='Enter your password'
                type='password'
                name='password'
                value={password}
                onchange={handlePassword}
                />
            <button className='login-verify' type='submit' onClick={(e) => 
            {e.preventDefault() 
            props.handleclick(email, password)
            }}
            >Log in</button>
        </form>
    )
}