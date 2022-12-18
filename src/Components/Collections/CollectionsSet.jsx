import React,{useState} from 'react';
import './collections.css';
import {IoIosAddCircle} from 'react-icons/io';
import { AddRequest } from './AddRequest';
import {objToJson} from '../../Utilities/commonUtils';



export const CollectionsSet = ({cId,name,requests}) => {

  
  const [newRequest,setNewRequest] = useState(false);

 
  return (
    <div className='Collections-Set'>
    <header style={{paddingRight:'4rem'}}>
    <h1>{name}</h1>
    <button className='add-button' onClick={()=> setNewRequest(true)}
    style={{ fontSize:'40px', paddingTop:'0.75rem'}}>
    <IoIosAddCircle/>
    </button>
    
    </header>
    {newRequest && <AddRequest addNewRequest={setNewRequest}  cId={cId}/>}
    {
        

      requests.map((obj,index)=>{
        return (
          <div className='requestsArray' key={index}>
          <div className='arrayContent'><h5 className='tag'>Method:</h5><span className='text'>{obj.method}</span></div>
          <div className='arrayContent'><h5 className='tag'>Url:</h5><span className='text'>{obj.url}</span></div>
          <div className='arrayContent'><h5 className='tag'>Headers:</h5><span className='text'>{obj.headers}</span></div>
          <div className='arrayContent'><h5 className='tag'>Params:</h5><span className='text'>{obj.params}</span></div>
          <div className='arrayContent'><h5 className='tag'>Body:</h5><span className='text'>{objToJson(obj.body)}</span></div>
          
                       
          </div> 
        )
       

      })

    }
    </div>
  )
}
