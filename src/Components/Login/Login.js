import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FaGoogle, FaGithub } from 'react-icons/fa'
import { AuthContext } from '../../UserContext/UserContext';
import { toast } from 'react-toastify';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import useTitle from '../../hooks/useTitle/useTitle';
import aspi from '../../assets/login.png'

const Login = () => {
    const authInfo = useContext(AuthContext);
    const [errormsg, setErrorMsg] = useState('');
    const { SignInGoogle, SignInGithub, setLoading, logIn } = authInfo;
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useTitle("Login - Aspis'kitchen")
    const handleToLogin = (event) => {
        const form = event.target;
        event.preventDefault();
        const email = form.email.value;
        const password = form.password.value;


        logIn(email, password)
            .then(result => {
                setErrorMsg("succssfully logged In");
                toast("succssfully logged In");
                const user = result.user;
                const currentuser = {
                    email: user.email
                }
                console.log(currentuser)
                fetch('https://aspis-kitchen-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentuser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('accessToken', data.token)
                        navigate(from, { replace: true });


                    })
            }).catch(error => { setErrorMsg(error.message); toast.error("Failed to Sign In") })
    }


    return (
        <div >
            <div className='container' style={{ maxWidth: "900px" }}>
                <div className='d-block d-md-flex justify-content-around align-items-center'>


                    <Form onSubmit={handleToLogin} style={{ maxWidth: "440px" }} className="mx-auto my-5 gray-text border border-info p-4 rounded" >
                        <h2 className='my-3'>Login</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">

                        </Form.Group>
                        <div className='text-center'>

                            <Button variant="outline-info" type="submit" >
                                Login
                            </Button>
                        </div>
                        {
                            errormsg !== '' && <p>{errormsg}</p>
                        }
                        <p className='my-3 p-2'><small>New here? <Link className='text-decoration-none' to="/signup"> create an account</Link> </small></p>

                        <SocialLogin></SocialLogin>
                        <h2 className='p-2 fw-bold text-center text-danger'>Aspia's Kitchen
                        </h2>
                    </Form>
                    <div>
                        <img src={aspi} className='img-fluid' alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;