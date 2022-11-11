import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import { Image } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';

const NavHeader = () => {
    const { user, logOut, loading, setLoading } = useContext(AuthContext);

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handletoLogOut = () => {
        logOut()
            .then(result => {
                console.log("Logged Out")
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>

                    <Link to='/' className='nav navbar-brand text-danger fw-bold'> Aspia's Kitchen</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to='/services' className="nav-link">Foods</NavLink>
                            <NavLink to='/blog' className='nav-link'>Blog</NavLink>

                        </Nav>
                        <Nav className="ms-auto">
                            {
                                (user && user.uid) ? <>
                                    <NavLink to='/myreview' className="nav-link">My Reviews</NavLink>
                                    <NavLink to='/addservice' className="nav-link">Add Services</NavLink>

                                    {
                                        (user?.photoURL) ? <Image className='my-auto mx-3 ' roundedCircle style={{ width: "30px", height: "30px" }} src={user?.photoURL} alt={user?.displayName} title={user?.displayName} /> :
                                            <FaUserAlt className='my-auto mx-3' />
                                    }


                                    <button onClick={handletoLogOut} className="nav-link btn btn-outline-danger mx-4">Sign Out</button>

                                </>
                                    :
                                    <>
                                        <NavLink to='/login' className="nav-link">Login</NavLink>
                                        <NavLink to='/signup' className="nav-link">Sign Up</NavLink>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavHeader;