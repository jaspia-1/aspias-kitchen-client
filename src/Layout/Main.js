import React from 'react';
import { Outlet } from 'react-router-dom';
import NavHeader from '../Components/Shared/NavHeader';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Main = () => {
    return (
        <div>
            <NavHeader></NavHeader>
            <ToastContainer />
            <Outlet></Outlet>
        </div>
    );
};

export default Main;