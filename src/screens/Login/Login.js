import { Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import LoginComponent from './LoginComponent';
import  SignUpComponent  from './SignUpComponent';

const Login = () => {
    
    const [activeTab, setLoginTab] = useState("login");

    return (
        <div className="form-container">
            <div>
                <Button></Button>
            </div>
            <div>
                <span>
                    <Button color="primary" variant="contained" size="large"> Login</Button>
                    <Button color="secondary" variant="contained" size="large">Signup</Button>
                </span>
                { activeTab === "login" && <LoginComponent /> }
                { activeTab === "signup" && <SignUpComponent /> }
            </div>
        </div>
    )
}

export default Login;