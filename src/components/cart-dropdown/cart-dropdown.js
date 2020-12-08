import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../../components/custom-button/custom-button';
import CartItem from '../../components/cart-item/cart-item';

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem 
                    key={cartItem.id} 
                    item={cartItem} />)
            }
        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
)

const mapStateToProps = ({ cart: {cartItems} }) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);