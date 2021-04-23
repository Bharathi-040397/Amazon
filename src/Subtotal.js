import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider'
import { getBasketTotal } from './reducer';
import {Link} from 'react-router-dom'

function Subtotal() {
    // eslint-disable-next-line
    const [{ basket,user },dispatch] = useStateValue();
    return (
        <div className="subtotal">
            {!user ? "" :"Hello, " +user.email}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p className="total_heading">Subtotal ({basket.length} items): <strong>{value}</strong></p>
                        <p className="total_gift">
                            <input className="totalcheck" type="checkbox"/>This order contains a gift
                        </p>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
                
            />
            <Link to="/payment">
                <button className="totalbtn">Proceed to Checkout</button>
                </Link>
        </div>
    );
}

export default Subtotal
