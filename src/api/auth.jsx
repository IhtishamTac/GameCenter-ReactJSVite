import axios from 'axios';
import Services from './services';
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

export const signout = async (setLoading, navigate) => {
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