import React from 'react';
import './NewProduct.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from './StateProvider';

function NewProduct({ title, price, rating, img }) {
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
        <div className="Newproduct">
            <div className="Newproduct_info">
                <p>{title}</p>
                <p className="Newproduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="Newproduct_rating">
                    {Array(rating).fill().map((_, i) => {
                        return <StarBorderIcon className="star" />
                    
                    })}
                </div>
            </div>
            <img className="Newproduct_img" alt="" src={img} />
            <button className="newbtn" onClick={addToBasket}>Add to Cart</button>
        </div>
    );
}

export default NewProduct
