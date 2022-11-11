import React from 'react';
import headerpic from '../../assets/header.png'

const Home = () => {
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
        </div>
    );
};

export default Home;