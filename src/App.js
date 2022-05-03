import { Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Login from './pages/Login';
import Profile from './pages/Profile';
import PrivateOutlet from './components/PrivateOutlet';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/private' element={<PrivateOutlet />} >
          <Route path='/private/profile' element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;