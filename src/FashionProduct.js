import React from 'react';
import './FashionProduct.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from './StateProvider';

function FashionProduct({ title, price, rating, img }) {
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
        <div className="Fashionproduct">
            <div className="Fashionproduct_info">
                <p>{title}</p>
                <p className="Fashionproduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="Fashionproduct_rating">
                    {Array(rating).fill().map((_, i) => {
                        return <StarBorderIcon className="star" />
                    
                    })}
                </div>
            </div>
            <img className="Fashionproduct_img" alt="" src={img} />
            <button className="fashionbtn" onClick={addToBasket}>Add to Cart</button>
        </div>
    );
}

export default FashionProduct
