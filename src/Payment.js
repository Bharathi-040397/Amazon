import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import HomeIcon from '@material-ui/icons/Home';
import { Link ,useHistory} from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState ,useEffect} from 'react';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './reducer'
import axios from './axios'
import {db} from './Firebase'


function Payment() {
    //eslint-disable-next-line
    const [{ basket, user }, dispatch] = useStateValue();
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();


    useEffect(() => {
       
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    // Displaying client secret in the browser console.
    console.log('The Secret is>>>>',clientSecret);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card:elements.getElement(CardElement)
                }
            }
        ).then(({ paymentIntent }) => {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created,
                });
            setSucceeded(true);
            setProcessing(false);
            setError(null);
            dispatch({
                type:'EMPTY_BASKET'
            })
            history.replace('/orders')
        })
    }


    const handleChange =async (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }
    
    return (
        <div className="payment">
            <div className="icons">
                <Link to="/checkout" >
                        <ArrowBackIosIcon className="backicon" />
                 
                </Link>
                <Link to="/home" >
                    <HomeIcon className="homeicon" />
                    </Link>
            </div>
            
            <div className="payment_container">
                <div className="payment_section">
                    <div className="payment_title">
                        <h5>Total Products  : {basket?.length}</h5>
                    </div>
                </div>
            {!user ? "" : <>
                <div className="payment_section">
                   
                        <div className="payment_title">
                            <h5>Delivery Address :</h5>
                        </div>
                        <div className="payment_content">
                            <p className="address">{user.email}</p>
                            <p className="address">67,New Street</p>
                            <p className="address">Los Angles</p>
                            <p className="address"> Zip-code :100010</p>
                        </div>
                    </div>
                    </>}

            
                <div className="payment_section">
                    <div className="payment_title">
                        <h5>Delivery Items :</h5>
                    </div>
                    <div className="payment_content">
                        {basket.map(item => (
                            <CheckoutProduct
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                img={item.img}
                            />
                        ))}
                    </div>

                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h5>Proceed to Payment :</h5>
                    </div>
                    <div className="payment_content">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment_pricecontainer">
                        <CurrencyFormat
                              renderText={(value) => (
                    
                                        <h3>Order Total : {value}</h3>
                    
                                 )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
                
                                />
                                <button className="paymentbtn" disabled={!user||processing || disabled || succeeded }>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                        </div>
                            {error && <div>{error}</div>}
                        </form>
                    
                          </div>

                </div>
               
                 
            </div>
            
            </div>

            
    )
}

export default Payment
