import React from 'react';
import { Button, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
const ShowCards = ({ service }) => {
    const { img, _id, price, name, details } = service;

    return (
        <Col>
            <Card className='' bg="light" key="light">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <Card.Img variant="top" src={img} style={{ height: "250px" }} />
                        {/* <img src="/1-thumbnail.jpg" alt="" /> */}
                    </PhotoView>
                </PhotoProvider>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {
                            (details.length > 100) ? details.slice(0, 100) + '...' : details

                        }

                    </Card.Text>
                    <div>
                        <p>${price}</p>

                    </div>

                </Card.Body>
                <Card.Footer>
                    {/* <small className="text-muted">Last updated 3 mins ago</small>
                     */}
                    <Link to={`/services/${_id}`} ><Button className='w-100  btn btn-danger popin'>Details</Button></Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ShowCards;