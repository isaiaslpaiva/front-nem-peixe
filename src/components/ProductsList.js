import React, {useEffect, useState} from "react";
import api from '../utils/api.utils';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {

 const [products, setProducts] = useState([]);
 
 const getProducts = async () => {
     try {
         const productsApi = await api.getProducts();
         setProducts( productsApi );
         
     } catch (error) {
         console.log(error);
     }
 }

 useEffect(() => {
     getProducts();
   }, []);

 return (
    <section className="tudo">
      <section className="cabecalho"> <div>Nome do Produto</div>
        <div>Marca</div>
        <div>Grupo </div>
        <div>Categoria </div>
        <div>A marca é </div>
      </section>
        <section className="item">
          {products.map (item => { const {_id, group, category, itIs, nameOfProduct, brand} = item; 
            return(

                <Link key={_id} className="product-link" to={`/private/produtos/${_id}`}>
                  
                    <div>{nameOfProduct}</div>
                    <div>{brand}</div>
                    <div>{ group } </div>
                    <div>{ category } </div>
                    <div>{ itIs } </div>
        
                </Link>
            )})}
          </section>
        </section>
  );
};

export default ProductList;