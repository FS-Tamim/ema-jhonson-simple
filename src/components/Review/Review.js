import React, { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Reviewitem from '../Reviewitem/Reviewitem';
import Cart from '../Cart/Cart';
import { Link, useHistory } from 'react-router-dom';

import img from '../../images/giphy.gif'

const Review = () => {
    const [cart,setcart]=useState([]);
    const [orderPlace,setorderPlace]=useState(false);

    useEffect(()=> {
        const savedCart=getDatabaseCart();
        const productKeys=Object.keys(savedCart);
        const cartProducts=productKeys.map(key=>{
        const product=fakeData.find(pd=>pd.key===key);
            product.quantity=savedCart[key];
            return product;
        });
        setcart(cartProducts);
    },[]);
    const removeItem=(productKey)=>{
        console.log("removed");
        const remainingProducts=cart.filter(pd=>pd.key!==productKey);
        setcart(remainingProducts);
        removeFromDatabaseCart(productKey);
    }
    let thankyou;
    const history=useHistory();
    const proceedChekOut=()=>{
        history.push('/shipment');
       

    }
    if(orderPlace){
        thankyou=<img src={img}></img>
    }

    return (
        
        <div className='shop-container'>
            
            <div className='product-container'>
            <h1>This is revies:{cart.length}</h1>
                {
                   cart.map(pd=><Reviewitem removeItem={removeItem} product={pd}></Reviewitem>)
                }
                {
                    thankyou
                }
            </div>
            <div className="cart-container">
                
                <Cart cart={cart}>
                <button onClick={proceedChekOut} className="main-button" >Procede chekout</button>
                 </Cart>
            
                
            </div>
        </div>
       
    );
 };
    

export default Review;