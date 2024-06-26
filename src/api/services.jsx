import axios from "axios";
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  }
});

// Set Authorization header if token exists
const token = sessionStorage.getItem('token');
if (token) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const signout = () => {
  return instance.post('auth/signout');
}

const getgames = () => {
  return axios.get("games");
}

const getgame = (slug) => {
  return instance.get(`games/${slug}`);
}

const getgamescreated = () => {
  return instance.get("createdgames");
}

const addgame = (title, description) => {
  const gameData = { title, description };
  return instance.post("games", gameData);
}

const deletegame = (slug) => {
  return instance.delete("games/" + slug);
}


const editgame = (slug, title, description) => {
  const gameData = { title, description };
  return instance.put("games/" + slug, gameData);
}


const Services = {
  signout,
  getgames,
  getgame,
  getgamescreated,
  addgame,
  deletegame,
  editgame
}

export default Services;