import React, { useState} from 'react';
import { Button, FormGroup, FormControl} from "react-bootstrap";
import '../styles/index.scss';
import {Redirect} from 'react-router-dom';
import getLoginData from '../data/getLoginData';
import { useFormFields } from "../libs/hooksLib";


const Login = () =>{
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const[fields, handleFieldChange] = useFormFields({
        username: '',
        password: ''
      });

    function handleSubmit(event){   
        let login = getLoginData(fields.username,fields.password);
        setIsLoggedIn(login.length !== 0);
        sessionStorage.setItem('loginSessionStorage', login[0].name);
         event.preventDefault();
     }
    
    function validateForm() {
        return fields.username.length > 0 && fields.password.length > 0;
    }

      if(isLoggedIn){
          return <Redirect to="/ufe" />
      }

    return (
        <div className= "login-background" >
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <FormGroup controlId="username">
                        <FormControl
                            autoFocus
                            type="text"
                            placeholder="Username"
                            value={fields.username}
                            onChange={handleFieldChange}
                        />  
                    </FormGroup>
                    <FormGroup controlId="password">
                        <FormControl
                        value={fields.password}
                        placeholder="Password"
                        type="password"
                        onChange={handleFieldChange}  
                        />
                    </FormGroup>                   
                    <Button block disabled={!validateForm()} type="submit">
                        Login
                    </Button>               
                </form>
            </div>
        </div>
    );
}

export default Login;