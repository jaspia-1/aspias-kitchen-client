import React, { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { useState } from 'react';
import app from '../Firebase/firebase.init';


export const AuthContext = createContext()
const auth = getAuth(app);
const UserContext = ({ children }) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();

    const SignInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const updateInfo = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        localStorage.removeItem('accessToken');
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    const authInfo = { user, SignInGoogle, loading, setLoading, logIn, logOut, signUp, updateInfo };
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }

        </AuthContext.Provider>
    );
};

export default UserContext;