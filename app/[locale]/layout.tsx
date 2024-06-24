import '@/styles/App.css'
import { Providers } from './providers';
import { I18nProviderClient } from '../../locales/client';
import { ReactElement } from 'react';



export const metadata = {
  title: "Movan",
  description: "Elevating excellence in detailing car services",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ params: { locale }, children }: { params: { locale: string }, children: ReactElement }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body>
        <Providers>
          <I18nProviderClient locale={locale}>
            {children}
          </I18nProviderClient>
        </Providers>
      </body>
    </html>
  );
}
