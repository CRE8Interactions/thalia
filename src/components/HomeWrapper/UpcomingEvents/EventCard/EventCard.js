import React from 'react';
import Link from 'next/link';
import moment from "moment";

import { formatDateTime, formatCurrency } from '@/utilities/helpers';

import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function EventCard({ event }) {

    return (
        <Link href={`https://blocktickets.xyz/e/${event.seoUrl}/${event.shortCode}`} target="_blank" className='text-decoration-none text-reset'>
            <Card className='event-card'>
                <Card.Img
                    variant='top'
                    src={event.image.url}
                    width={event.image.width}
                    height={event.image.height}
                    alt={event.name}
                />
                <Card.Body>
                    <Row className="flex-grow-1">
                        <Col xs={2}>
                            <Stack className='align-items-center text-center'>
                                <Card.Text>
                                    <span className='text-uppercase text-primary caption d-block'>{moment(event.start).format('MMM')}</span>
                                    <span className="h4">{moment(event.start).date()}</span>
                                </Card.Text>
                            </Stack>
                        </Col>
                        <Col xs={10} className='d-flex-column justify-content-between'>
                            <div className='d-flex-column'>
                                <Card.Title as="h5">{event.name}</Card.Title>
                                <Card.Subtitle as="h6">{formatDateTime(moment(event.start))} - {formatDateTime(moment(event.end), 'timeOnly')}</Card.Subtitle>
                            </div>
                            <Row>
                                <Col>
                                    <span className='small mb-1 text-primary d-block'>Concert Hall</span>
                                    <span className='fw-bold normal'>{formatCurrency(18)}</span></Col>
                                <Col className="d-flex align-items-end justify-content-end">
                                    <span className='caption text-muted'>Age 18+</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Link>
    );
}
