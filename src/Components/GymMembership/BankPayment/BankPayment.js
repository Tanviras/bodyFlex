import React from 'react';
import visaLogo from '../../../Image & Icon/credit-cards_visa.png';
import masterCardLogo from '../../../Image & Icon/credit-cards_mastercard.png';
import amexlogo from '../../../Image & Icon/credit-cards_amex.png';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IcYksH6xLdsHcKtrGc83DYVOtIcGtnyt0bGAFGfftveeJEQNsKnxiXyzxRbeVjBB3ByuMCveRjazwInBIV097qN00TraIFBUu');

const BankPayment = () => {
    return (
        <div>



            <div className='row'>
                <div className="col-md-9">
                    <h3>Credit Card</h3>
                    <p>Safe money transfer using your bank account. Visa,Maestro,Discover, American Express</p>
                </div>

                <div className="col-md-3">
                    <img src={visaLogo} alt="" />
                    <img src={masterCardLogo} alt="" />
                    <img src={amexlogo} alt="" />
                </div>
            </div>


            <Elements stripe={stripePromise}>
            <SimpleCardForm></SimpleCardForm>
            </Elements>



        </div>

    );
};

export default BankPayment;