import React, { useContext, useEffect, useState } from 'react'
import './content.css'
import { Input } from '../Input/Input'
import { Params } from '../Params/Params'
import { ResponsePanel } from '../ResponsePanel/ResponsePanel'
import { ErrorScreen } from '../ErrorScreen/ErrorScreen'
import { DataContext } from '../../Context/DataProvider'
import { checkParams } from '../../Utilities/commonUtils'
import { SnackBar } from '../SnackBar/SnackBar'
import { getData } from '../../Services/API'
import { Chip } from 'primereact/chip';


export const Content = () => {
  Number.prototype.toStr = function(){
    if(!this){
        return ""
    }

    return this.toString()
}
  
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [errorResponse, setErrorResponse] = useState(false);
  const [apiResponse, setApiResponse] = useState({});
  const [requestItems, setRequestItems] = useState([]);
  const [statusCode,setStatusCode]=useState(0);

  const { inputData, paramData, headerData, jsonText } = useContext(DataContext);

  const onSendClick = async () => {
    if (!checkParams(inputData, paramData, headerData, jsonText, setErrorMsg)) {
      setError(true);
      return false;
    }


    let response = await getData(inputData, paramData, headerData, jsonText);

    setStatusCode(response.status);
    console.log(statusCode);

    const activityObj = {
      inputData,
      paramData,
      headerData,
      jsonText,
      response

    };

    requestItems.push(activityObj);
    localStorage.setItem("requestItems", JSON.stringify(requestItems));


    if (response === 'error') {
      console.log(error)
      setErrorResponse(true);
      return;
    }
    setErrorResponse(false);
    setApiResponse(response.data);
  }

  useEffect(()=>{
    let activities= JSON.parse(localStorage.getItem("requestItems") )?? [];
    setRequestItems([...activities]);
  },[])

  return (
    <div className='content-container'>
      <div className='leftPanel'>
        <div className='input-container'>
          <Input onSendClick={onSendClick} />
        </div>
        <div className='params-container'>
          <Params />
        </div>
      </div>
      <div className='rightPanel'>
      <h1 style={{position:'relative',margin:'0.75rem', color:'var(--color-text)'}}>Response:</h1>
      <span><Chip label={(!statusCode) ? '' : `Status Code:`+statusCode.toStr() }/> </span>
        {
          errorResponse ? <ErrorScreen /> : <ResponsePanel data={apiResponse} />
        }

        {error && <SnackBar error={error} setError={setError} errorMsg={errorMsg} />}
      </div>
    </div>
  )
}

