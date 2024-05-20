import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-primary navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Gaming Portal</Link>
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
                        <Link className="nav-link active bg-dark" to="#">Welcome, Player1</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="btn bg-white text-primary ms-4">Sign Out</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};