import React, { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const auth = getAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.currentUser === null) {
            navigate('/login');
        }
    }, []);

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home;