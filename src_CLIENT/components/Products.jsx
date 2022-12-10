import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/apiCalls";





const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
    
    const varr=5
    
    const products = useSelector((state) => state.product.products);
    console.log(products)
    
    
    const dispatch = useDispatch();
    useEffect(() => {getProducts(dispatch);}, [dispatch]);
  

  

    return (
        <Container>
            {
            products.map((item) => <Product item={item} key={item.id} />)
            }

        </Container>
    );
    };

export default Products;