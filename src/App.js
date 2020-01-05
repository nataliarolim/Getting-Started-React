import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UFEFirstPage from './components/UFEFirstPage';
import LoginFirebase from './components/LoginFirebase';
import SignUpFirebase from './components/SignUpFirebase';
import PageNotFound from './components/PageNotFound';
import {AuthProvider} from './components/Auth';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    return (
        <AuthProvider>
            <Router>    
                <div>
                        <Switch>
                                <PrivateRoute path="/ufe" component={UFEFirstPage} />
                                <Route path="/login" exact component={LoginFirebase} />
                                <Route path="/signup" exact component={SignUpFirebase} />                          
                                <Route component={PageNotFound} />
                                                        
                        </Switch>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
