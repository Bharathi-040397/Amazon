import React from 'react';
import './Mobile.css';
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import MobileProduct from './MobileProduct.js';


function Mobile() {
    return (
        <div className="mobile">
             <div className="mobile_container">
                <div className="mobileimg_container">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={5}
                    isPlaying={true}
                    interval={5000}
                >
                    <Slider>
                            <Slide index={0}><img className="mobile_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OnePlus/7TproPD/Mob_Hero_1242x450._CB403920528_SY500_.jpg"/></Slide>
                        <Slide index={1}><img className="mobile_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_Note9Pro/Available_Now/Updated/V184735168_WLM_Redmi_Note9Pro_Mob_Hero_1242x450._CB403932020_SY250_.jpg" /></Slide>
                            
                            <Slide index={2}><img className="mobile_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/September/Headsets/OPPOW11/New/Ingress/ingress-banner_1242x450_3._CB405350025_SY250_.jpg" /></Slide>
                            <Slide index={3}><img className="mobile_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_Note9Pro_Max/Available_Now/Per_Daycallout/V184735274_WLM_Redmi_T9B_mob_hero_1242x450_1._CB405352815_SY250_.jpg" /></Slide>
                            <Slide index={4}><img className="mobile_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OPPO/FantasticDays_Sept/GW_sept18/P39418628_IN_WLME_OPPO_F17_Newlaunch_Mob_Hero_1242x450._CB403772434_SY250_.jpg" /></Slide>
                            </Slider>
                    </CarouselProvider>
                </div>
                <div className="mobileproduct_container">
                    <MobileProduct
                        title="Redmi Note 9 (Pebble Grey, 4GB RAM 64GB Storage)"
                        price={15000}
                        rating={3}
                        img="https://images-eu.ssl-images-amazon.com/images/I/41kHeaQRTaL._AC_US240_FMwebp_QL65_.jpg"
                        />
                    <MobileProduct
                        title="Sony Xperia 10Plus (Black,4GBRAM,64GB Storage"
                        price={10500}
                        rating={4}
                        img="https://www.gizmochina.com/wp-content/uploads/2019/02/Sony-Xperia-10-Plus-500x500.jpg" />
                    <MobileProduct
                        title="Redmi 9A (Midnight Black, 3GB RAM, 32GB Storage)"
                        price={8500}
                        rating={4}
                        img="https://images-eu.ssl-images-amazon.com/images/I/31vKQS4TCfL._AC_US240_FMwebp_QL65_.jpg" />
                    <MobileProduct
                        title="Samsung GalaxyM31 (Blue, 6GB RAM, 128GB Storage)"
                        price={12500}
                        rating={4}
                        img="https://images-eu.ssl-images-amazon.com/images/I/41+xWzgV8jL._AC_US240_FMwebp_QL65_.jpg" />
                </div>
                <div className="mob_collections">
                    <card>
                        <img className="mobmobcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/April/Uber/Cat_Page/HnS/V195123777_IN_WLA_Headsets_QC_FPF-Hex-cards_3._SY250_CB435109189_.jpg" />
                    </card>
                    <card>
                        <img className="mobmobcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/April/Uber/Cat_Page/HnS/V195123777_IN_WLA_Headsets_QC_FPF-Hex-cards_2._SY250_CB435109189_.jpg" />
                    </card>
                    <card>
                        <img className="mobmobcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/April/Uber/Cat_Page/HnS/V195123777_IN_WLA_Headsets_QC_FPF-Hex-cards_4._SY250_CB435109189_.jpg" />
                    </card>
                    <card>
                        <img className="mobmobcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/April/Uber/Cat_Page/HnS/V195123777_IN_WLA_Headsets_QC_FPF-Hex-cards_5._SY250_CB435109189_.jpg" />
                    </card>
                    <card>
                        <img className="mobmobcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/April/Uber/Cat_Page/HnS/V195123777_IN_WLA_Headsets_QC_FPF-Hex-cards_6._SY250_CB435109189_.jpg" />
                    </card>
                    <card>
                        <img className="mobmobcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/April/Uber/Cat_Page/HnS/V195123777_IN_WLA_Headsets_QC_FPF-Hex-cards_7._SY250_CB435109188_.jpg" />
                    </card>
                </div>
                <div  className="mobileproduct_container">
                    <MobileProduct
                    title="Apple iPhone 11 (64GB)RAM - White"
                    price={50}
                    rating={2}
                    img="https://images-eu.ssl-images-amazon.com/images/I/41DURkOgGpL._AC_US240_FMwebp_QL65_.jpg"/>
                    <MobileProduct
                    title="Apple iPhone 11 Pro Max (64GB) - Midnight Green"
                    price={50000}
                    rating={3}
                        img="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wireless/AppleProjectEye/Updated/AMZ_FamiyStripe_iPhone_11ProMax._CB437064123_.png" />
                    <MobileProduct 
                        title="boAt BassHeads 100 in-Ear Wired Earphones"
                        price={500}
                        rating={4}
                        img="https://images-eu.ssl-images-amazon.com/images/I/31IdiM9ZM8L._AC_US240_FMwebp_QL65_.jpg" />
                </div>
                <div className="oneimg_container">
                      <img className="one_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/September/Headsets/realmeBudsClassic/White/V248982080_WLA-realme_Buds_Classic_White_Mob_Hero_1242x450._SX1242_CB405393760_.jpg" />
                </div>
                <div className="mobileproduct_container">
                    <MobileProduct 
                        title="OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic (Black)"
                        price={900}
                        rating={5}
                        img="https://images-eu.ssl-images-amazon.com/images/I/31peh6pTVKL._AC_US240_FMwebp_QL65_.jpg" />
                    <MobileProduct
                        title="Samsung Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)"
                        price={13000}
                        rating={3}
                        img="https://images-eu.ssl-images-amazon.com/images/I/41xg1z2h-uL._AC_US240_FMwebp_QL65_.jpg" />
                    <MobileProduct
                        title="Redmi 9A (Sea Blue, 3GB RAM, 32GB Storage)"
                        price={15000}
                        rating={3}
                        img="https://images-eu.ssl-images-amazon.com/images/I/41lVRYa-ckL._AC_US240_FMwebp_QL65_.jpg" />
                    
                </div>
                <h2 className="brand">Shop by Brand</h2>
                <div className="mob_collections">
                    <card>
                        <img className="mobcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OnePlus/new_logo/D15815299_IN_WL_OnePlus_new_logo_brand_farm._CB1198675309_.jpg" />
                    </card>
                    <card>
                        <img className="mobcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wireless/Catpage/BrandFarm/liwuwe_2018-05-07T11-25_f0461b_1113497_350x100_gps_cn_17.jpg" />
                    </card>
                    <card>
                        <img className="mobcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/OPPO/350x100.jpg" />
                    </card>
                    <card>
                        <img className="mobcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wireless/Catpage/BrandFarm/liwuwe_2018-05-07T11-25_f0461b_1113497_350x100_gps_cn_2.jpg" />
                    </card>
                    <card>
                        <img className="mobcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/CatPage/ShopbyBrand/Realme-Brand.jpg" />
                    </card>
                    <card>
                        <img className="mobcard_img" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wireless/CEEX/HuaweiP20/Huawei_logo_350x100.png" />
                    </card>
                </div>
            </div>
        </div>
    )
}

export default Mobile
