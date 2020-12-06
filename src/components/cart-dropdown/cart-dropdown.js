import React from 'react';

import CustomButton from '../../components/custom-button/custom-button';

import './cart-dropdown.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>Go to checkout</CustomButton>
    </div>
)

export default CartDropdown;