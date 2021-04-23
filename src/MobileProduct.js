import React from 'react';
import './MobileProduct.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from './StateProvider';

function MobileProduct({ title, price, rating, img }) {
    // eslint-disable-next-line
    const [{ basket }, dispatch] = useStateValue();
    

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {

                title: title,
                img: img,
                price: price,
                rating:rating,
            }
        })
    }

    return (
        <div className="mobileproduct">
            <div className="mobileproduct_info">
                <p>{title}</p>
                <p className="mobileproduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="mobileproduct_rating">
                    {Array(rating).fill().map((_, i) => {
                        return <StarBorderIcon className="star" />
                    
                    })}
                </div>
            </div>
            <img className="mobileproduct_img" alt="" src={img} />
            <button className="mobilebtn" onClick={addToBasket}>Add to Cart</button>
        </div>
    );
}

export default MobileProduct
