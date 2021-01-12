import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51I8LbHFBtWgtgLFMF0QhVObSdjintVdS1F0SbYQDABAiRArSduIJMKQZdABykSrpUUI1rA5EEyr3R6pK5ZhnHwlR00R1MVipGJ";

    const onToken = token => {
        console.log(token);
        alert('Payment succesfull')
    }

    return (
        <StripeCheckout 
            label="Pay now"
            currency="USD"
            billingAddress
            shippingAddress
            description={`Your total is ${price}$`}
            amount={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;