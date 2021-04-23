import React from 'react';
import './Fashion.css';
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import FashionProduct from './FashionProduct';


function Fashion() {
    return (
        <div className="fashion">
            <div className="fashion_container">
                <div className="fashionimg_container">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={5}
                    isPlaying={true}
                    interval={5000}
                >
                    <Slider>
                        <Slide index={0}><img className="fashion_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/newseasonflip/wapc._SX3000_QL85_.jpg" /></Slide>
                        <Slide index={1}><img className="fashion_img" alt="" src="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/NewSeason/AF/MF/Header/PC/MF._CB406502601_.jpg" /></Slide>
                            
                            <Slide index={2}><img className="fashion_img" alt="" src="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/NewSeason/AF/KF/KF-eng-mob._CB406550983_.jpg" /></Slide>
                            <Slide index={3}><img className="fashion_img" alt="" src="https://m.media-amazon.com/images/G/31/img20/Fashion/EVENT/NewSeason/AF/Header/PC/afpc._CB406501398_.jpg" /></Slide>
                            <Slide index={4}><img className="fashion_img" alt="" src="https://m.media-amazon.com/images/G/31/img20/Shoes/August/AW20/SPW/Topbanners/Sportswear-PC._CB406495849_.jpg" /></Slide>
                    </Slider>
                    </CarouselProvider>
                </div>
                <div className="collections">
                    <card>
                        <img className="card_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/MA2020/NSM-AUG/Spiking/NS-Spiking-MA_01._SY530_QL85_.jpg" />
                        <p>T-shirts</p>
                    </card>
                    <card>
                        <img className="card_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/MA2020/NSM-AUG/Spiking/NS-Spiking-MA_02._SY530_QL85_.jpg" />
                    <p>Track & Joggers</p>
                    </card>
                    <card>
                        <img className="card_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/MA2020/NSM-AUG/Spiking/NS-Spiking-MA_03._SY530_QL85_.jpg" />
                    <p>Shorts</p>
                    </card>
                    <card>
                        <img className="card_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/MA2020/NSM-AUG/Spiking/NS-Spiking-MA_04._SY530_QL85_.jpg" />
                        <p>Innerwear</p>
                    </card>
                    <card>
                        <img className="card_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/MA2020/NSM-AUG/Spiking/NS-Spiking-MA_05._SY530_QL85_.jpg" />
                        <p>Masks</p>
                    </card>
                    <card>
                        <img className="card_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/MA2020/NSM-AUG/Spiking/NS-Spiking-MA_06._SY530_QL85_.jpg" />
                        <p>Combo Packs</p>
                    </card>
                </div>
                <div className="collections">
                <card>
                        <img className="card_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/newseasonflip/tshirts._SY530_QL85_.jpg" />
                        <p>T-shirt Packs</p>
                    </card>
                    <card>
                        <img className="card_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/newseasonflip/jogger._SY530_QL85_.jpg" />
                    <p>Track pants & jogger</p>
                    </card>
                    <card>
                        <img className="card_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/newseasonflip/kurta._SY530_QL85_.jpg" />
                    <p>Everyday Kurtas</p>
                    </card>
                    <card>
                        <img className="card_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/newseasonflip/saree._SY530_QL85_.jpg" />
                        <p>Everyday Sarees</p>
                    </card>
                    <card>
                        <img className="card_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/newseasonflip/sleeepw._SY530_QL85_.jpg" />
                        <p>Long wear & Sleep wear</p>
                    </card>
                    <card>
                        <img className="card_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/newseasonflip/lingerie._SY530_QL85_.jpg" />
                        <p>Innerwear comos</p>
                    </card>
                </div>
                <div className="collections">
                <card>
                        <img className="card_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/Kids-2020/Store_Refresh_V1/Character-Store/GIF/Avengers._CB430098732_.gif" />
                        <p>Avengers T-shirt</p>
                    </card>
                    <card>
                        <img className="card_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/Kids-2020/Store_Refresh_V1/Character-Store/GIF/Frozen._CB430098727_.gif"/>
                    <p>Frozen T-shirt</p>
                    </card>
                    <card>
                        <img className="card_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/Kids-2020/Store_Refresh_V1/Character-Store/GIF/Barbie-_-Disney-Princess._CB430098730_.gif" />
                    <p>Barbie T-shirt</p>
                    </card>
                    <card>
                        <img className="card_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/Kids-2020/Store_Refresh_V1/Character-Store/GIF/Spiderman._CB430098725_.gif"/>
                        <p>Spiderman T-shirt</p>
                    </card>
                    <card>
                        <img className="card_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/Kids-2020/Store_Refresh_V1/Character-Store/GIF/Superman._CB430098730_.gif" />
                        <p>Superman T-shirt</p>
                    </card>
                    <card>
                        <img className="card_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/Kids-2020/Store_Refresh_V1/Character-Store/GIF/Disney._CB430098731_.gif" />
                        <p>Disney T-shirt</p>
                    </card>
                    </div>
                    <div className="fashionproduct_container">
                    <FashionProduct
                        title="Red Solid Pin Tuck Kurti"
                        price={100}
                        rating={3}
                        img="https://images-eu.ssl-images-amazon.com/images/I/31IvC0Ajz%2BL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    /> 
                    <FashionProduct
                    title="Spunk by FBB Men's Regular fit T-shirt "
                    price={400}
                    rating={1}
                        img="https://images-eu.ssl-images-amazon.com/images/I/41-6Rb6xZ8L._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    />
                    <FashionProduct
                    title="BUFFALO Indigo Regular Waist Slim Fit Jeans "
                    price={500}
                    rating={2}
                        img="https://images-eu.ssl-images-amazon.com/images/I/41Vjg4I9JCL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    />
                    
                </div>
                <div className="fashionproduct_container">
                <FashionProduct
                    title="DJ & C Men's Regular fit T-Shirt"
                    price={200}
                    rating={3}
                        img="https://images-eu.ssl-images-amazon.com/images/I/41zoIxik7yL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    />

                </div>
                <div className="fashionproduct_container">
                    <FashionProduct
                        title="Pink & Blue by FBB Star Print Knit Frock"
                        price={150}
                        rating={3}
                        img="https://images-eu.ssl-images-amazon.com/images/I/41VzT8H+tcL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    /> 
                    <FashionProduct
                    title="DJ & C Floral Print T-Shirt "
                    price={600}
                    rating={4}
                        img="https://images-eu.ssl-images-amazon.com/images/I/41Jey-5jJfL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    />
                    <FashionProduct
                    title="DJ&C by fbb Girls' Legging Bottom "
                    price={500}
                    rating={2}
                        img="https://images-eu.ssl-images-amazon.com/images/I/51kNAQ15RtL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    />
                    
                </div>
                <div className="fashionproduct_container">
                <FashionProduct
                    title="T2F Girl's Plain Regular fit T-Shirt (Pack of 5)"
                    price={500}
                    rating={4}
                        img="https://images-eu.ssl-images-amazon.com/images/I/51n8veEQNlL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    />
                    <FashionProduct
                    title="T2F Girl's Plain Regular fit T-Shirt (Pack of 5)"
                    price={200}
                    rating={3}
                        img="https://images-eu.ssl-images-amazon.com/images/I/41rFDQamRcL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    />
                    <FashionProduct
                    title=" Girls'Taffeta Silk Lehenga Choli"
                    price={599}
                    rating={2}
                        img="https://images-eu.ssl-images-amazon.com/images/I/51n8veEQNlL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    />
                    <FashionProduct
                    title="Hopscotch Polyester Floral Prin Dress with Hat"
                    price={400}
                    rating={5}
                        img="https://images-eu.ssl-images-amazon.com/images/I/51-lspG2jPL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    />

                </div>
                <div className="fashionproduct_container">
                <FashionProduct
                    title="Indian Evergreen Girls' Midi Dress"
                    price={300}
                    rating={2}
                        img="https://images-eu.ssl-images-amazon.com/images/I/51Q7V01IyaL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    />
                    
                </div>


                
                </div>
                
            
                            
                    
          </div>  
    )
}

export default Fashion
