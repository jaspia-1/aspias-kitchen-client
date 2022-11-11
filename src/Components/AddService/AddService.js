import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle/useTitle';
import aspi from '../../assets/login.png'

const AddService = () => {
    let navigate = useNavigate();
    useTitle("Add Service - Aspia's kitchen")
    const handleToadd = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.thumbnailurl.value;
        const details = form.details.value;
        const price = form.price.value;
        const service = {
            name, img, details, price
        }
        console.log(service);
        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {

                    toast("Successfully Added");
                    navigate('/services', { replace: true });


                }

            })

    }
    return (
        <div className=' p-5'>
            <div className='d-block d-md-flex justify-content-around align-items-center '>
                <Form onSubmit={handleToadd} style={{ maxWidth: "940px" }} className="mx-auto  gray-text border-primary border p-4 rounded" >
                    <h2 className='my-3'>Add Service</h2>
                    <Form.Group className="mb-3" controlId="formBasictitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control className=' ' type="text" name='name' placeholder="Title" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicdescription">
                        <Form.Label>Description</Form.Label>
                        <textarea className='w-100 p-2 m-2  ' placeholder='Give details in 550 characters' style={{ resize: "none" }} maxLength="550" name="details" id="" rows="11" required></textarea>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasictitle">
                        <Form.Label>Price</Form.Label>
                        <Form.Control className=' ' type="number" name='price' placeholder="price" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasictitle">
                        <Form.Label>Thumbnail Url</Form.Label>
                        <Form.Control className=' ' type="text" name='thumbnailurl' placeholder="Thumbnail Url" required />

                    </Form.Group>
                    <div className='text-center'>

                        <Button variant="outline-info" type="submit" >
                            Add
                        </Button>
                    </div>


                </Form>
                <div>

                    <img src={aspi} className='img-fluid' alt="" />
                    <h3 className='text-secondary fw-bold'>Taste Good Quality Food Every Day</h3>
                </div>
            </div>
        </div>
    );
};

export default AddService;