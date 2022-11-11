import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle/useTitle';
import ShowCards from '../Shared/ShowCards/ShowCards';

const Services = () => {
    const [services, setSerVices] = useState([]);

    useTitle("Services - Aspia's Kitchen")
    useEffect(() => {

        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                setSerVices(data)

            })
    }, [])



    return (
        <div className='services'>
            <Container style={{ maxWidth: "900px" }}>
                <Row className='w-100' >
                    <Col >

                        <h2 className='my-3 fw-bold display-3'>Services</h2>
                        <Row className='g-4 py-5' xs={1} md={2} lg={3}>
                            {
                                services.map(service => <ShowCards key={service._id} service={service}></ShowCards>)
                            }

                        </Row>
                    </Col>

                </Row>
            </Container>

        </div>
    );
};

export default Services;