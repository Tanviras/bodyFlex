import React,{ useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimpleCardForm = ({handlePayment}) => {
    const stripe = useStripe();
    const elements = useElements();

    //handling credit cardc payment error
    const [paymentError, setPaymentError] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState('');


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }
    
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);
    
        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
        });
    
        if (error) {
          // console.log('[error]', error);
    
          //handling credit card payment error
          setPaymentError(error.message);
          setPaymentSuccess(null);
        } else {
          console.log('[PaymentMethod]', paymentMethod);
          
          //handling payment success
          setPaymentSuccess(paymentMethod.id);//jeta dorkar hoy info seta nibo. Ekhane nilam 'id'
          setPaymentError(null);
          handlePayment(paymentMethod.id)
        }
      };


    return (
        <div>


            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>

            {/* showing the error message of payment error */}
            {
                paymentError && <p style={{ color: "red" }}>{paymentError}</p>
            }

            {/* showing the success information */}
            {
                paymentSuccess && <p style={{ color: "green" }}>Your payment is successful</p>
            }


        </div>
    );
};

export default SimpleCardForm;