import React from 'react';
import '../styles/index.scss';
import SouthPanel from './SouthPanel';

const Header = () =>{
    return( 
    <header className="header-northpanel">
        <SouthPanel/>
    </header>
    );  
};

export default Header;