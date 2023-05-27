"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

import Stack from 'react-bootstrap/Stack';

import logo from "/public/images/logo.svg"
import poweredBy from "/public/images/icons/logo-blocktickets.svg"
import facebook from '/public/images/icons/facebook.svg';
import instagram from '/public/images/icons/instagram.svg';
import twitter from '/public/images/icons/twitter.svg';

import styles from './Footer.module.scss';

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <Stack className="spacer-sm d-flex-column justify-content-center align-items-center">
                <Link href="/">
                    <Image src={logo} alt="Southport Music Hall" />
                </Link>
                <address className='mt-3 fw-semi-bold'>
                    <p>200 Monticello Ave.</p>
                    <p>Jefferson, LA 70121</p>
                </address>
                <Stack direction="horizontal" as="ul" className={styles.socialIcons}>
                    <li>
                        <Link href="https://www.facebook.com/southporthall" target="_blank">
                            <Image src={facebook} alt="facebook" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.instagram.com/southporthall" target="_blank">
                            <Image src={instagram} alt="instagram" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.instagram.com/Southporthall" target="_blank">
                            <Image src={twitter} alt="twitter" />
                        </Link>
                    </li>
                </Stack>
                <div className={`${styles.poweredBy} d-flex flex-column flex-md-row align-items-center justify-content-center caption`}>
                    <p className="text-muted"><span>Powered by</span> <Image className="d-inline" src={poweredBy} alt="Blocktickets" /></p>
                </div>
            </Stack>
        </footer>
    );
}
