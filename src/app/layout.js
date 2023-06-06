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

export default function RootLayout({ children }) {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <html lang="en">
            <meta property="og:site_name" content="Southport Hall | Live Music and Event Venue" />
            <meta property="og:title" content="New Orleans Live Music &amp; Party Hall | Southport Hall" />
            <meta property="og:url" content="https://southporthall.com" />
		    <meta property="og:site_name" content="Southport Hall" />
		    <meta property="og:description" content="UPCOMING SHOWS WEDDINGS - PRIVATE PARTIES - LIVE ENTERTAINMENT Southport is located in Old Jefferson bounded roughly by Jefferson Highway on the north, the Mississippi River on the south, the Orleans-Jefferson parish line on the east and Dakin Street on the west. Southport" />
            <meta name="twitter:card" content="summary" />
		    <meta name="twitter:title" content="New Orleans Live Music &amp; Party Hall | Southport Hall" />
            <meta property="og:image" content="https://southport.nyc3.cdn.digitaloceanspaces.com/southport-logo.png" />
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
