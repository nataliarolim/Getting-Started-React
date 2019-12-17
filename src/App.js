import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UFEFirstPage from './components/UFEFirstPage';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';

const App = () => {
    return (
        <Router>    
           <div>
                <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/ufe"  component={UFEFirstPage} />
                        <Route component={PageNotFound} />
                                                
                </Switch>
           </div>
        </Router>
    );
};

export default App;
