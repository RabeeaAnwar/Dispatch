import React,{useState,useContext} from 'react';
import './collections.css';
import {AiFillCloseCircle} from 'react-icons/ai'
import { TextField } from '@mui/material'
import {uuid} from '../../Utilities/commonUtils'


export const CreateCollection = ({closeModal}) => {

  const [collectionArray,setCollectionArray]=useState(JSON.parse(localStorage.getItem('collectionArray')))
    const [newCollectionName, setNewCollectionName]=useState('');

  

    const handleClick=()=>{
        closeModal(false);

        if(!newCollectionName){
          return;
        }
        collectionArray.push({
          id: uuid(),
          name: newCollectionName,
          request:[]
        })
        
        localStorage.setItem("collectionArray",JSON.stringify(collectionArray));
    
    }
   
   
   
  return (
    <>
    <div className='modal-container'>
       
        <div className='modal-header'>
        <h2 className='modal-title'>Collection Name:</h2>
        <button className='action-button' onClick={()=>closeModal(false)}>
        <AiFillCloseCircle />
        </button>
           
        </div>
        <div className='modal-body'>
            <TextField sx={{ input: { color: 'var(--color-text)' } }}
             style={{width:'90%',height:'3.4rem',margin:'4rem 2.5rem ',border:'1px solid var(--color-border)',
             backgroundColor:'var(--color-box-bg)', borderRadius:'5px'}}
             onChange={(e)=>setNewCollectionName(e.target.value)}
             />
        </div>
        <div className='modal-footer'>
            <div className='btn-group'>
                <button type='button' className='btn cancel-button' onClick={()=>closeModal(false)}>Cancel</button>
                <button type='button' className='btn' onClick={()=>handleClick()}>Create</button>
            </div>
    
        </div>
    </div>
   
    </>
  )
}

