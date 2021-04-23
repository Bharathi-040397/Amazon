import React from 'react'
import './AnotherLogin.css'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './Firebase';


function AnotherLogin() {
    const [check, setCheck] = useState(true);
    const paramCheck = (e) => {
        check ? setCheck(false) : setCheck(true)
    }
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const signIn = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('./');
            })
        .catch(error=>alert(error.message))
        
         
    }
    return (
        
            
        <div className="login_container">
            <Link to="/home">
                <img className="login_img" alt='' src="https://img.pngio.com/amazon-logo-vector-png-transparent-amazon-logo-vectorpng-images-amazon-logo-png-512_512.png" />
            </Link>
            <div className="login">
                <Link to='/login' style={{textDecorationLine:"none"}}>
                    <h2 onClick={() => setCheck(true)}>Login</h2>
                    </Link>
            {check ?
                <>
                 

                    <h5 className="loginheading">E-mail</h5>
                        <input
                            className="logininput"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="loginbtn" onClick={paramCheck}>
                        Continue
              </button>
                    <p className="agree">
                            By signing-in you agree to Amazon Clone Conditions of Use & Sale.
                            Please see our Privacy Notice, our Cookies Notice and our
                            Interest-Based Ads Notice.
            </p>
                    
                </>
                : <>
                    <h4>{email}</h4>
                        <h5 className="heading1">
                        <p>Password</p>
                    <p className="forget">Forget password?</p></h5>
                        <input
                            className="logininput"
                        type="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                    <button className="loginbtn" onClick={signIn}>
                            Sign In
                     </button>
                        
                        <p className="agree">
                        <input className="logincheck" type="checkbox" />
                            <small>keep me signed in</small>  
                         <small className='details'>Details</small>   
            </p>  
                    
                    
                
                                         
           
                    </>
                    
                }
            </div>
            {check ?
                <p className="new_account">
                    <p className="new_login">New to Amazon</p>
                    <Link to="/newuser">
                        <button className="createbtn">Create your Amazon account</button>
                    </Link>
                
                </p>

:
<p className="verify">
                        <button className="otpbtn">Get an OTP on your phone</button>
               <p className="notify">Message and Data rates may apply</p>
                    </p>

}
            
            
        </div>
    
    

    )
}
export default AnotherLogin

