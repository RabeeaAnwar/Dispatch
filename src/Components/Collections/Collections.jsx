import React,{useState,useEffect,useContext} from 'react';
import './collections.css';
import { CreateCollection } from './CreateCollection';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {CollectionsSet} from './CollectionsSet';

export const Collections = () => {

  const collectionArray=JSON.parse(localStorage.getItem('collectionArray')) || [];
  const [openModal,setOpenModal]=useState(false);
 
  useEffect(() => {
    if (localStorage.getItem("collectionArray") === null) 
    { 
      localStorage.setItem("collectionArray", JSON.stringify([]));
   }
  },[])

  return (
    <div className='collection-container'>

   <button  className='create-button' onClick={()=>setOpenModal(true)}>
   <AiOutlinePlusCircle color='white'/><span>New Collection</span>
   </button>
      {openModal && <CreateCollection closeModal={setOpenModal}/>}
      <div className='Collections'>
       {(collectionArray == []) ?'No Recent Collection' :
       
       (collectionArray.map((obj,index)=>{
        console.log(obj)
        return  <CollectionsSet key={index} cId={obj.id} name={obj.name} requests={obj.request}/> } )
        )
       }
      </div>
     
    </div>
  )
}

