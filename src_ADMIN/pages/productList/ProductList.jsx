import React, { useEffect } from 'react'
import styled from "styled-components";


import { useDispatch, useSelector } from "react-redux";
//import { getProducts } from "../redux/apiCalls";
import { getProducts,deleteProduct } from '../../redux/apiCalls';
import { Link } from 'react-router-dom';




const Image =styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
 
`;

const ProductList = () => {
    const product = useSelector((state) => state.product.products);
    
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        getProducts(dispatch);
    }, []);

    const handleDelete=(id)=>{
        deleteProduct(id,dispatch)

    }
  
  return (
    <div class="container">
        <h2>Hover Rows</h2>
        <p>The .table-hover class enables a hover state (grey background on mouse over) on table rows:</p>            
        <table class="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>IMAGE</th>
                <th>PRODUCT</th>
                <th>STOCK</th>
                <th>PRICE</th>
                <th></th>
                <th></th>
                

            </tr>
            </thead>
            <tbody>
             {
                 product.map(function(item){
                    return <tr>
                                <td>{item._id}</td>
                                <td><Image src={item.img} /></td>
                                <td>{item.title}</td>
                                <td>{item.desc}</td>
                                <td>{item.price}</td>
                                <td>{item.inStock}</td>
                                <td><button type="button" class="btn btn-danger" onClick={ ()=>{handleDelete(item._id)} }>DELETE</button></td>
                                <td><Link to={`/product/${item._id}`}><button type="button" class="btn btn-danger">EDIT</button></Link></td>

                           </tr>
                 })
             }   
            
            </tbody>
        </table>
</div>
  )
}

export default ProductList
