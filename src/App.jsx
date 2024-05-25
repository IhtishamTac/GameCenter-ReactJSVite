import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import './assets/css/bootstrap.css';
import './assets/css/style.css';
import './assets/js/bootstrap';
import { LoadingAnimation } from './components/loading';

const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const UserLanding = lazy(() => import('./pages/user/UserLanding'));
const DiscoverGames = lazy(() => import('./pages/user/DiscoverGames'));
const ManageGames = lazy(() => import('./pages/user/ManageGames'));
const AddGame = lazy(() => import('./pages/user/AddGame'));
const DetailGame = lazy(() => import('./pages/user/DetailGame'));
const UpdateGame = lazy(() => import('./pages/user/UpdateGame'));

function App() {
  return (
    <Suspense fallback={<LoadingAnimation />}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/landing" element={<UserLanding />} />
        <Route path="/discover-games" element={<DiscoverGames />} />
        <Route path="/manage-games" element={<ManageGames />} />
        <Route path="/add-game" element={<AddGame />} />
        <Route path="/detail-game/:slug" element={<DetailGame />} />
        <Route path="/update-game/:slug" element={<UpdateGame />} />
      </Routes>
    </Suspense>
  );
}

export default App;