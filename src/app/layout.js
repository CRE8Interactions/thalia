'use client'

import { useEffect } from 'react';
import { Inter, DM_Sans } from 'next/font/google'
// import Script from 'next/script';

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
            <meta property="og:site_name" content="Thalia Mara Hall" />
            <meta property="og:title" content="Thalia Mara Hall" />
            <meta property="og:url" content="https://thaliamarahall.com" />
            <meta property="og:site_name" content="THALIA MARA HALL" />
            <meta property="og:description" content="Thalia Mara Hall is the Municipal Auditorium of the City of Jackson and a facility managed by the Department of Human and Cultural Services.The 2,040 seat theater is located in the downtown arts and cultural district of Jackson. Thalia Mara Hall was built in 1968 and was called the Jackson Municipal Auditorium. In 1975, the Jackson Ballet Guild invited Miss Thalia Mara, a Chicago native with an extensive career as a performer in the United States and abroad, to develop a professional ballet company and school in the state of Mississippi." />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Thalia Mara Hall is the Municipal Auditorium of the City of Jackson and a facility managed by the Department of Human and Cultural Services.The 2,040 seat theater is located in the downtown arts and cultural district of Jackson. Thalia Mara Hall was built in 1968 and was called the Jackson Municipal Auditorium. In 1975, the Jackson Ballet Guild invited Miss Thalia Mara, a Chicago native with an extensive career as a performer in the United States and abroad, to develop a professional ballet company and school in the state of Mississippi." />
            <meta property="og:image" content="https://premier-prod.s3.us-east-1.wasabisys.com/styles/500w/s3/venues/thalia_mara_hall.png?itok=JbbN1Q_h" />
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
                {/* <Script
                    id="fb-pixel"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '842729400339292');
                    fbq('track', 'PageView');
                    `,
                    }}
                /> */}
            </body>
        </html>
    )
}
