import React from 'react';
import './Gift.css';
import Giftcards from './Giftcards'

function Gift() {
    return (
        <div className="gift">
            <div className="gift_title">
                <img className="gifttitle_img" alt="" src="https://images-na.ssl-images-amazon.com/images/G/01/gcx/gf/categories/gc_gf_circle_300x300._CB409423739_.jpg" />
            <h2>GIFT CARDS</h2>
            </div>
            
            <div className="gift_container">
            <div className="gift_row">
                    <Giftcards
                        title="Happy Birthday Present"
                        price={500}
                        rating={3}
                        img='https://m.media-amazon.com/images/I/41T5cZp--QL._AC_SY161_.jpg'
                    /> 
                    <Giftcards
                    title="Amazon Pay eGift Card"
                    price={4000}
                    rating={2}
                        img="https://m.media-amazon.com/images/I/41nNL95wA7L._AC_SY161_.jpg"
                    />
                    <Giftcards
                    title="Amazon Pay eGift Card"
                    price={500}
                    rating={2}
                        img="https://m.media-amazon.com/images/I/51J4ZdbigLL._AC_SY161_.jpg"
                    />
                    <Giftcards
                    title="Amazon Pay eGift Card "
                    price={600}
                    rating={4}
                        img="https://m.media-amazon.com/images/I/41MVyyuN0cL._AC_SY161_.jpg"
                    />
                    
                </div>
                <div className="gift_row">
                    <Giftcards
                        title="Congrats & Good Luck (New Job)"
                        price={1000}
                        rating={5}
                        img="https://m.media-amazon.com/images/I/41rMS4bQQRL._AC_SY161_.jpg"
                    /> 
                    <Giftcards
                    title="Amazon Pay eGift Card"
                    price={100}
                    rating={3}
                        img="https://m.media-amazon.com/images/I/519tatZ0KuL._AC_SY161_.jpg"
                    />
                    <Giftcards
                    title="Amazon Pay eGift Card"
                    price={100}
                    rating={2}
                        img="https://m.media-amazon.com/images/I/51IolkiITSL._AC_SY161_.jpg"
                    />
                    <Giftcards
                    title="Amazon Pay eGift Card"
                    price={100}
                    rating={4}
                        img="https://m.media-amazon.com/images/I/51-off4WQ2L._AC_SY161_.jpg"
                    />
                    
                </div>
                <div className="gift_row">
                    <Giftcards
                        title="Amazon Pay eGift Card"
                        price={1000}
                        rating={3}
                        img="https://m.media-amazon.com/images/I/51ltKZn8HYL._AC_SY161_.jpg"
                    /> 
                    <Giftcards
                    title="Amazon Pay eGift Card"
                    price={100}
                    rating={2}
                        img="https://m.media-amazon.com/images/I/418IC6asPTL._AC_SY161_.jpg"
                    />
                    <Giftcards
                    title="Amazon Pay eGift Card"
                    price={100}
                    rating={2}
                        img="https://m.media-amazon.com/images/I/51C0Cj2hcSL._AC_SY161_.jpg"
                    />
                    <Giftcards
                    title="Amazon Pay eGift Card"
                    price={1000}
                    rating={4}
                        img="https://m.media-amazon.com/images/I/41xAXYGBz-L._AC_SY161_.jpg"
                    />
                    
                </div>
                <div className="gift_row">
                    <Giftcards
                        title="Amazon Pay eGift Card"
                        price={540}
                        rating={3}
                        img="https://m.media-amazon.com/images/I/515b3m9W5sL._AC_SY161_.jpg"
                    /> 
                    <Giftcards
                    title="Amazon Pay eGift Card"
                    price={500}
                    rating={2}
                        img="https://m.media-amazon.com/images/I/5137Gn1JDBL._AC_SY161_.jpg"
                    />
                    <Giftcards
                    title="Amazon Pay eGift Card"
                    price={700}
                    rating={2}
                        img="https://m.media-amazon.com/images/I/41HEnVDZ-LL._AC_SY161_.jpg"
                    />
                    <Giftcards
                    title="Amazon Pay eGift Card"
                    price={1600}
                    rating={4}
                        img="https://m.media-amazon.com/images/I/41VGdeZtSnL._AC_SY161_.jpg"
                    />
                    
                </div>
            </div>
            
            
        </div>
    )
}

export default Gift
