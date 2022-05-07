import { Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Login from './pages/Login';
import Profile from './pages/Profile';
import PrivateOutlet from './components/PrivateOutlet';
import DbProducts from './pages/DbProducts';
import Home from './pages/Home';
import Signup from './pages/Signup'
import AddProduct from './pages/AddProdut';
import Product from './pages/Product';
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/cadastre-se" element={<Signup />} />
        <Route path='/produtos' element={<DbProducts />} />
        <Route path='/private' element={<PrivateOutlet />} >
          <Route path='/private/perfil' element={<Profile />} />
          <Route path='/private/adicionar-produto' element={<AddProduct />}/>
          <Route path='/private/produtos/:id' element={<Product />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;