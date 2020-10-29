import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import SimpleCartForm from './SimpleCartForm';
import SplitCardForm from './SplitCardForm';
const stripePromise = loadStripe('pk_test_51HZg0bE4xpUYPYZMptqFAyiM4kynbh8snMHC8drcnjU07Xwaav0ia1BILLTjG0vRG5FDOif3z2lrDeVxb8O4G05y00Kxd66KT4');
const PaymentProcess = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
     <SimpleCartForm handlePayment={handlePayment}></SimpleCartForm>
    </Elements>
    );
};

export default PaymentProcess;