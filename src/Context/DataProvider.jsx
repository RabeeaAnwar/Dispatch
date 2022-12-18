import React,{createContext , useState} from 'react';

export const DataContext=createContext(null);


export const DataProvider = ({children}) => {
    const [inputData, setInputData]=useState({url:'', type:'GET'});
    const [paramData,setParamData]=useState([]);
    const [headerData,setHeaderData]=useState([]);
    const [jsonText,setJsonText]=useState('')
  return (
    <DataContext.Provider value={{
        inputData,
        setInputData,
        paramData,
        setParamData,
        headerData,
        setHeaderData,
        jsonText,
        setJsonText

    }}>
        {children}
    </DataContext.Provider>
  )
}

