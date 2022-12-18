import React, { useState,useContext } from 'react'
import { Box,Typography,Tabs,Tab,TextareaAutosize } from '@mui/material';
import { AddTable } from '../AddTable/AddTable';
import { DataContext } from '../../Context/DataProvider';
import './params.css'





export const Params = () => {
    const [value, setValue] = useState(0)
    

    const {paramData,setParamData,headerData,setHeaderData, setJsonText}=useContext(DataContext);

                    //Handle Tabs Switching

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
                    //Json Body
    const onValueChange=(e)=>{
        setJsonText(e.target.value);

    }

    return (
        <>
            <Box style={{margin:'0 0.75rem'}}>

                                        {/*   Tabs  */}

                <Tabs value={value} onChange={handleChange} >
                    <Tab label="Params" style={{color:'var(--color-text)'}}/>
                    <Tab label="Headers" style={{color:'var(--color-text)'}}/>
                    <Tab label="Body" style={{color:'var(--color-text)'}}/>
                </Tabs>
            </Box>

                                         {/*   Query Params  */}
            <Box
                role="tabpanel"
                hidden={value !== 0}
                id={`simple-tabpanel-${0}`}
                aria-labelledby={`simple-tab-${0}`}
                style={{ width: '90%',margin:'0 0.75rem',borderRadius:'5px'}}>
            
                <AddTable text={'Query Params'}  data={paramData} setData={setParamData}/>
            </Box>

                                         {/*   Headers  */}
            <Box
                role="tabpanel"
                hidden={value !== 1}
                id={`simple-tabpanel-${1}`}
                aria-labelledby={`simple-tab-${1}`}
                style={{ width: '90%',margin:'0 0.75rem',borderRadius:'5px'}}>

                <AddTable text={'Headers'}  data={headerData} setData={setHeaderData}/>
            </Box>

                                        {/*   JSON Body  */}
            <Box
                role="tabpanel"
                hidden={value !== 2}
                id={`simple-tabpanel-${2}`}
                aria-labelledby={`simple-tab-${2}`}
                style={{width:'100%'}}>
            
                <Typography  ml={1.5} color={'var(--color-text)'}>JSON</Typography>
                <TextareaAutosize
                minRows={8}
                style={{width:'85%',marginLeft:'5px',backgroundColor:' var(--color-box-bg)',border: '1px solid var(--color-border)' }} 
                className="lined-textarea"
                onChange={(e)=>onValueChange(e)}
                />



            </Box>
        </>
    )
}
