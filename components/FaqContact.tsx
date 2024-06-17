import faqcontact from '@/public/assets/faqcontact.png'
import Image from 'next/image'
import Link from 'next/link'

export default function FaqContact() {
    return (
        <div className="bg-section-grey dark:bg-slate-700 rounded-2xl px-[16px] md:px-0 py-[32px] flex flex-col justify-center items-center w-full max-w-[1216px]">
            <Image src={faqcontact} alt='avatar'/>
            <h3 className='mt-[32px] mb-[10px] font-bold text-2xl dark:text-slate-100'>Still have questions?</h3> 
            <p className='mb-[32px] text-slate-500'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            <Link href='/contact' className='font-bold uppercase bg-light-orange py-[12px] px-[20px] text-white rounded-lg'>Get in touch</Link>
        </div>
    )
}