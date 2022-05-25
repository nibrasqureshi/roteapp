import React from 'react';
import { useLocation } from 'react-router-dom';
import List from '../components/List';
import Cart from '../components/Cart';
function CartPage() {
    const location = useLocation();
    const {name , price , quantity} = location.state;
    return ( 
        <div>
                <List/>
                <Cart name={name} price={price} quantity={quantity}/>
        </div>
     );
}

export default CartPage;