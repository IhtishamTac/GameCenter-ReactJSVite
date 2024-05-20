import { useState, useEffect } from "react";
import { NavBar } from "../../components/nav";
import { LoadingAnimation } from "../../components/loading";
import Services from "../../api/services";
import defaultImage from "../../assets/asset_storage/v1/thumbnail.png";
import { Link } from "react-router-dom";

export const DiscoverGames = () => {
    const [loading, setLoading] = useState(false);
    const [games, setGames] = useState([]);
    const [element, setElement] = useState([]);
    const fetchGames = async () => {
        setLoading(true);
        try {
            const res = await Services.getgames();
            setGames(res.data.content || []);
            setElement(res.data);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            alert(err.response?.data?.message || 'An error occurred');
        }
    };

    useEffect(() => {
        fetchGames();
    }, []);

    if (loading) return <LoadingAnimation />;

    return (
        <main>
            <NavBar />
            <div className="hero py-5 bg-light">
                <div className="container text-center">
                    <h1>Discover Games</h1>
                </div>
            </div>
            <div className="list-form py-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="mb-3">{element.totalElement} Games Available</h2>
                        </div>
                        <div className="col-lg-8" style={{ textAlign: 'right' }}>
                            <div className="mb-3">
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-secondary">Popularity</button>
                                    <button type="button" className="btn btn-outline-primary">Recently Updated</button>
                                    <button type="button" className="btn btn-outline-primary">Alphabetically</button>
                                </div>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-secondary">ASC</button>
                                    <button type="button" className="btn btn-outline-primary">DESC</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {games.map((game, index) => (
                            <div className="col-md-6" key={index}>
                                <Link to={`/detail-game/${game.slug}`} className="card card-default mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-4">
                                                <img src={defaultImage} alt="Demo Game Logo" className="w-100"></img>
                                            </div>
                                            <div className="col">
                                                <h5 className="mb-1">{game.title} <small className="text-muted">By {game.author || 'Unknown'}</small></h5>
                                                <div>{game.description}</div>
                                                <hr className="mt-1 mb-1"></hr>
                                                <div className="text-muted">#scores submitted : {game.scoreCount || 0}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
