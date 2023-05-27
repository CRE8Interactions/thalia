import React from 'react';

import styles from './Header.module.scss';

export default function Header() {

    return (
        <header className={styles.jumbotron}>
            <h1 className='heading heading-lg text-white'>Private Events</h1>
        </header>
    );
}
