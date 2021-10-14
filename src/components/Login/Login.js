import React from 'react';
import './Login.css'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'



const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop'


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div className='login-form'>
            <div className='login'>
                <h2>Login</h2>
                <form >
                    <input type="email" name="" id="" placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" placeholder='password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>create new account <Link to='/registration'>Registration</Link> </p>
                <div>--------------or-----------</div>
                <button
                    onClick={handleGoogleLogin}
                    className="btn-regular"
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;