'use server'

import loginsvg from '@/public/assets/login.svg'
import '@/styles/Login.css'
import React from 'react'
import Image from 'next/image'
import LoginForm from '@/components/LoginForm'
import { login } from '@/app/actions'
import { AUTH_COOKIE_KEY } from '@/constants'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Login() {
    const cookieStore = cookies()
    const cookie = cookieStore.get(AUTH_COOKIE_KEY)
    
    if(cookie?.value) {
        redirect ('/')
    }
  


    const handleClick = async (username, password, e) => {
        'use server'
        if(username != "" && password != "") {
            await login(username, password)
        }
    }

    return (     
        <div className="profile-page-container parent-flex-column-center">
            <div className="profile-title-container parent-flex-column-center">
                <Image src={loginsvg} alt="" />
                <h4 className='profile-title'>Welcome back!</h4>
            </div>
            <div className='profile-form-container'>
                <LoginForm 
                    handleclick={handleClick}
                    />
            </div>
        </div>
    )
}