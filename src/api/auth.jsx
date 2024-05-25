import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/';

export const signin = async (username, password, setLoading, navigate) => {
    const signinData = { username, password };

    setLoading(true);
    try {
        const res = await axios.post('auth/signin', signinData);
        sessionStorage.setItem('token', res.data.token);
        sessionStorage.setItem('username', signinData.username);
        setLoading(false);
        navigate('/landing');
    } catch (err) {
        setLoading(false);
        alert(err.response.data.message);
    }
};

