import React from 'react';
import '../styles/index.scss';


const SouthPanel = () => {
    let nameUser = sessionStorage.getItem('loginSessionStorage'),
        nameWithoutSpace = nameUser.split(' '),
        firstInitialName = nameWithoutSpace[0].substring(0,1),
        secondInitialName =  nameWithoutSpace[1].substring(0,1),
        initialsName = firstInitialName.concat(secondInitialName).toUpperCase();

    return (
    <div className="southpanel">
        <button className="gw-notification-btn"></button>
        <div className="user-details">
            <div className="user-container">
                <div className="user-name">{nameUser}</div>
                <div className="user-role">Administrator</div>
            </div>
            <div className="user-location">1 Johnston Court Sligo Co Sligo</div>
        </div>
        <button className="agent-name">{initialsName}</button>
    </div>
    )
}

export default SouthPanel;