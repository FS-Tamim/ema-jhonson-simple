import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {

    const handleAddProduct=()=>{
        const product = {};
        fetch('https://fathomless-castle-09052.herokuapp.com/addProducts',{
             method:"POST",
             headers:{
                 'Content-Type':'application/json'
             },
             body:JSON.stringify(product)
        }).then(res=>res.json())
        .then(data=>{
          console.log(data);
        })
       
    }
    return (
        <div>
           
           <form action="">
                <p><span>Name: </span><input type="text"/></p>
                <p><span>price: </span><input type="text"/></p>
                <p><span>Quantity:</span><input type="text"/></p>
                <p><span>prodduct Image</span><input type="file"/></p>
                <button onClick={handleAddProduct}>Add Product</button>
            </form>
        </div>
    );
};

export default Inventory;