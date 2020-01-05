import React, {useState} from 'react';
import PieChart from './PieChart';
import MiddleMenu from './MiddleMenu';
import Header from './Header';

const UFEFirstPage = () =>{
    const[openProcess, setOpenProcess] = useState(false);

    function isOpenProcessName() {
        setOpenProcess(!openProcess);
      }

    return(
        <div >
            <Header/>
            <MiddleMenu openProcessName={isOpenProcessName}
            isOpenProcess={openProcess} />  
            {!openProcess && <PieChart />}        
        </div>
    )
}

export default UFEFirstPage;
