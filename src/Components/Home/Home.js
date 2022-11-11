import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import headerpic from '../../assets/header.png'
import Services from '../Services/Services';
import ShowCards from '../Shared/ShowCards/ShowCards';
import offer from '../../assets/offer.png'
import pip1 from '../../assets/review/pep1.png'
import pip2 from '../../assets/review/pep2.png'
import pip3 from '../../assets/review/pep3.png'
import pip4 from '../../assets/review/pep4.png'
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import useTitle from '../../hooks/useTitle/useTitle';


const Home = () => {
    const services = useLoaderData();
    useTitle("Aspia's kitchen")
    console.log(services.length)
    return (
        <div>
            <div style={{ maxWidth: "1200px" }} className="container">
                <div className='d-block d-md-flex container justify-content-between align-items-center'>
                    <div className='p-3 text-md-start'>
                        <h1 className='fw-bold display-2 text-danger'>Aspia's Kitchen</h1>
                        <h1 className='fw-bold text-uppercase popin'>Full in the stomach <br /> good for your health</h1>
                        <p className=' text-secondary '>You can eat a variety of healthy food every day to feel good and maintain your health </p>
                    </div>
                    <div>

                        <img src={headerpic} alt="" className='' style={{ maxWidth: "360px" }} />
                    </div>
                </div>

                {/* service  */}
                <div className='my-5 yp-2 container '>
                    <h1 className='tomato popin fw-bold px-3'>Items You Can Get Here</h1>

                    <Container className="" style={{ maxWidth: "900px" }}>
                        <Row className='g-4 py-5' xs={1} md={2} lg={3}>
                            {
                                services.map(service => <ShowCards key={service._id} service={service}></ShowCards>)
                            }
                        </Row>
                        <div className="w-100 text-center pb-5">
                            <Link to='/services' className=''><button className='btn btn-info'>See More</button></Link>
                        </div>
                    </Container>
                </div>

                {/* offer */}
                <div className='container d-block d-md-flex justify-content-evenly' style={{ maxWidth: "900px" }}>

                    <h1 className='d-none d-md-flex bebas display-1 px-3'>Order <br /> This <br /> Now</h1>
                    <h1 className='d-md-none d-block  bebas display-1 px-3'>Order This Now</h1>
                    <div>

                        <Link to='/services'><img src={offer} className="img-fluid " style={{ maxWidth: "300px" }} alt="" /></Link>
                    </div>
                </div>

            </div>
            <div className='container ' style={{ maxWidth: "900px" }} >
                <h1 className='bebas fw-bold'>Reviews</h1>
                <div>


                    <Row md={2}>
                        <Col>
                            <div className='d-block d-md-flex'>
                                <img src={pip1} className="rounded-circle m-2" style={{ width: "40px", height: "40px" }} alt="" />
                                <p className='text-secondary bebas'><q>Just I get delicious Food From her EveryDay</q>   <br />-ALina</p>

                            </div>
                        </Col>
                        <Col>
                            <div className='d-block d-md-flex'>
                                <img src={pip2} className="rounded-circle m-2" style={{ width: "40px", height: "40px" }} alt="" />
                                <p className='text-secondary bebas'><q>Every day her food makes me happy</q>   <br />-Max</p>

                            </div>
                        </Col>
                        <Col>
                            <div className='d-block d-md-flex'>
                                <img src={pip3} className="rounded-circle m-2" style={{ width: "40px", height: "40px" }} alt="" />
                                <p className='text-secondary bebas'><q>My Childrens love her</q>   <br />-Jerry</p>

                            </div>
                        </Col>
                        <Col>
                            <div className='d-block d-md-flex'>
                                <img src={pip4} className="rounded-circle m-2" style={{ width: "40px", height: "40px" }} alt="" />
                                <p className='text-secondary bebas'><q>Do you wana live a healthy life? Take her food</q>   <br />-Cleo</p>

                            </div>
                        </Col>

                    </Row>

                </div>
            </div>
            <div className='footer bg-dark text-center'>
                <div>

                    <Link to='https://www.facebook.com/' className='text-d text-decoration-none text-white p-3 rounded'> <FaFacebookSquare /> </Link>
                    <Link to='https://www.instagram.com/' className='text-decoration-none text-white'><FaInstagramSquare /> </Link>
                </div>
                <h6 className='text-white my-2'>+880182939339</h6>
                <h1 className='tomato display-4 fw-bold  text-center p-2'>Aspia's Kitchen</h1>
            </div>
        </div >
    );
};

export default Home;