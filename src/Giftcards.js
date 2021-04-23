import React from 'react';
import './Giftcards.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from './StateProvider';


function Giftcards({ title, img, rating, price }) {
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
        <div className="gift_cards">
            <img className="giftcards_img" alt="" src={img} />
            <div className="giftcards_info">
                <p>{title}</p>
                <p className="giftcards_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='giftcards_rating'>
                    {Array(rating).fill().map((_, i) => {
                        return <StarBorderIcon className="star"/>
                    })}
                </div>
            </div>
            
            <button className="giftcardbtn" onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Giftcards
