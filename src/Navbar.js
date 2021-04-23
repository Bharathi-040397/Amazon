import React from 'react';
import './Navbar.css';
import RoomIcon from '@material-ui/icons/Room';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav_address">
                <RoomIcon className="address_icon"></RoomIcon>
                <div className="address_content">
                <span className="address_content1">Hello</span>
                    <span className="address_content2">Select your address</span>
                    </div>
            </div>
            <div className="nav_links">
                <ul className="links">
                    <Link to="/mobile" style={{textDecoration:'none',color:'white'}}>
                        <li className="link">mobiles</li>
                    </Link>
                    <Link to="/new" style={{textDecoration:'none',color:'white'}}>
                        <li className="link">new releases</li>
                    </Link>
                    <Link to="/fashion" style={{textDecoration:'none',color:'white'}} >
                    <li className="link">fashion</li>
                    </Link>
                     <Link to="/prime" style={{textDecoration:'none',color:'white'}}>
                    <li className="link">prime</li>
                    </Link>
                    <Link to="/gift" style={{textDecoration:'none',color:'white'}} >
                        <li className="link">gift ideas</li>
                    </Link>
                </ul>
            </div>
            <div className="nav_ad">
            <img className="ad1" alt="" src="https://11zero.co.uk/wp-content/uploads/2018/06/amazon-fulfillment_7cd4a2eee37bb60ebc6910254dfa68e5.png" />
            <img className="ad2" alt="" src="https://www.logolynx.com/images/logolynx/84/84cd3e4ae28c635f1c2c160a3c355487.jpeg" />
                
            </div>
        </div>
    )
}

export default Navbar
