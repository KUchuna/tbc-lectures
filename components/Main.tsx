import '../styles/Main.css'
import { getScopedI18n } from '../locales/server.ts'
import Partners from './Partners.tsx'

export default async function Main() {

    const t = await getScopedI18n('main')


    return (
        <section className='bg-[#F2F4F7] xl:pt-10 xl:pb-24 xl:px-28 md:rounded-br-[50px] md:rounded-bl-[50px] rounded-br-[24px] rounded-bl-[24px] parent-flex-row-center dark:bg-slate-700 md:px-[40px] md:py-[40px]'>
            <div className='xl:max-w-[1216px] w-full lg:max-w-[860px]'>
                <div className='hidden main-image md:px-[38px] md:py-[36px] xl:py-[72px] xl:px-[96px] md:flex flex-col justify-center items-center'>
                    <h1 className="font-bold xl:text-[5rem] xl:leading-[1.15] mt-[-30px] md:text-4xl text-[5rem]">{t('title')}</h1>
                    <p>
                        {t('description')}
                    </p>
                </div>
                <Partners />
            </div>
        </section>
    )
} 