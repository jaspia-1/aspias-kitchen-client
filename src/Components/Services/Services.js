import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle/useTitle';
import { AuthContext } from '../../UserContext/UserContext';
import ShowCards from '../Shared/ShowCards/ShowCards';

const Services = () => {
    const [services, setSerVices] = useState([]);
    const { loading, setLoading } = useContext(AuthContext);


    useTitle("Services - Aspia's Kitchen")
    useEffect(() => {
        setLoading(true)

        fetch(`https://aspis-kitchen-server.vercel.app/services`)
            .then(res => res.json())
            .then(data => {
                setSerVices(data)
                setLoading(false)


            })
    }, [])

    if (loading) {

        return <div className='w-100 d-flex '>

            <div className="spinner-border mx-auto my-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    }


    return (
        <div className='services'>
            <Container style={{ maxWidth: "900px" }}>
                <Row className='w-100' >
                    <Col >

                        <h2 className='my-3 fw-bold display-3'>All Foods</h2>
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