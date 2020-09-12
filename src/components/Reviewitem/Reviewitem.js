import React from 'react';
import './Reviewitem.css'

const Reviewitem = (props) => {
    const {name,quantity,key}=props.product;
    return (
        <div>
            <h1>{name}</h1>
            <h5>{quantity}</h5>
            <button onClick={()=>{props.removeItem(key)}} className="main-button" >Remove</button> 
        </div>
    );
};

export default Reviewitem;