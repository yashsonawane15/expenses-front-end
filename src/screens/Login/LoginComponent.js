import { React } from 'react';
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { useState } from 'react';
import './LoginComponent.css';

const LoginComponent = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = () => {
        alert('ejdhgwje')
    }

    return (
        <div className="login-component">

            <FormControl>
                <InputLabel htmlFor="username-input">your username</InputLabel>
                <Input id="username-input" required />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="password-input">your password</InputLabel>
                <Input id="password-input" required />
            </FormControl>

            <Button variant="contained" onClick={loginHandler} color="primary" >
                login
            </Button>
        </div>
    )
}

export default LoginComponent;