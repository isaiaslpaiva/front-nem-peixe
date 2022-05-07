import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ApiUtils from "../utils/api.utils";


const SignupForm = () => {
  
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [youAre, setYouAre] = useState('')
    const [gender, setGender] = useState('')
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          await ApiUtils.signup({ name, email, password, gender, youAre })
          navigate("/login");
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <>
      <div className="container">
        <div className="form-signup">
          <form className="signUp" action="" method="get" onSubmit={handleSubmit}>
            <div className="formGroup">
              <input
                type="text"
                id="name"
                placeholder="Nome"
                onChange={e => setName(e.target.value)}
                autoComplete="off"
              ></input>
            </div>
            <div className="formGroup">
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                onChange={e => setEmail(e.target.value)}
                autoComplete="off"
              ></input>
            </div>
            <div className="formGroup">
              <input
                type="password"
                id="password"
                placeholder="Senha"
                onChange={e => setPassword(e.target.value)}
                autoComplete="off"
              ></input>
            </div>
            <div className="formGroup">
            <h3>Gênero</h3>
              <input
                type="radio"
                id="Masculino"
                value="Masculino"
                onChange={e => setGender(e.target.value)}
                autoComplete="off"
              ></input>
              <label htmlFor="Masculino">Masculino</label>
                <input
                type="radio"
                id="Feminino"
                value="Feminino"
                onChange={e => setGender(e.target.value)}
                autoComplete="off"
              ></input>
              <label htmlFor="Feminino">Feminino</label>
                <input
                type="radio"
                id="Não-Binário"
                value="Não-Binário"
                onChange={e => setGender(e.target.value)}
                autoComplete="off"
              ></input>
              <label htmlFor="Não-Binário">Não-Binário</label>
            </div>
            <div className="formGroup">
            <h3>Você é:</h3>
              <input
                type="radio"
                id="Vegan"
                value="Vegan"
                onChange={e => setYouAre(e.target.value)}
                autoComplete="off"
              ></input>
              <label htmlFor="Vegan">Vegan</label>
                <input
                type="radio"
                id="Vegetariano(a)"
                value="Vegetariano(a)"
                onChange={e => setYouAre(e.target.value)}
                autoComplete="off"
              ></input>
              <label htmlFor="Vegetariano(a)">Vegetariano(a)</label>
                <input
                type="radio"
                id="Intolerante"
                value="Intolerante/Alérgico à alguns alimentos"
                onChange={e => setYouAre(e.target.value)}
                autoComplete="off"
              ></input>
              <label htmlFor="Intolerante(a)">Intolerante/Alérgico à alguns alimentos(a)</label>
                <input
                type="radio"
                id="Onivoro"
                value="Consome produtos animais"
                onChange={e => setYouAre(e.target.value)}
                autoComplete="off"
              ></input>
              <label htmlFor="Onivoro">Consome produtos animais</label>
            </div>
            <div className="formGroup"></div>

            <button type="submit" className="btn2" >
              REGISTER
            </button>
            <h4 className="account-text">Já possui uma conta?</h4>
            <div className="btn">
              <Link to={`/login`}>
                <button>Login</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupForm;