import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaStar, FaRegClock, FaMoneyBillAlt, FaArrowCircleLeft, FaPrint } from 'react-icons/fa';
import { Link, useLoaderData, useLocation } from 'react-router-dom';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import { AuthContext } from '../../UserContext/UserContext';

import useTitle from '../../hooks/useTitle/useTitle';
import aspi from '../../assets/aspi.png'
import SingleReview from '../Shared/SingleReview/SingleReview';


const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    let location = useLocation();
    const [newreviewdb, setnewReviewDb] = useState([])
    useTitle("Food Details - Aspia's Kitchen")
    useEffect(() => {
        fetch(`https://aspis-kitchen-server.vercel.app/review/${service._id}`)
            .then(res => res.json())
            .then(data => setnewReviewDb(data))
    }, [])
    console.log(service);
    const handleToReview = (event) => {
        const form = event.target;
        event.preventDefault();
        const review = form.review.value;
        const reviewDb = {
            email: user.email,
            review,
            serviceId: service._id,
            img: user.photoURL,
            name: user.displayName,
            title: service.name
        }
        form.reset();

        fetch('https://aspis-kitchen-server.vercel.app/review', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewDb)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    const insertedreview = reviewDb;
                    insertedreview._id = data.insertedId;
                    insertedreview.date = new Date().toLocaleString();
                    const newReview = [insertedreview, ...newreviewdb];
                    console.log(data.insertedId);
                    setnewReviewDb(newReview);

                }

            })
    }
    console.log(service);
    return (
        <div className=''>
            <Row className='py-5 w-100'>
                <Col xs={12} md={7} lg={10}>
                    <div className='container d-flex m-3  coursesContainer'>
                        <div className='   p-4 container rounded ' >
                            <div className='d-lg-flex'>
                                <div>
                                    <PhotoProvider>
                                        <PhotoView src={service.img}>
                                            <img src={service.img} alt="" style={{ maxWidth: "280px " }} className="rounded img-fluid" />
                                        </PhotoView>
                                    </PhotoProvider >

                                </div>
                                <div className='px-3 my-1'>
                                    <div className='p-2 '>
                                        <h1 className='bebas display-4'>{service.name}</h1>

                                    </div>

                                    <p className='text-secondary popin'>{service.details}</p>


                                    <div className='d-flex justify-content-between m-0'>

                                        <p className='gray-text  ' >Price : ${service.price}</p>

                                    </div>
                                    <div className=' '>
                                        <Link className='' to={`/services`} ><button className='rounded btn btn-danger m-3'>Go Back</button></Link>

                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>

                </Col>

                <Col xs={12} md={5} lg={2}>
                    <div className='w-100'>
                        <img src={aspi} className="img-fluid" alt="" />

                    </div>
                </Col>



            </Row>
            <div className=' my-2'>
                <Row className='container mx-auto' >

                    <Col xs={12} >
                        <h2 className='bebas  fs-1 my-2 px-2 py-1'>Reviews</h2>
                        {
                            (user && user.uid) ?
                                <>
                                    <form onSubmit={handleToReview}>


                                        <textarea className='w-100 p-2 m-2' placeholder='Write your review in 200 characters' style={{ resize: "none" }} maxLength="200" name="review" id="" rows="4"></textarea>
                                        <div className='d-flex justify-content-end'>

                                            <button type='submit' className='btn btn-info '>Add Review</button>
                                        </div>

                                    </form>
                                </> : <>
                                    <h5 className='fw-bold border p-3'> Please <Link state={{ from: location }} className='text-decoration-none ' to='/login'>Login</Link> to add a review</h5>

                                </>

                        }

                        {
                            newreviewdb.map(singlerev => <SingleReview key={singlerev._id} singlerev={singlerev}></SingleReview>)
                        }

                    </Col>

                </Row>
            </div>
        </div>
    );
};

export default ServiceDetails;