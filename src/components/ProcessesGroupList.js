import React from 'react';
import '../styles/index.scss';

const ProcessesGroupList = (props) =>{
    
    return(
        <div className="menu-content">
            <div className="menu-content-item process">Processes</div>  
                { props.inputText.map(process => <div className="menu-content-item" key={process.id}> 
                    <div className="test">    
                        <div style={{ width: "94%"}}>{process.nameGroup}</div>
                        <button  onClick={() => props.toggleArrowButton(process.id)}  
                        className={props.expandProcessGroup(process.id)? "arrow-collapse-process-group" : "arrow-expand-process-group" }>                     
                        </button>
                    </div>
                    {props.expandProcessGroup(process.id) && 
                    <div className="process-name-container"> {process.nameProcess.map((name, index) =><div key={index}>
                        <button className="button-process" 
                        onClick={()=>{props.closeCallback(); props.triggerProcessName();props.toggleProcessName(name)}}>{name}</button></div>)}
                    </div>                                   
                }                             
            </div>)}
        </div>      
    )
}
export default ProcessesGroupList;