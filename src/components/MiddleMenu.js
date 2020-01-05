import React, {useState} from 'react';
import SideBarMenu from './SideBarMenu';
import Tab from './Tab';
import firebaseConfig from './Firebase/firebase';

const MiddleMenu = (props) =>{

const[menuOpen, setMenuOpen] = useState(false);
  const processesName = require('../data/processName.json');
  const dataProcess = processesName.process;
  const[searchText, setSearchText] = useState('');
  const[expandArrow, setExpandArrow] = useState(false);
  const[idButton, setIdButton] = useState('');
  const[titleProcessName, setTitleProcessName] = useState('');
 
  let text = dataProcess.filter(element => element.nameGroup.includes(searchText));

  function getOpenOrCloseMenu () {
    setMenuOpen(!menuOpen)
  }

  const getToggleArrowButton = (id) => {
    setExpandArrow(!expandArrow);
    setIdButton(id);
}

  const hasExpandProcessGroup = (id) => {
    return (expandArrow && idButton === id);
}

  const getToggleProcessName = (title) => {
    setTitleProcessName(title);
  }

  const isPressProcessName = (title) =>{
    return titleProcessName === title;

  }

    return (
        <div className="sidebar-tab">
            <SideBarMenu
                expandProcessGroup={hasExpandProcessGroup}
                toggleArrowButton={getToggleArrowButton}
                triggerProcessName={props.openProcessName}
                toggleProcessName={getToggleProcessName}
                openOrCloseMenu={getOpenOrCloseMenu}
                setSearchText={setSearchText}
                getText={text}
                menuOpen={menuOpen}
             />
            <div className="close-tab">{props.isOpenProcess && <Tab 
              closeTab={props.openProcessName}
              pressProcessName={isPressProcessName}
            
            />}</div>
            <div className="btn-sign-out"><button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button></div>

        </div>
    )
}

export default MiddleMenu;