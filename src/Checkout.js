import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    //eslint-disable-next-line
    const [{ basket  },dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wireless/CEEX/OnePlus6/SaleLP/22ndonwards/1500x400_5.jpg" />
                                <div className="item_box">
                    {basket?.length === 0 ?
                        (
                            <>
                                <h2 className="checkout_title">Your Shopping Cart is Empty</h2>
                                <p className="checkout_subtitle">
                                    The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item most recent price.Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay</p>
                            </>
                        ) :
                        (  
                          <div>
                            <h2 className="checkout_title">Your Shopping Cart Details</h2>
                                {basket.map(item => (
                              <CheckoutProduct
                                  title={item.title}
                                  price={item.price}
                                  rating={item.rating}
                                  img={item.img}/>
                              
                          ))}
                          </div>      
                        )}
                </div>
            </div>
            <div className="checkout_left">
            
        
                <Subtotal />
            </div>
            
        </div>
    );
}

export default Checkout
