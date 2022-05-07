import React, {useEffect, useState} from "react";
import api from '../utils/api.utils';
import { Link } from 'react-router-dom';

const ProductCard = () => {

 //{nameOfProduct, brand, group, category, source, comment, itIs }
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
    <>
    {products.map ((item) => { const {_id, group, category, itIs, nameOfProduct, brand} = item; 
            return(
                <Link key={_id} className="product-link" to={`/product/${_id}`}>
                  <div className="item">
                    <span>{nameOfProduct}</span>
                    <span>{brand}</span>
                    <div>{ group } </div>
                    <div>{ category } </div>
                    <div>{ itIs } </div>
                  </div>
                </Link>
            )})}
    </>
  );
};

export default ProductCard;