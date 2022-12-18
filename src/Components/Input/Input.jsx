import React,{useContext} from 'react'
import  {Box,Select,MenuItem,TextField,Button}  from '@mui/material';

import { DataContext } from '../../Context/DataProvider';


export const Input = ({onSendClick}) => {

                                          //Handle Context

    const { inputData,setInputData}=useContext(DataContext);

                                        // Handle Events

    const handleChange=(e)=>{
      setInputData({...inputData, type:e.target.value});
    }

    const onUrlChange=(e)=>{
      setInputData({...inputData, url:e.target.value});
    }

  return (
    <Box style={{display:'flex', alignItems:'center', justifyContent:'center'}}>

                                              {/* DropDown */}
          <Select 
          style={{width:'20%', height:'3.5rem', color:'var(--color-text)',
           border: '1px solid var(--color-border)', backgroundColor:'var(--color-box-bg)' }}
           
             value={String(inputData.type)}
           
            onChange={(e)=>handleChange(e)}
          >
            <MenuItem value={'GET'}>GET</MenuItem>
            <MenuItem value={'POST'}>POST</MenuItem>
            <MenuItem value={'PUT'}>PUT</MenuItem>
            <MenuItem value={'DELETE'}>DELETE</MenuItem>
          </Select>
                                            {/* InputField */}
          <TextField 
            sx={{ input: { color: 'var(--color-text)' } }}
            style={{width:'50%',height:'3.4rem',margin:'0 0.2rem',border:'1px solid var(--color-border)',
             backgroundColor:'var(--color-box-bg)', borderRadius:'5px'}}
              onChange={(e)=>onUrlChange(e)}
            />
                                             {/* SendButton */}
          <Button 
          size="large" style={{height:'3.5rem', width:'20%', color:'white',
          border:'1px solid var(--color-border)',
           backgroundColor:'var(--color-primary)' }}
          onClick={()=>onSendClick()}
          >Send</Button>

        </Box>
  )
}
