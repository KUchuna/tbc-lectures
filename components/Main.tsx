import '../styles/Main.css'
import { getScopedI18n } from '../locales/server.ts'
import { getCurrentLocale} from '@/locales/server'

export default async function Main() {

    const t = await getScopedI18n('main')
    const currentLocale = getCurrentLocale()

    return (
        <section className='main-container parent-flex-row-center dark:bg-slate-700'>
            <div className='parent-max-width'>
                <div className='main-image'>
                    <h1 className={currentLocale=="ge" ? "text-xs leading-[1.15] mt-[-30px]" : ""}>{t('title')}</h1>
                    <p>
                        {t('description')}
                    </p>
                {/* <Filter /> */}
                </div>
            </div>
        </section>
    )
} 