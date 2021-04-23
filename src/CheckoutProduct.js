import React from 'react'
import './CheckoutProduct.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {useStateValue} from './StateProvider'


function CheckoutProduct({ id, title, img, price, rating ,hideButton}) {
    //eslint-disable-next-line
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            title: title,
        });
    };

    return (
        <div className="checkoutproduct">
            <img className="checkoutproduct_img" alt="" src={img} />
            <div className="checkoutproduct_info">
                <p>{title}</p>
                <p className="checkoutproduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutproduct_rating'>
                    {Array(rating).fill().map((_, i) => {
                        return <StarBorderIcon className="star"/>
                    })}
                </div>
                {!hideButton && (
                    <button className="removebtn" onClick={removeFromBasket}>Remove Item</button>
                )}
            </div>
            
            
                      
        </div>
    )
}

export default CheckoutProduct
