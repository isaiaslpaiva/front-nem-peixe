import { NavLink, useNavigate }  from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {

    const navigate = useNavigate()

    const user = localStorage.getItem("user");

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        navigate("/")
      }

    return (
        <nav className = "nav">
            <NavLink className = "button" to="/">Home</NavLink>
            <NavLink className = "button" to="/produtos">Produtos</NavLink> 
            {user ? (<NavLink className = "button" onClick={handleLogout} to="/login">Sair</NavLink>) :
            ( <NavLink className = "button" to="/login">Login</NavLink>) }
            <NavLink className = "button" to="/private/Perfil">Perfil</NavLink> 
        </nav>
    )
}

export default Navbar;