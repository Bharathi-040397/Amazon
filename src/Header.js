import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';


function Header() {
    // eslint-disable-next-line
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user)
        {
            auth.signOut();
            dispatch({
                type:'EMPTY_BASKET'
            })
        }
     }
    return (
        <section id="header">
        <div className="header">
            <Link to ="/home" style={{textDecoration:'none',cursor:'pointer'}}>
            <img className="header_logo" alt="logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div className="header_search">
            <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav"  >
                    <Link to={!user && "/login"} style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>
                            <div className="header_option" onClick={handleAuthentication}>
                            <span className="header_option1">Hello {!user ? "Guest" : user.email}</span>
                            <span className="header_option2">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                    </Link>
                    <Link to='/orders' style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }} >
                        <div className="header_option">
                    <span className="header_option1">Returns</span>
                    <span className="header_option2">&Orders</span>
                        </div>
                        </Link>
                    <Link to='/prime' style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>
                        <div className="header_option">
                    <span className="header_option1">Try</span>
                    <span className="header_option2">Prime</span>
                    </div>
                    </Link>


                <Link to ="/checkout" style={{textDecoration:'none',color:'white' ,cursor:'pointer'}}>
                <div className="header_option basket">
                    <span className="basket1">
                    <ShoppingCartIcon className="cart_icon" />
                                <span className="cart_count">{basket?.length}</span>
                    </span>
                    <span className="basket2">
                            cart
                    </span>
                 
                        
                    </div>
                    </Link>
            </div>
            
            </div>
            </section>
    
    )
}

export default Header
