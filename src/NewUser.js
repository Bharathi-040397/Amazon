import React from 'react';
import './NewUser.css';
import { Link ,useHistory} from 'react-router-dom';
import { useState } from 'react';
import { auth } from './Firebase';



function NewUser() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                if (auth)
                {
                    history.push('./')
                }
            })
        .catch(error =>alert(error.message))
    }
    
    
    return (
        <div className="newuser">
             <Link to="/home">
                <img className="create_img" alt='' src="https://img.pngio.com/amazon-logo-vector-png-transparent-amazon-logo-vectorpng-images-amazon-logo-png-512_512.png" />
            </Link>
            <div className="create_box">
                <h3 className="create_title">Create Account</h3>
                <form>
                    <h5 className="create_heading">E-mail or mobile phone number</h5>
                    <input type="text" className="create_name" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5 className="create_heading">Password</h5>
                    <input type="password" className="create_name" value={password} onChange={(e) => setPassword(e.target.value)}/>
                
                  <button className="registerbtn" onClick={register}>Sign-Up</button>
                
                </form>
                <p className="create_para">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <small className="help">Need help?</small>
            </div> 
           
            
        </div>
    )
}

export default NewUser
