"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

import logo from "/public/images/logo.png"
import poweredBy from "/public/images/icons/logo-blocktickets.svg"
import facebook from '/public/images/icons/facebook.svg';
import instagram from '/public/images/icons/instagram.svg';
import twitter from '/public/images/icons/twitter.svg';

import styles from './Footer.module.scss';

export default function Footer() {

    return (
        <footer className={`container ${styles.footer}`}>
            <Card body className='card-lg'>
                <Stack className="d-flex-column flex-lg-row gap-lg-5 align-items-center align-items-lg-stretch">
                    <Link href="/">
                        <Image src={logo} width="191" height="82" alt="Thalia Mara Hall logo" className={styles.logo} />
                    </Link>
                    <Stack className={styles.info}>
                        <h6 className='mt-3 mt-lg-0 mt-md-4 mb-1 headline-6'>Thalia Mara Hall</h6>
                        <Stack gap={2} className={`gap-md-1 ${styles.address}`}>
                            <address className='m-0 text-muted fw-medium'>
                                <p>255 East Pascagoula Street, <span className="d-block d-md-inline">Jackson, MS 39201</span></p>
                            </address>
                            <Stack direction="horizontal" as="ul" className={styles.socialIcons}>
                                <li>
                                    <Link href="https://www.facebook.com/ThaliaMaraHall/" target="_blank">
                                        <Image src={facebook} alt="facebook" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://twitter.com/thaliahall" target="_blank">
                                        <Image src={twitter} alt="twitter" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/thaliamarahall/" target="_blank">
                                        <Image src={instagram} alt="instagram" />
                                    </Link>
                                </li>
                            </Stack>
                        </Stack>
                    </Stack>
                    <div className={`${styles.poweredBy} d-flex flex-column flex-md-row align-items-center justify-content-center caption`}>
                        <p className="text-muted text-center text-lg-end px-lg-4"><span>Powered by</span> <Image src={poweredBy} width="132" height="29" alt="Blocktickets logo" /></p>
                    </div>
                </Stack>
            </Card>
        </footer>
    );
}
