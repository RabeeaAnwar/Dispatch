import React, { createContext, useState } from 'react';

export const CollectionContext = createContext(null);


export const CollectionProvider = ({ children }) => {
  const [collectionArray,setCollectionArray]=useState(JSON.parse(localStorage.getItem('collectionArray')))
  const [collectionData, setCollectionData] = useState({ url: '', type: 'GET' });
  const [collectionParamData, setCollectionParamData] = useState([]);
  const [collectionHeaderData, setCollectionHeaderData] = useState([]);
  const [collectionJsonText, setCollectionJsonText] = useState('')
  return (
    <CollectionContext.Provider value={{
      collectionArray,
      setCollectionArray,
      collectionData,
      setCollectionData,
      collectionParamData,
      setCollectionParamData,
      collectionHeaderData,
      setCollectionHeaderData,
      collectionJsonText,
      setCollectionJsonText


    }}>
      {children}
    </CollectionContext.Provider>
  )
}
