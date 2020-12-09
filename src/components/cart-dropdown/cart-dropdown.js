import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../../components/custom-button/custom-button';
import CartItem from '../../components/cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart-selectors';

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    cartItems.map(cartItem => 
                        <CartItem 
                        key={cartItem.id} 
                        item={cartItem} />
                    ) 
                : <span className='empty-message'>Your cart is empty</span>    
            }
        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
)

/* const mapStateToProps = ({ cart: {cartItems} }) => ({
    cartItems
}); */

//memoize way - reselct
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);