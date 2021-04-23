import React from 'react';
import './New.css';
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import NewProduct from './NewProduct.js';

function New() {
    return (
        <div className="new">
            <div className="new_container">
                <div className="newimg_container">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={4}
                    isPlaying={true}
                    interval={5000}
                >
                    <Slider>
                        <Slide index={0}><img className="new_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/CorpGCPages/InterMiles_Banner_PC.jpg" /></Slide>
                        <Slide index={1}><img className="new_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/Covid/drive/Drive6/Offer_page_1500x300-ApayPages._CB1198675309_.jpg" /></Slide>
                            
                            <Slide index={2}><img className="new_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/pc_banner_2.jpg" /></Slide>
                            <Slide index={3}><img className="new_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Books/092017/100MustReads/1069668_BOOKS-100-BOOKS-TO-READ-IN-A-LIFETIME-STORE-REFRESH-CREATIVES-STOREHEADER_1500x300_3.jpg" /></Slide>
                    </Slider>
                    </CarouselProvider>
                </div>
                <div className="new_collections">
                    <card>
                        <img className="newcard_img" alt="" src="https://m.media-amazon.com/images/I/31rISZGlqkL.__AC_SY200_.jpg" />
                    </card>
                    <card>
                        <img className="newcard_img" alt="" src="https://m.media-amazon.com/images/I/41-ZfYOYoYL.__AC_SY200_.jpg" />
                    </card>
                    <card>
                        <img className="newcard_img" alt="" src="https://m.media-amazon.com/images/I/41PIxXwwsbL.__AC_SY200_.jpg" />
                    </card>
                    <card>
                        <img className="newcard_img" alt="" src="https://m.media-amazon.com/images/I/41OC20VDxUL.__AC_SY200_.jpg" />
                    </card>
                    <card>
                        <img className="newcard_img" alt="" src="https://m.media-amazon.com/images/I/41yW0SeNN2L.__AC_SY200_.jpg" />
                    </card>
                    <card>
                        <img className="newcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/51ceXPqza0L._AC_SY200_.jpg" />
                    </card>
                </div>
                <div className="Newproduct_container">
                    <NewProduct
                        title="Sanyo 123.2 cm (49 inches) Full HD IPS TV(Black)"
                        price={200}
                        rating={3}
                        img="https://images-na.ssl-images-amazon.com/images/I/51svCE0knVL.jpg"
                        />
                    <NewProduct
                        title="Sony Xperia 10 Plus(32GB RAM)"
                        price={500}
                        rating={4}
                        img="https://www.gizmochina.com/wp-content/uploads/2019/02/Sony-Xperia-10-Plus-500x500.jpg" />
                    <NewProduct
                        title="TV Stick streaming with Alexa Voice Remote"
                        price={600}
                        rating={3}
                        img="https://images-eu.ssl-images-amazon.com/images/I/31EskQ9W9iL._AC_US240_FMwebp_QL65_.jpg" />
                    <NewProduct
                    title="Wings of Fire"
                    price={100}
                    rating={3}
                        img="https://rukminim1.flixcart.com/image/416/416/juk4gi80/book/4/6/6/wings-of-fire-original-imaffmk4gx5pxqvf.jpeg?q=70" />
                    
                </div>
                <div  className="Newproduct_container">
                    
                <NewProduct
                    title="GetBest 8988 12V Battery Operated Ride on Car for Kids "
                    price={50}
                    rating={2}
                        img="https://cdn.shopify.com/s/files/1/1816/9267/products/01-primary_977ecdcb-fd7f-42ef-b7bd-6af2397dc25d_1024x1024@2x.jpg?v=1549966164" />
                    <NewProduct
                    title="Intellilens® Square Unisex Blue Cut Spectacles With Anti-glare for Eye Protection (Zero Power, Black) "
                    price={4000}
                    rating={2}
                    img="https://images-eu.ssl-images-amazon.com/images/I/412wKb1ScGL._AC_SY200_.jpg"/>
                   
                    
                </div>
                <div className="new_collections">
                    <card>
                        <img className="newcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/41l5C1q5aCL._AC_SY200_.jpg" />
                    </card>
                    <card>
                        <img className="newcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/31EOup4X5LL._AC_SY200_.jpg" />
                    </card>
                    <card>
                        <img className="newcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/51b2EIz7IyL._AC_SY200_.jpg" />
                    </card>
                    <card>
                        <img className="newcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/51mIv4H149L._AC_SY200_.jpg" />
                    </card>
                    <card>
                        <img className="newcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/41jzjo0hDwL._AC_SY200_.jpg" />
                    </card>
                    <card>
                        <img className="newcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/51ceXPqza0L._AC_SY200_.jpg" />
                    </card>
                </div>
                <div className="Newproduct_container">
                    <NewProduct 
                        title="WW91K54E0UX Front Loading with AddWash 9.0kg"
                        price={900}
                        rating={5}
                        img="https://images.samsung.com/is/image/samsung/in-front-loading-ww91k54e0uxtl-ww91k54e0ux-tl-titaniumgray-283258873?$PD_GALLERY_L_SHOP_JPG$" />
                    <NewProduct
                        title="Stylish Blue ColorSoft Tafeta Silk Gown"
                        price={3000}
                        rating={3}
                        img="https://cdn.shopify.com/s/files/1/0065/5333/7944/products/Naira_Blue_360x.jpg?v=1563176865" />
                    <NewProduct 
                        title="Hybrid Smart Watch with Blue Dial & Leather Strap"
                        price={7500}
                        rating={4}
                        img="https://staticimg.titan.co.in/Titan/Catalog/1785NL01_1.jpg?pView=pdp" />
                    <NewProduct
                        title="TP-Link Mini Wireless-N USB Adapter(Black)"
                        price={59900}
                        rating={4}
                        img="https://images-eu.ssl-images-amazon.com/images/I/31DrWTYZPrL._AC_US240_FMwebp_QL65_.jpg" />
                    
                </div>
                <div className="Newproduct_container">
                <NewProduct
                        title="Philips 126 cm (50 inches)Ultra HD (Black)"
                        price={500}
                        rating={4}
                        img="https://images-eu.ssl-images-amazon.com/images/I/51usZonCf7L._AC_US240_FMwebp_QL65_.jpg" />
                    <NewProduct
                        title="PEESAFE Toilet Seat Sanitizer Spray - 75ml"
                        price={1500}
                        rating={2}
                        img="https://images-eu.ssl-images-amazon.com/images/I/31ArNIxsTcL._AC_SY200_.jpg" />
                    <NewProduct
                        title="Smart Building Construction Activity Toy Game Kit"
                        price={3000}
                        rating={3}
                        img="https://images-eu.ssl-images-amazon.com/images/I/51mBV24FghL._AC_SY200_.jpg" />
                </div>
                <div className="new_collections">
                    <card>
                        <img className="newcard_img" alt="" src=" https://images-eu.ssl-images-amazon.com/images/I/412MPbeJigL._AC_SX184_.jpg" />
                    </card>
                    <card>
                        <img className="newcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/41SEgtVkfVL._AC_SX184_.jpg" />
                    </card>
                    <card>
                        <img className="newcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/31gkDcLFx9L._AC_US240_FMwebp_QL65_.jpg" />
                    </card>
                    <card>
                        <img className="newcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/41+Y1oz4TML._AC_US240_FMwebp_QL65_.jpg" />
                    </card>
                    <card>
                        <img className="newcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/41TrwsNxZcL._AC_US240_FMwebp_QL65_.jpg" />
                    </card>
                    <card>
                        <img className="newcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/41GjZIqVYRL._AC_US240_FMwebp_QL65_.jpg" />
                    </card>
                </div>
            </div>
            
        </div>
    )
}

export default New
