import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const Private = ({ children }) => {
    const { loading, user, setLoading } = useContext(AuthContext);
    let location = useLocation();
    if (loading) {

        return <div className='w-100 d-flex '>

            <div className="spinner-border mx-auto my-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    }
    if (user && user.uid) {
        setLoading(false)
        return children
    }


    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default Private;