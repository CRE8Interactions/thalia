'use client'

import { useEffect } from 'react';
import { Inter, DM_Sans } from 'next/font/google'

import { Navigation, Footer } from '@/components'

import '@/scss/main.scss';

// define google fonts 
const inter = Inter({
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin']
})

const dm_sans = DM_Sans({
    weight: ['700'],
    style: ['normal', 'italic'],
    subsets: ['latin']
})

// export const metadata = {
//     title: 'Southport Hall',
//     description: 'New Orleans Live Music & Party',
// }

export default function RootLayout({ children }) {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <html lang="en">
            <body>
                <style jsx global>{`
                :root {
                    --inter-font: ${inter.style.fontFamily};
                    --dmSans-font: ${dm_sans.style.fontFamily};
                }
            `}</style>

                <Navigation />
                <main className='container'>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
