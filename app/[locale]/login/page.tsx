'use server'

import loginsvg from '@/public/assets/login.svg'
import '@/styles/Login.css'
import React from 'react'
import Image from 'next/image'
import LoginForm from '@/components/LoginForm'
import { login } from '../../actions'
import { AUTH_COOKIE_KEY } from '@/constants'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Login() {
    const cookieStore = cookies()
    const cookie = cookieStore.get(AUTH_COOKIE_KEY)
    
    if(cookie?.value) {
        redirect ('/')
    }


    const handleClick = async (username:string, password:string) => {
        'use server'
        if(username != "" && password != "") {
            await login(username, password)
        }
    }

    return (     
        <div className="login-page-container parent-flex-column-center dark:bg-slate-900">
            <div className="login-title-container parent-flex-column-center">
                <Image src={loginsvg} alt="" />
                <h4 className='text-4xl font-bold dark:text-slate-300'>Welcome back!</h4>
            </div>
            <div className='login-form-container dark:bg-slate-700'>
                <LoginForm 
                    handleclick={handleClick}
                    />
            </div>
        </div>
    )
}