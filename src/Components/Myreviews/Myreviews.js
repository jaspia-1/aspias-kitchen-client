import React, { useContext, useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

import MyReviewSingle from './MyReviewSingle/MyReviewSingle';
import useTitle from '../../hooks/useTitle/useTitle';
import { AuthContext } from '../../UserContext/UserContext';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [newreviewdb, setnewReviewDb] = useState([])
    const [thisLoading, setThisLoading] = useState(true);

    useTitle("My Reviews - Aspia's Kitchen")

    const handleToUpdate = (id, editcomment) => {
        // console.log(id, editcomment);
        fetch(`https://aspis-kitchen-server.vercel.app/review/${id}`, {
            method: 'PATCH', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ review: editcomment })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = newreviewdb.filter(ord => ord._id != id)
                    const thatcomment = newreviewdb.find(ord => ord._id == id)
                    thatcomment.review = editcomment;
                    const newOrder = [thatcomment, ...remaining]

                    setnewReviewDb(newOrder)
                }
            })
    }

    useEffect(() => {
        setThisLoading(true);
        fetch(`https://aspis-kitchen-server.vercel.app/myreview?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                setnewReviewDb(data)
                setThisLoading(false)
            })
    }, [user?.email, logOut])


    const handleToDelete = (id) => {
        const proceed = window.confirm("Are You sure ,you want to cancel this order ?")
        console.log(id);
        if (proceed) {
            fetch(`https://aspis-kitchen-server.vercel.app/review/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = newreviewdb.filter(ordr => ordr._id != id)
                        toast('Deleted');
                        setnewReviewDb(remaining)
                    }
                })
        }
    }
    return (
        <div className='services '>

            <div className='container py-2'>
                {
                    thisLoading ? <div className='w-100 d-flex '>

                        <div className="spinner-border mx-auto my-5" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> :


                        <div>
                            {

                                newreviewdb.length == 0 ? <div className=' position-absolute top-50  start-50 translate-middle'> <h1 className='text-center w-100 bebas display-1 '>No reviews were added</h1> </div> :
                                    newreviewdb.map(rev => <MyReviewSingle key={rev._id} handleToDelete={handleToDelete} handleToUpdate={handleToUpdate} rev={rev}></MyReviewSingle>)

                            }
                        </div>
                }
            </div>


        </div>
    );
};

export default MyReviews;