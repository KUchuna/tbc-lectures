'use client';
import ContactInput from '@/components/ContactInput.jsx'
import React from 'react'


export default function LoginForm(props) {
    
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    
    function handleUsername(e) {
        setUsername(e.target.value)
    }
    
    function handlePassword(e) {
        setPassword(e.target.value)
    }


    return (
        <form onSubmit={(e) => 
            {e.preventDefault() 
            props.handleclick(username, password)
            }}>
            <ContactInput 
                label='Username'
                placeholder='Enter your username'
                type='text'
                name='email'
                value={username}
                onchange={handleUsername}
                />
            <ContactInput 
                label='Password'
                placeholder='Enter your password'
                type='password'
                name='password'
                value={password}
                onchange={handlePassword}
                />
            <button className='login-verify' type='submit'>Log in</button>
        </form>
    )
}