import { NavBar } from "../../components/nav";
 const UserLanding = () => {
    return (
        <main>
            <NavBar />
            <div className="hero py-5 bg-light">
                <div className="container text-center">
                    <h1 className="mb-0 mt-0">Dashboard</h1>
                </div>
            </div>

            <div className="list-form py-5">
                <div className="container">
                    <h5 className="alert alert-info">
                        Welcome, {sessionStorage.getItem('username') || 'Not found'}. Dont forget to sign out when you are finished using this page
                    </h5>
                </div>
            </div>
        </main>

    );
}
export default UserLanding;