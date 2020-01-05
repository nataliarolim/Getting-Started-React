import React, { useState, useEffect} from 'react';
import firebaseConfig from './Firebase/firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => { // store our authentication
    const[currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        firebaseConfig.auth().onAuthStateChanged(setCurrentUser); 
    
    }, []);

    return(
        <AuthContext.Provider
            value={{currentUser}}
        >
            {children}
        </AuthContext.Provider>
    )

};