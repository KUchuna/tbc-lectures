"use client"

import Image from "next/image"
import hamsvg from '@/public/assets/ham.svg'
import hamWhitesvg from '@/public/assets/hamWhite.svg'
import Link from "next/link"
import { useI18n } from "@/locales/client"
import { useUser } from "@auth0/nextjs-auth0/client"
import React from "react"
import logoutsvg from '@/public/assets/logout.svg'
import twittersvg from "@/public/assets/twitter.svg"
import fbsvg from "@/public/assets/facebook.svg"
import linkedinsvg from "@/public/assets/linkedin.svg"
import redditsvg from "@/public/assets/reddit.svg"
import { useTheme } from "next-themes"
import { checkAvatarAction } from '@/app/actions.ts'


export default function Hamburger() {

    const t = useI18n()
    const { resolvedTheme } = useTheme()

    const {user} = useUser()


    const [avatar, setAvatar] = React.useState('')


    React.useEffect(() => {
        async function fetchAvatarExists() {
            try {
              const result = await checkAvatarAction();
              
              if (user) {
                setAvatar(result)
            }
            } catch (error) {
              console.error('Error checking avatar:', error);
            }
          }
      
          fetchAvatarExists();
    }, [user]);


    let isAdmin;

    if(user) {
        isAdmin = Array.isArray(user.role) && user.role.includes("admin");
    }
    

    const [open, setOpen] = React.useState<boolean>(false)

    function handleMenu() {
        setOpen(!open)
    }

    return (
        <div className="md:hidden">
            <Image src={resolvedTheme=='light' ? hamsvg : hamWhitesvg} alt='menu' className='md:hidden cursor-pointer' onClick={handleMenu}/>
            <div className={`dark:bg-slate-800  shadow-hamburger absolute bg-section-grey left-0 top-[94px] right-0 overflow-hidden ${open ? "max-h-[700px] overflow-y-auto" : "max-h-0"} transition-[max-height] duration-[300ms] ease-[ease]`}>
                {user &&
                    <div className="flex px-[16px] pt-[32px] items-center">
                        {avatar && 
                        <Link href='/profile'>
                            <Image src={avatar} alt='profile picture' priority quality={100} width={30} height={30} className="w-[48px] h-[48px] rounded-full"/>
                        </Link>}
                        <Link href='/profile'>
                            <div className="flex flex-col ml-[12px]">
                                <span className="font-bold text-xl">{user.name}</span>
                                <span className="text-hamburger-list text-lg dark:text-slate-300">{user.email}</span>
                            </div>
                        </Link>
                        <a href={`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`} className="ml-auto">
                            <Image src={logoutsvg} alt="logout" width={60} height={60}/>
                        </a>
                    </div>
                }
                
                <ul className={` border-b-[1px] border-b-border-grey flex flex-col gap-[20px] px-[16px] py-[32px] transition-opacity duration-[300ms] ease-[ease-in-out] ${open ? "delay-[150ms] opacity-100" : "opacity-0"}`}>
                        <li className='text-hamburger-list dark:text-slate-300'><Link href='/'>{t('home')}</Link></li>
                        <li className='text-hamburger-list dark:text-slate-300'><Link href='/services'>{t('services')}</Link></li>
                        <li className='text-hamburger-list dark:text-slate-300'><Link href='/blogs'>{t('Blog')}</Link></li>
                        <li className='text-hamburger-list dark:text-slate-300'><Link href='/contact'>{t('contact')}</Link></li>
                        <li className='text-hamburger-list dark:text-slate-300'><a href='/#faq'>{t('faq')}</a></li>
                        {isAdmin && <li className=''><Link href='/admin'>{t('admin')}</Link></li>}
                </ul>
                <ul className="flex px-[16px] w-full justify-center gap-[32px] items-center py-[32px]">
                    <li><Image src={twittersvg} alt='twitter' width={30} height={30}/></li>
                    <li><Image src={fbsvg} alt='fb' width={30} height={30}/></li>
                    <li><Image src={linkedinsvg} alt='linkedin' width={30} height={30}/></li>
                    <li><Image src={redditsvg} alt='linkedin' width={30} height={30}/></li>
                </ul>
                {!user &&
                    <div className="px-[16px] flex flex-col gap-[12px] pb-[40px]">
                        <a href={`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`} className="uppercase bg-light-orange text-white font-bold h-[44px] py-[10px] rounded-xl text-center">
                            log in
                        </a>
                    </div>
                }
                    
            </div>
        </div>
    )
}
