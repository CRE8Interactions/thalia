"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

import Link from 'next/link'
import Image from 'next/image';

import { useWindowSize } from '@/utilities/hooks';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import desktopLogo from '/public/images/logo.png';
import mobileLogo from '/public/images/logo-sm.png';

export default function Navigation() {

    const windowSize = useWindowSize();

    const logo = windowSize < 768 ? mobileLogo : desktopLogo;

    const router = useRouter();

    return (
        <Navbar collapseOnSelect expand="md" className='navigation'>
            <Container>
                <Link href="/" className="navbar-brand">
                    <Image src={logo} alt="Southport Hall" width="67" height="92" className='logo' />
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" id="navbar-toggle" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav as="nav" activeKey={router.pathname} className='mt-3 ms-auto'>
                        <ul
                            role="main-navigation"
                            className="d-flex flex-column flex-md-row align-items-md-center">
                            <li>
                                <Link href="/" passHref legacyBehavior>
                                    <Nav.Link>Calendar</Nav.Link>
                                </Link>
                            </li>
                            <li>
                                <Link href="/private-events" passHref legacyBehavior>
                                    <Nav.Link>Private events</Nav.Link>
                                </Link>
                            </li>
                            <li>
                                <Link href="/history" passHref legacyBehavior>
                                    <Nav.Link>History</Nav.Link>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us" passHref legacyBehavior>
                                    <Nav.Link>Contact us</Nav.Link>
                                </Link>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
