import React, {useCallback} from 'react';
import {withRouter} from 'react-router';
import firebaseConfig from './Firebase/firebase';
import { Button, FormGroup, FormControl} from "react-bootstrap";

const SignUpFirebase = ({ history}) => {
    const handleSignUp = useCallback( async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try{
            await firebaseConfig
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
             history.push('/ufe');

        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div className= "login-background" >
            <div className="login">
                <form onSubmit={handleSignUp}>
                    <FormGroup controlId="email">
                        <FormControl
                            autoFocus
                            type="email"
                            placeholder="Email"
                        />  
                    </FormGroup>
                    <FormGroup controlId="password">
                        <FormControl
                        placeholder="Password"
                        type="password"
                        />
                    </FormGroup>                   
                    <Button  type="submit">
                        Sign Up
                    </Button>               
                </form>
            </div>
        </div>
    );
}

export default withRouter(SignUpFirebase);