'use client';
import ContactInput from '@/components/ContactInput.jsx'
import React from 'react'
import { useRouter } from 'next/navigation';
import Login from '../scripts/login.js'

export default function LoginForm(props) {
    
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    
    function handleUsername(e) {
        setUsername(e.target.value)
    }
    
    function handlePassword(e) {
        setPassword(e.target.value)
    }

    const router = useRouter()

    function handleLogin(e) {
        e.preventDefault()
        Login(username, password).then(() => router.push('/'))
    }



    return (
        <form onSubmit={handleLogin}>
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