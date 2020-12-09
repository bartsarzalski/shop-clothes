import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../../components/custom-button/custom-button';
import CartItem from '../../components/cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart-selectors';

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems, history }) => (
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
        <CustomButton onClick={() => history.push('/checkout')}>
            Go to checkout
            { console.log(history) }
        </CustomButton>
    </div>
)

/* const mapStateToProps = ({ cart: {cartItems} }) => ({
    cartItems
}); */

//memoize way - reselect
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));