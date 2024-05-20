// import './App.css'
import './assets/css/bootstrap.css';
import './assets/css/style.css';
import './assets/js/bootstrap';

import { Routes, Route } from "react-router-dom";
import { LoginPage } from './pages/auth/LoginPage';
import { UserLanding } from './pages/user/UserLanding';
import { DiscoverGames } from './pages/user/DiscoverGames';
import { ManageGames } from './pages/user/ManageGames';
import { AddGame } from './pages/user/AddGame';
import { DetailGame } from './pages/user/DetailGame';
import { UpdateGame } from './pages/user/UpdateGame';

function App() {
  return (
    <Routes>
     <Route path="/" element={ <LoginPage/> } />
     <Route path="/landing" element={ <UserLanding/> } />
     <Route path="/discover-games" element={ <DiscoverGames/> } />
     <Route path="/manage-games" element={ <ManageGames/> } />
     <Route path="/add-game" element={ <AddGame/> } />
     <Route path="/detail-game/:slug" element={ <DetailGame/> } />
     <Route path="/update-game/:slug" element={ <UpdateGame/> } />
    </Routes>
  )
}

export default App
