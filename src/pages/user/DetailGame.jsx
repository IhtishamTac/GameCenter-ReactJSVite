import {  useNavigate, useParams } from "react-router-dom";
import defaultImage from "../../assets/asset_storage/v1/thumbnail.png";
import Services from "../../api/services";
import { useEffect, useState } from "react";
import { LoadingAnimation } from "../../components/loading";

 const DetailGame = () => {
    const [loading, setLoading] = useState(false);
    const [game, setGame] = useState('');
    const { slug } = useParams();
    const navigate = useNavigate();
    console.log(game);
    const getGame = async () => {
        setLoading(true);
        try {
            const res = await Services.getgame(slug);
            setGame(res.data[0] || []);
        } catch (err) {
            alert(err.response.data.message || 'An error occured');
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getGame();
    }, [slug]);
    if (loading) return <LoadingAnimation />;
    return (
        <main>
            <div className="hero py-5 bg-light">
                <div className="container text-center">
                    <h2 className="mb-1">
                        {game.title}
                    </h2>

                    <a href="profile.html" className="btn btn-success">By {game.author}</a>
                    <div className="text-muted">
                        {game.description}
                    </div>
                    <h5 className="mt-2">Last Versions v2 ({game.uploadTimestamp})</h5>
                </div>
            </div>

            <div className="py-5">
                <div className="container">

                    <div className="row justify-content-center ">
                        <div className="col-lg-5 col-md-6">

                            <div className="row">
                                <div className="col">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h5>Top 10 Leaderboard</h5>
                                            <ol>
                                                <li>Player5 (3004)</li>
                                                <li>Player2 (2993)</li>
                                                <li>Player3 (2000)</li>
                                                <li>Player4 (1195)</li>
                                                <li><b>Player1 (1190)</b></li>
                                                <li>Player6 (1093)</li>
                                                <li>Player7 (1055)</li>
                                                <li>Player8 (1044)</li>
                                                <li>Player9 (1005)</li>
                                                <li>Player10 (992)</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <img src={defaultImage} alt="Demo Game 1 Logo" style={{ width: '100%' }}></img>
                                    <a href="../example_game/v1//game.zip" className="btn btn-primary w-100 mb-2 mt-2">Download Game</a>
                                </div>
                            </div>

                            {/* <Link to={'/discover-games'} className="btn btn-danger w-100">Back</Link> */}
                            <button className="btn btn-danger w-100"onClick={() => navigate(-1)}>Back</button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}
export default DetailGame;