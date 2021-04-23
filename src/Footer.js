import React from 'react';
import './Footer.css'
import Footer1 from './Footer1';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
    return (
        
        <footer className="page_end">
           
           
            <div className="footer_content1">
                <div className="footer_content11">
             <h4>Get to Know Us</h4>
                
                    <ul className="footer_links">
                    <li className="footer_link">about us</li>
                    <li className="footer_link">careers</li>
                    <li className="footer_link">press releases</li>
                    <li className="footer_link">amazon cares</li>
                   <li className="footer_link">gift a smile</li>
                </ul>
                </div>
                <div className="footer_content11">
             <h4>Connect with Us</h4>
                    
                    <ul className="footer_links">
                    <li className="footer_link">facebook</li>
                   <li className="footer_link">twitter</li>
                    <li className="footer_link">instagram</li>
        
                </ul>
                </div>
                <div className="footer_content11">
             <h4>Make Money with Us</h4>
                    
                    <ul className="footer_links">
                    <li className="footer_link">sell on amazon</li>
                    <li className="footer_link">sell under amazon accelerator</li>
                    <li className="footer_link">become an affiliate</li>
                    <li className="footer_link">fulfilment by amazon</li>
                        <li className="footer_link">advertise your products</li>
                        <li className="footer_link">amazon on merchants</li>
                </ul>
                </div>
                <div className="footer_content11">
             <h4>Let Us Help You</h4>

                    <ul className="footer_links">
                    <li className="footer_link">COVID_19 and amazon</li>
                    <li className="footer_link">Your Account</li>
                    <li className="footer_link">returns centre</li>
                    <li className="footer_link">100% purchase protection</li>
                    <li className="footer_link">amazon app download</li>
                        <li className="footer_link">amazon assistant download</li>
                        <li className="footer_link">help</li>
                            
                </ul>
                </div>
            </div>
            <hr />
            <div className="footer_middle">
                <FacebookIcon className="face" color="primary" />
                <TwitterIcon className="twit" color="primary" />
                <img className="footer_img" alt="" src="https://www.citypng.com/public/uploads/preview/-11596400115x4rflpvjf8.png"/>
                <InstagramIcon className="insta" color="primary" />
                <YouTubeIcon className="utube" color="primary" />
            </div>
            <Footer1 />
        </footer>
        
    )
}

export default Footer
