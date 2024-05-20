import Services from "./services"
const postgame = async (title, description, setLoading, navigate) => {
    setLoading(true);
    await Services.addgame(title, description).then(() => {
        setLoading(false);
        navigate('/manage-games');
    }).catch((err) => {
        alert(err.response.data.message || err.response.data.slug);
        setLoading(false);
    });
}

const deleteGame = async (setLoading, slug) => {
    const confDel = confirm('Confirm delete?');
    if (confDel) {
        setLoading(true);
        await Services.deletegame(slug).then(() => {
            setLoading(false);
        }).catch((err) => {
            alert(err.response.data.message);
            setLoading(false);
        })
    }
}

const editgame = async (title, description, setLoading, slug, navigate) => {
    setLoading(true);
    await Services.editgame(slug, title, description).then(() => {
        setLoading(false);
        navigate('/manage-games');
    }).catch((err) => {
        alert(err.response.data.message);
        setLoading(false);
    })
}

const Post = {
    postgame,
    deleteGame,
    editgame
}

export default Post;