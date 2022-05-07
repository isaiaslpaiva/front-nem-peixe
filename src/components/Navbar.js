import { NavLink }  from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className = "nav">
            <NavLink className = "button" to="/">Home</NavLink>
            <NavLink className = "button" to="/produtos">Produtos</NavLink> 
            <NavLink className = "button" to="/login">Login</NavLink>
            <NavLink className = "button" to="/private/perfil">Perfil</NavLink> 
        </nav>
    )
}

export default Navbar;