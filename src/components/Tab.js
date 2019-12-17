import React from 'react';
import { Tabs, Tab} from "react-bootstrap";
import ReferenceData from './ReferenceData';

const CloseTab = (props) => {

  return (
      
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  
        <Tab tabClassName="tab-process" eventKey="profile" title={<span>Reference Data 
          <button onClick={() => props.closeTab()} className="btn-close-process">X</button></span>}>
            <ReferenceData />            
        </Tab>
    </Tabs>
  )
}

  export default CloseTab;