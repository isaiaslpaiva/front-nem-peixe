import { Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Login from './pages/Login';
import Profile from './pages/Profile';
import PrivateOutlet from './components/PrivateOutlet';
import DbProducts from './pages/Products';
import Home from './pages/Home';
import Signup from './pages/Signup'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/cadastre-se" element={<Signup />} />
        <Route path='/Produtos' element={<DbProducts />} />
        <Route path='/private' element={<PrivateOutlet />} >
          <Route path='/private/perfil' element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;