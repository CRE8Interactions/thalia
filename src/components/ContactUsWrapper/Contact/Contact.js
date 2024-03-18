import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import map from '/public/images/map.png';

import styles from './Contact.module.scss';

export default function Contact() {

    return (
        <section>
            <Card body className={`${styles.card} card--light card-sm`}>
                <Row className='grid-container gx-md-4'>
                    <Col xs={12} md={6} lg={4}>
                        <Card.Title as="h5" className='card-title-lg'>Thalia Mara Hall</Card.Title>
                        <div className='card-text'>
                            <address className='lh-normal'>
                                <p>255 East Pascagoula Street</p>
                                <p>Jackson, MS 39201</p>
                            </address>
                            <address>
                                <p className='fw-bold'>Email:</p>
                                <a href="mailto:info@thaliamara.net" className='text-decoration-none'>info@thaliamara.net</a>
                            </address>
                            <address>
                                <p className='fw-bold'>Phone:</p>
                                <p>601-960-1537</p>
                            </address>
                        </div>
                        <Link href="https://www.google.com/maps/dir/43.4267291,-79.7409268/thalia+hall/@42.3859073,-88.9762437,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x880e2cffdb62b721:0x9a4a94db5d09cf36!2m2!1d-87.6575089!2d41.8576924?entry=ttu" target="_blank" className='btn btn-outline-light mt-2 w-100'>Go to Google Maps</Link>
                    </Col>
                    <Col xs={12} md={6} lg={8} className={`${styles.map}`}>
                        <Image
                            src={map}
                            quality={100}
                            alt="Map of Thalia Mara   Hall"
                            className={`${styles.image} image`}
                            width="742"
                            height="301"
                            priority
                        />
                    </Col>
                </Row>
            </Card>
        </section>
    );
}
