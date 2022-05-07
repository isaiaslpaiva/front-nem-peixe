import React from 'react';
import { Link } from 'react-router-dom';
import ProductsList from '../components/ProductsList.js';
import './DbProduct.css';

const DbProducts = () => {


  return (
    <div className='Products'>

        <div className="btn" >
          <Link to={`/private/adicionar-produto`}>
            <button>Cadastrar um produto</button>
          </Link>
        </div>
      <ProductsList />

    </div>
  )
}

export default DbProducts;