import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import apiUtils from "../utils/api.utils";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const resetForm = () => {
    setEmail('');
    setPassword('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiUtils.login({email, password});
      resetForm();
      navigate('/private/perfil')
    } catch (error) {
      console.log(error.status)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">e-mail</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Entrar</button>

            <div className="btn" >
              <Link to={`/cadastre-se`}>
                <button>Criar uma conta</button>
              </Link>
            </div>
    </form>
  );
};

export default FormLogin;