import React from 'react';
import './HomeProduct.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from './StateProvider';


function HomeProduct({ title, img, rating, price }) {
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
        <div className="home_product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating).fill().map((_, i) => {
                        return <StarBorderIcon className="star"/>
                    })}
                </div>
            </div>
            <img className="product_img" alt="" src={img} />
            <button className="addbtn" onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default HomeProduct
