import React from 'react';
import { Outlet } from 'react-router-dom';
import NavHeader from '../Components/Shared/NavHeader';

const Main = () => {
    return (
        <div>
            <NavHeader></NavHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;