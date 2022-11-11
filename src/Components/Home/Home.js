import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import headerpic from '../../assets/header.png'
import Services from '../Services/Services';
import ShowCards from '../Shared/ShowCards/ShowCards';

const Home = () => {
    const services = useLoaderData();
    console.log(services.length)
    return (
        <div>
            <div className='d-block d-md-flex container justify-content-around align-items-center'>
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
            <div className='my-5 yp-2 container'>
                <h1 className='tomato popin fw-bold'>Items You Can Get Here</h1>

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

        </div>
    );
};

export default Home;