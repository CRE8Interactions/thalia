import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import pdf from '/public/images/icons/pdf.svg';

import styles from './File.module.scss'

export default function File({ title }) {

    return (
        <li className={styles.container}>
            <Link href="" className="text-decoration-none">
                <Image src={pdf} alt="" width="64" height="64" className='m-auto' />
                <p className={styles.title}>{title}</p>
            </Link>
        </li>
    );
}
