import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoadingAnimation } from './loading';
import Services from '../api/services';

export const NavBar = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const signout = async () => {
        setLoading(true);
        try {
            const res = await Services.signout();
            if (res && res.status == 200) {
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('username');
                navigate('/');
            }
        } catch (err) {
            setLoading(false);
            alert(err.response.data.message);
        }
    
    }
    if (loading) return <LoadingAnimation />;
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-primary navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to="/landing">Gaming Portal</Link>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li>
                        <Link to="/discover-games" className="nav-link px-2 text-white">Discover Games</Link>
                    </li>
                    <li>
                        <Link to="/manage-games" className="nav-link px-2 text-white">Manage Games</Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link px-2 text-white">User Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active bg-dark" to="#">Welcome, {sessionStorage.getItem('username') || 'Not found'}</Link>
                    </li>
                    <li className="nav-item">
                        <button onClick={signout} className="btn bg-white text-primary ms-4">Sign out</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};