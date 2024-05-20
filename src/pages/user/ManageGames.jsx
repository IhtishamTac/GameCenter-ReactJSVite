import { useState, useEffect } from "react";
import { NavBar } from "../../components/nav";
import { LoadingAnimation } from "../../components/loading";
import { Link } from 'react-router-dom';
import Services from "../../api/services";
import Post from "../../api/post";
import defaultImage from "../../assets/asset_storage/v1/thumbnail.png";

export const ManageGames = () => {
    const [loading, setLoading] = useState(false);
    const [games, setGames] = useState([]);
    const fetchGames = async () => {
        setLoading(true);
        try {
            const res = await Services.getgamescreated();
            setGames(res.data.games || []);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            alert(err.response?.data?.message || 'An error occurred');
        }
    };
    useEffect(() => {
        fetchGames();
    }, []);

    const handleDelete = async (slug) => {
        setLoading(true);
        try {
            await Post.deleteGame(setLoading, slug).then(()=>{
                fetchGames();
            });
        } catch (err) {
            alert(err.response?.data?.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <LoadingAnimation />;

    return (
        <main>
            <NavBar />

            <div className="hero py-5 bg-light">
                <div className="container">
                    <Link to="/add-game" className="btn btn-primary">
                        Add Game
                    </Link>
                </div>
            </div>

            <div className="list-form py-5">
                <div className="container">
                    <h6 className="mb-3">List Games</h6>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th width="100">Thumbnail</th>
                                <th width="200">Title</th>
                                <th width="500">Description</th>
                                <th width="180">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {games.map((game, index) => (
                                <tr key={game.id || index}>
                                    <td><img src={defaultImage} alt="Demo Game 1 Logo" style={{ width: '100%' }}></img></td>
                                    <td>{game.title}</td>
                                    <td>{game.description}</td>
                                    <td>
                                        <Link to={`/detail-game/${game.slug}`} className="btn btn-sm btn-primary">Detail</Link>
                                        <Link to={`/update-game/${game.slug}`} className="btn btn-sm btn-secondary">Update</Link>
                                        <button onClick={() => {handleDelete(game.slug)}} className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>

        </main>
    )
}