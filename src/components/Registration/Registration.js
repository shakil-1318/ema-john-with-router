import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='login-form'>
            <div className='login'>
                <h2>Registration</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" placeholder='password' />
                    <br />
                    <input type="password" name="" id="" placeholder='re-enter password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to='/login'>Login</Link> </p>
                <div>--------------or-----------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Registration;