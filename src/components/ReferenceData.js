import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ReferenceData = () =>{
  const[data, setData] = useState([]);
  const[error, setError] = useState('');

  useEffect (() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res =>{
        setData(res.data)
      })
      .catch(err =>{
        setError(err.message)
      })    
  }, []);



    return(
      <div className="ref-data-process">
        <ul >  
          {error ? <li>{error.message}</li> : data.map((user, index) => <li className="list-name-user" key={index}>{user.name}</li>)}
        </ul>
    </div> 
    );  
};

export default ReferenceData;
