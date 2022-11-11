import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { AuthContext } from '../../../UserContext/UserContext';

const SocialLogin = () => {
    const authInfo = useContext(AuthContext);
    const [errormsg, setErrorMsg] = useState('');
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const { SignInGoogle, SignInGithub, setLoading, logIn } = authInfo;
    const handleTosignwithGoogle = () => {
        SignInGoogle()
            .then(result => {
                setErrorMsg("succssfully logged In");
                toast("succssfully logged In");
                const user = result.user;
                const currentuser = {
                    email: user.email
                }
                console.log(currentuser)
                fetch('https://edm-producerd-dcp-server.vercel.app/jwt', {
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
                        setLoading(false);

                    })

            }).catch(error => { setErrorMsg(error.message); toast.error("Failed to Sign In") })
    }
    return (
        <div>
            <Button onClick={handleTosignwithGoogle} variant="info" className="w-100 ">
                Sign Up with Google <FaGoogle className='my-auto ms-1' />
            </Button>
        </div>
    );
};

export default SocialLogin;