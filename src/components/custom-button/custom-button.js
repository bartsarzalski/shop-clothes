import React from 'react';
import buttonCounter from '../HOC/button-counter';

import './custom-button.scss';

const CustomButton = ({ 
    children, 
    isGoogleSignIn, 
    inverted, 
    ...otherProps 
}) => (
    <button 
        className={`${inverted ? 'inverted' : ''} 
        ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;