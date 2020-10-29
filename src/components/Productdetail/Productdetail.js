import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Productdetail = () => {
    const {productkey}=useParams();

    const [product,setProduct]=useState({});

    useEffect(()=>{
        fetch('https://fathomless-castle-09052.herokuapp.com/product/'+productkey)
        .then(res=>res.json())
        .then(data=>setProduct(data))
        
    },[productkey])
    console.log(product);
    // const product=fakeData.find(pd=>pd.key===productkey)
    return (
        <div>
            <h1>{productkey}Product details coming soon</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default Productdetail;