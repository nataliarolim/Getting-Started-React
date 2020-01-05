import React, {useCallback, useContext} from 'react';
import {withRouter, Redirect} from 'react-router';
import firebaseConfig from './Firebase/firebase';
import { Button, FormGroup, FormControl} from "react-bootstrap";
import {AuthContext} from './Auth';

const LoginFirebase = ({ history}) => {
    const handleLogin = useCallback( async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try{
            await firebaseConfig
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
             history.push('/ufe');

        } catch (error) {
            alert(error);
        }
    }, [history]);

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to='/' />;
    }

    return (
        <div className= "login-background" >
            <div className="login">
                <form onSubmit={handleLogin}>
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
                        Login
                    </Button>               
                </form>
            </div>
        </div>
    );
}

export default withRouter(LoginFirebase);