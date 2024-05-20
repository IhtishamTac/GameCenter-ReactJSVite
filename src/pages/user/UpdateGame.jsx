import { useState, useEffect } from "react";
import { LoadingAnimation } from "../../components/loading";
import Services from "../../api/services";
import { Link, useNavigate, useParams } from "react-router-dom";
import Post from "../../api/post";

export const UpdateGame = () => {
    const [loading, setLoading] = useState(false);
    const { slug } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const getGame = async () => {
        setLoading(true);
        try {
            const res = await Services.getgame(slug);
            setTitle(res.data[0]?.title || '');
            setDescription(res.data[0]?.description || '');
        } catch (err) {
            alert(err.response.data.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e, setValue) => {
        setValue(e.target.value);
    };

    const handleEditGame = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await Post.editgame(title, description,setLoading, slug, navigate);
        } catch (err) {
            alert(err.response?.data.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getGame();
    }, [slug]);

    if (loading) return <LoadingAnimation />;
    return (
        <main>
            <div className="hero py-5 bg-light">
                <div className="container text-center">
                    <h2 className="mb-3">Manage Games - Gaming Portal</h2>
                </div>
            </div>

            <div className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-6">
                            <form onSubmit={handleEditGame}>
                                <div className="form-item card card-default my-4">
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="title" className="mb-1 text-muted">Title <span className="text-danger">*</span></label>
                                            <input
                                                id="title"
                                                type="text"
                                                placeholder="Title"
                                                value={title}
                                                onChange={(e) => handleInputChange(e, setTitle)}
                                                className="form-control"
                                                name="title"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-item card card-default my-4">
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="description" className="mb-1 text-muted">Description <span className="text-danger">*</span></label>
                                            <textarea
                                                name="description"
                                                className="form-control"
                                                placeholder="Description"
                                                id="description"
                                                cols="30"
                                                rows="5"
                                                value={description}
                                                onChange={(e) => handleInputChange(e, setDescription)}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 row">
                                    <div className="col">
                                        <button className="btn btn-primary w-100" type="submit">Submit</button>
                                    </div>
                                    <div className="col">
                                        <Link to={'/manage-games'} className="btn btn-danger w-100">Back</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
