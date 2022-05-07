import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiUtils from "../utils/api.utils";


const ProductForm = () => {
  
    const [nameOfProduct, setNameOfProduct] = useState('')
    const [brand, setBrand] = useState('')
    const [group, setGroup] = useState('')
    const [category, setCategory] = useState('')
    const [itIs, setItIs] = useState('')
    const [source, setSource] = useState('')
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          await ApiUtils.addProduct({ nameOfProduct, brand, group, category, itIs, source })
          navigate("/produtos");
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
                id="nameOfProduct"
                placeholder="Nome do Produto"
                onChange={e => setNameOfProduct(e.target.value)}
                autoComplete="off"
              ></input>
            </div>
            <div className="formGroup">
              <input
                type="text"
                placeholder="Marca"
                name="brand"
                onChange={e => setBrand(e.target.value)}
                autoComplete="off"
              ></input>
            </div>
            <div className="formGroup">
              <input
                type="text"
                id="group"
                placeholder="Grupo"
                onChange={e => setGroup(e.target.value)}
                autoComplete="off"
              ></input>
            </div>
            <div className="formGroup">
            <h3>Categoria</h3>
              <input
                type="radio"
                id="Comida"
                value="Comida"
                onChange={e => setCategory(e.target.value)}
                autoComplete="off"
              ></input>
              <label htmlFor="Comida">Comida</label>
                <input
                type="radio"
                id="Higiene Pessoal"
                value="Higiene Pessoal"
                onChange={e => setCategory(e.target.value)}
                autoComplete="off"
              ></input>
              <label htmlFor="Higiene Pessoal">Higiene Pessoal</label>
                <input
                type="radio"
                id="Limpeza"
                value="Limpeza"
                onChange={e => setCategory(e.target.value)}
                autoComplete="off"
              ></input>
              <label htmlFor="Limpeza">Limpeza</label>
              <input
                type="radio"
                id="Beleza"
                value="Beleza"
                onChange={e => setCategory(e.target.value)}
                autoComplete="off"
              ></input>
              <label htmlFor="Beleza">Beleza</label>
              <input
                type="radio"
                id="Outros"
                value="Outros"
                onChange={e => setCategory(e.target.value)}
                autoComplete="off"
              ></input>
              <label htmlFor="Outros">Outros</label>
            </div>
            <div className="formGroup">

            <h3>O Produto é</h3>
              <input
                type="radio"
                id="Vegano"
                value="Vegano"
                onChange={e => setItIs(e.target.value)}
                autoComplete="off"
              ></input>
              <label htmlFor="Vegano">Vegano</label>
                <input
                type="radio"
                id="Vegetariano"
                value="Vegetariano"
                onChange={e => setItIs(e.target.value)}
                autoComplete="off"
              ></input>
              <label htmlFor="Vegetariano">Vegetariano</label>
                <input
                type="radio"
                id="Crueldade Animal"
                value="Crueldade Animal"
                onChange={e => setItIs(e.target.value)}
                autoComplete="off"
              ></input>
              <label htmlFor="Crueldade Animal">Crueldade Animal</label>
            </div>
            <div className="formGroup">
              <input
                type="text"
                id="source"
                placeholder="Link da fonte"
                onChange={e => setSource(e.target.value)}
                autoComplete="off"
              ></input>
            </div>

            <button type="submit" className="btn2" >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProductForm;