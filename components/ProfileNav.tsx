import Link from "next/link";
import Image from "next/image";
import profilesvg from '@/public/assets/navprofile.svg'
import likesvg from '@/public/assets/navlike.svg'
import bookingssvg from '@/public/assets/bookings.svg'

export default function ProfileNav() {
    return (
        <div className="border-r-[1px] pr-[20px] py-[10px]">
            <ul className="flex flex-col gap-3">
                <Link href={'/profile'}>
                    <li className="bg-slate-100 p-3 rounded-xl cursour-pointer text-gray-700 font-bold hover:bg-slate-200 transition-colors duration-300 flex items-center gap-2">
                        <Image src={profilesvg} width={30} height={30} alt="profile" />
                        Profile
                    </li>
                </Link>
                <Link href={'/bookings'}>
                    <li className="bg-slate-100 p-3 rounded-xl cursour-pointer text-gray-700 font-bold hover:bg-slate-200 transition-colors duration-300 flex items-center gap-2">
                        <Image src={bookingssvg} width={30} height={30} alt="profile" />
                        Bookings
                    </li>
                </Link>
                <Link href={'/profile/liked-blogs'}>
                    <li className="bg-slate-100 p-3 rounded-xl cursour-pointer text-gray-700 font-bold hover:bg-slate-200 transition-colors duration-300 flex items-center gap-2">
                        <Image src={likesvg} width={30} height={30} alt="profile" />
                        Liked blogs
                    </li>
                </Link>
            </ul>
        </div>
    )
}