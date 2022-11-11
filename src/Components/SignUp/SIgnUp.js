import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../UserContext/UserContext';
import { FaGoogle, FaGithub } from 'react-icons/fa'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import useTitle from '../../hooks/useTitle/useTitle';
import aspi from '../../assets/login.png'

const SignUp = () => {
    const authInfo = useContext(AuthContext);
    const [errormsg, setErrorMsg] = useState('');
    const { SignInGoogle, SignInGithub, setLoading, logIn, signUp, updateInfo } = authInfo;
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [picurl, setPicurl] = useState('https://i.ibb.co/7p7VcZv/2022-11-11-14-33-1.png');
    useTitle("Sign Up - Aspia's Kitchen")


    const handleToSignUp = (event) => {
        const form = event.target;
        event.preventDefault();
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;

        if (name.split(' ').length < 2) {
            setErrorMsg('You should provide at least two words: First Name & Last Name ')
            return;
        }

        signUp(email, password)
            .then(result => {
                handletoUpdate(name, picurl);
                const user = result.user;
                const currentuser = {
                    email: user.email
                }
                console.log(currentuser)
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentuser)
                })
                    .then(res => res.json())
                    .then(data => {
                        toast("succssfully logged In");
                        localStorage.setItem('accessToken', data.token)
                        navigate(from, { replace: true });
                        setLoading(false);

                    })

            }).catch(error => { setErrorMsg(error.message); toast.error("Failed to Sign In") })


    }
    const handletoUpdate = (name, photourl) => {
        const profile = {
            displayName: name,
            photoURL: photourl
        }
        updateInfo(profile)
            .then(() => { })
            .catch(er => { })
    }


    return (
        <div>
            <Container style={{ maxWidth: "900px" }}>
                <div className='d-block d-md-flex justify-content-around align-items-center'  >


                    <Form onSubmit={handleToSignUp} style={{ maxWidth: "440px" }} className="mx-auto my-5 gray-text border border-info p-4 rounded" >
                        <h2 className='my-3'>Reistration</h2>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="type" name='name' placeholder="Full name" required />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" required />

                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formurl">
                            <Form.Label>Select your Cartoon</Form.Label>

                            <div className=' p-2 text-center'>
                                <img className={`p-1 ${picurl === 'https://i.ibb.co/Sm0zNsL/2022-11-11-14-33.png' ? "border  border-danger p-1" : ""}   `} style={{ height: "50px", width: "50px" }} onClick={() => setPicurl('https://i.ibb.co/Sm0zNsL/2022-11-11-14-33.png')} src="https://i.ibb.co/Sm0zNsL/2022-11-11-14-33.png" alt="" />
                                <img className={`p-1 ${picurl === 'https://i.ibb.co/7p7VcZv/2022-11-11-14-33-1.png' ? "border border-danger  p-1" : ""} `} style={{ height: "50px", width: "50px" }} onClick={() => setPicurl('https://i.ibb.co/7p7VcZv/2022-11-11-14-33-1.png')} src="https://i.ibb.co/7p7VcZv/2022-11-11-14-33-1.png" alt="" />
                                <img className={`p-1 ${picurl === 'https://i.ibb.co/1X0Rhbg/2022-11-11-14-34.png' ? 'border border-danger  p-1 ' : ''}`} style={{ height: "50px", width: "50px" }} onClick={() => setPicurl('https://i.ibb.co/1X0Rhbg/2022-11-11-14-34.png')} src="https://i.ibb.co/1X0Rhbg/2022-11-11-14-34.png" alt="" />
                                <img className={`p-1 ${picurl === `https://i.ibb.co/nQ0JZXm/2022-11-11-14-34-1.png` ? 'border  border-danger p-1' : ""}`} style={{ height: "50px", width: "50px" }} onClick={() => setPicurl('https://i.ibb.co/nQ0JZXm/2022-11-11-14-34-1.png')} src="https://i.ibb.co/nQ0JZXm/2022-11-11-14-34-1.png" alt="" />

                            </div>



                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            {
                                errormsg !== '' && <p className='text-warning'>{errormsg}</p>
                            }
                        </Form.Group>
                        <div className='text-center'>
                            <Button variant="info" type="submit">
                                Sign Up
                            </Button>
                        </div>
                        <p className='my-3 p-2'><small>Already have an account? <Link className='text-decoration-none' to="/login"> create an account</Link> </small></p>
                        <SocialLogin></SocialLogin>
                        <h2 className='p-2 fw-bold text-center text-danger'>Aspia's Kitchen
                        </h2>

                    </Form>
                    <div>
                        <img src={aspi} className="img-fluid" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SignUp;