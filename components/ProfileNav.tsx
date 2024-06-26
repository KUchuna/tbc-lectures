import Link from "next/link";
import Image from "next/image";
import profilesvg from '@/public/assets/navprofile.svg'
import likesvg from '@/public/assets/navlike.svg'
import bookingssvg from '@/public/assets/bookings.svg'
import { getScopedI18n } from "@/locales/server";


export default async function ProfileNav() {

    const scopedT = await getScopedI18n('profilenav')

    return (
        <div className="border-r-[1px] md:pr-[20px] pr-[16px] md:min-w-[230px] min-w-[170px]">
            <ul className="flex flex-col gap-3">
                <Link href={'/profile'}>
                    <li className="bg-slate-100 text-sm md:text-lg md:p-3 p-2 rounded-xl cursour-pointer text-gray-700 font-bold hover:bg-slate-200 transition-colors duration-300 flex items-center md:gap-2 gap-1">
                        <Image src={profilesvg} width={30} height={30} alt="profile"  className="md:w-[30px] md:h-[30px] w-[24px] h-[24]px"/>
                        {scopedT('profile')}
                    </li>
                </Link>
                <Link href={'/bookings'}>
                    <li className="bg-slate-100 text-sm md:text-lg md:p-3 p-2 rounded-xl cursour-pointer text-gray-700 font-bold hover:bg-slate-200 transition-colors duration-300 flex items-center md:gap-2 gap-1">
                        <Image src={bookingssvg} width={30} height={30} alt="bookings"  className="md:w-[30px] md:h-[30px] w-[24px] h-[24]px"/>
                        {scopedT('bookings')}
                    </li>
                </Link>
                <Link href={'/profile/liked-blogs'}>
                    <li className="bg-slate-100 text-sm md:text-lg md:p-3 p-2 rounded-xl cursour-pointer text-gray-700 font-bold hover:bg-slate-200 transition-colors duration-300 flex items-center md:gap-2 gap-1">
                        <Image src={likesvg} width={30} height={30} alt="liked blogs"  className="md:w-[30px] md:h-[30px] w-[24px] h-[24]px"/>
                        {scopedT('blogs')}
                    </li>
                </Link>
            </ul>
        </div>
    )
}