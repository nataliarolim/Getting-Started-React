import React from 'react';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import SearchBar from './SearchBar';
import ProcessesGroupList from './ProcessesGroupList';


const SideBarMenu = (props) => {

    return (
        <div className="sidebar">
          <CheeseburgerMenu
            isOpen={props.menuOpen}
            closeCallback={props.openOrCloseMenu}
            backgroundColor='black'
            >
            <SearchBar 
              onChange={event=> props.setSearchText(event.target.value)} 
              searchText={props.searchText}
            />
            <ProcessesGroupList inputText={props.getText}
            expandProcessGroup={props.expandProcessGroup}
            toggleArrowButton={props.toggleArrowButton}
            triggerProcessName={props.triggerProcessName}
            toggleProcessName={props.toggleProcessName}
            closeCallback={props.openOrCloseMenu}
            />
          </CheeseburgerMenu>
          <HamburgerMenu
            isOpen={props.menuOpen}
            menuClicked={props.openOrCloseMenu}
            width={22}
            height={16}
            strokeWidth={2}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.5}
          />    
        </div>
         
    )
}

export default SideBarMenu;
