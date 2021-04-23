import React from 'react';
import './Home.css';
import HomeProduct from './HomeProduct';
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <div className="homeimg_container">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={4}
                    isPlaying={true}
                    interval={5000}
                >
                    <Slider>
                        <Slide index={0}><img className="home_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" /></Slide>
                        <Slide index={1}><img className="home_img" alt="" src="https://m.media-amazon.com/images/G/31/img2020/fashion/ApparelGW/ATF/U599/Sep/NSU599-1242x450._CB406752858_.jpg" /></Slide>
                            
                            <Slide index={2}><img className="home_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Shoes/September/SSW/GW/GW_PC_1500x600._CB404931378_.jpg" /></Slide>
                            <Slide index={3}><img className="home_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Nokia/5.3/Sep1/GW/V240911677_IN_WLME_Nokia_5_3_DesktopTallHero_1500x600_1._CB406805562_.jpg" /></Slide>
                    </Slider>
                    </CarouselProvider>
                    </div>
                    
                <div className="home_row">
                    <HomeProduct
                        title="The Lean Startup Book by Eric Ries"
                        price={50}
                        rating={3}
                        img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    /> 
                    <HomeProduct
                    title="Multifunctional Hand Mixer for Egg Beater and Food Blender"
                    price={400}
                    rating={2}
                        img="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                    <HomeProduct
                    title="BUFFALO Indigo Regular Waist Slim Fit Jeans"
                    price={500}
                    rating={2}
                        img="https://images-eu.ssl-images-amazon.com/images/I/41Vjg4I9JCL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    />
                    <HomeProduct
                    title="DJ & C Floral Print T-Shirt "
                    price={600}
                    rating={4}
                        img="https://images-eu.ssl-images-amazon.com/images/I/41Jey-5jJfL._AC_UL390_SR300,390_FMwebp_QL65_.jpg"
                    />
                    
                </div>
                <div className="home_collections">
                    <card>
                        <img className="homecard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/41R8fti5wnL._AC_SY200_.jpg" />
                    </card>
                    <card>
                        <img className="homecard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/41ox5xhJ+xL._AC_SY200_.jpg" />
                    </card>
                    <card>
                        <img className="homecard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/41ulgcTkoyL._AC_SY200_.jpg" />
                    </card>
                    <card>
                        <img className="homecard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/41GR0aNdlrL._AC_SY200_.jpg" />
                    </card>
                    <card>
                        <img className="homecard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/51roUtVpPCL._AC_SY200_.jpg" />
                    </card>
                    <card>
                        <img className="homecard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/41zn91YS7-L._AC_SY200_.jpg" />
                    </card>
                </div>
                <div className="home_row">
                    <HomeProduct
                        title="Fitbit FB507BKBK Versa 2 Health & Fitness Smartwatch with Heart Rate"
                    price={300}
                    rating={5}
                        img="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <HomeProduct
                    title="Triple Two Retail 3.5 mm Collar Microphone Kit with Voice Recording "
                    price={200}
                    rating={4}
                        img="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <HomeProduct
                    title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Grey (Latest Model)"
                    price={1000}
                    rating={5}
                        img="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
                    />
                </div>
                <div className="home_row">
                    <HomeProduct
                title="Samsung 80 cm (32 Inches) Wondertainment Series HD (Glossy Black) (2020 Model)"
                price={1200}
                rating={4}
                 img="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
                <div className="home_collections">
                    <card>
                        <img className="homecard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/41hi0yvnssL._AC_SY200_.jpg" />
                    </card>
                    <card>
                        <img className="homecard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/41iEO0v7oTL._AC_SY200_.jpg" />
                    </card>
                    <card>
                        <img className="homecard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/41lHFlGGkvL._AC_SY200_.jpg" />
                    </card>
                    <card>
                        <img className="homecard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/31peh6pTVKL._AC_SY200_.jpg" />
                    </card>
                    <card>
                        <img className="homecard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/51rJ323CC2L._AC_SY200_.jpg" />
                    </card>
                    <card>
                        <img className="homecard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/I/31KCoUwjVaL._AC_SY200_.jpg" />
                    </card>
                </div>
                <div className="home_row">
                    <HomeProduct
                title="Mobilife Extendable Bluetooth Selfie Stick Tripod"
                price={889}
                rating={4}
                 img="https://images-eu.ssl-images-amazon.com/images/I/417CasLZpoL._AC_US240_FMwebp_QL65_.jpg"
                    />
                    <HomeProduct
                title="LG 20 L Solo Micro Oven"
                price={12000}
                rating={4}
                 img="https://images-eu.ssl-images-amazon.com/images/I/31JR7LTD7zL._SS135_.jpg"
                    />
                    <HomeProduct
                title="Mi 2-in-1 USB Cable (Micro USB to Type-C) 100cm"
                price={1200}
                rating={4}
                 img="https://images-eu.ssl-images-amazon.com/images/I/314RTRrgm-L._AC_SX184_.jpg"
                    />
                    <HomeProduct
                title="AmazonBasics High-Speed HDMI Cable, 6 Feet - Supports Ethernet, 3D, 4K video,Black"
                price={1200}
                rating={4}
                 img="https://images-eu.ssl-images-amazon.com/images/I/31-BRsjrvDL._AC_SX184_.jpg"
                    />
                </div>
            </div>  
        </div>
    )
}

export default Home
