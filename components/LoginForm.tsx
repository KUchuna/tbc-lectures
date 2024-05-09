'use client';
import ContactInput from '@/components/ContactInput.tsx'
import React from 'react'

interface LoginForm {
    handleclick: (username: string, password: string) => void;
    username?: string;
    password?: string;
}

export default function LoginForm(props: LoginForm) {
    
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    
    function handleUsername(e: React.ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value)
    }
    
    function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
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
            <div className='flex items-center justify-between mb-2'>
                <p>USERNAME: kminchelle</p>
                <p>PASSWORD: 0lelplR</p>
            </div>
            <button className='login-verify' type='submit'>Log in</button>
        </form>
    )
}