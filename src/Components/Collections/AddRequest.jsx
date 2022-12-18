import React,{ useEffect, useState} from 'react';
import './collections.css';
import { AddTable } from '../AddTable/AddTable';
import  {Box,Select,MenuItem,TextField,Button,Typography,Tabs,Tab,TextareaAutosize}  from '@mui/material';
import { checkParams } from '../../Utilities/commonUtils'
import { SnackBar } from '../SnackBar/SnackBar'




export const AddRequest = ({addNewRequest,cId}) => {
  
 
  const [collectionArray,setCollectionArray]=useState(JSON.parse(localStorage.getItem('collectionArray')))
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [tabsValue, setTabsValue] = useState(0);
  const [collectionData, setCollectionData] = useState({ url: '', type: 'GET' });
  const [collectionParamData, setCollectionParamData] = useState([]);
  const [collectionHeaderData, setCollectionHeaderData] = useState([]);
  const [collectionJsonText, setCollectionJsonText] = useState('')


  useEffect(()=>{
    setCollectionArray(JSON.parse(localStorage.getItem('collectionArray'))|| []);

  },[]);
    
   
                                      //Handle Context
      const onAddRequest =async () => {
        if (!checkParams(collectionData, collectionParamData, collectionHeaderData, collectionJsonText, setErrorMsg)) {
          setError(true);
          return false;
        }
    
        
         let reqInput=
          {
            body: collectionJsonText,
            url: collectionData.url,
            method: collectionData.type,
            headers:collectionHeaderData,
            params:collectionParamData
          }
         
         
         let index= collectionArray.findIndex(item => item.id == cId);
         

         if(index > -1) {
          collectionArray[index].request.push(reqInput);
        
          localStorage.setItem("collectionArray", JSON.stringify(collectionArray));

          window.location.reload(false);
         }
          
       
    
      }
      


                                      // Handle Events
  

            const handleSelectChange=(e)=>{
            setCollectionData({...collectionData, type:e.target.value});
          
            }

            const onUrlChange=(e)=>{
              setCollectionData({...collectionData, url:e.target.value});
             
            }
            const handleChange = (event, newValue) => {
              setTabsValue(newValue);
            }

                //Json Body
            const onValueChange=(e)=>{
                  setCollectionJsonText(e.target.value);
          
              }
  
 

 
 
   
  return (
    <div className='request-container'>
         
      
        <div className='form-container'>

                                            {/* Form */}

        <Box style={{display:'flex', alignItems:'center', justifyContent:'center'}}>

                                              {/* DropDown */}
          <Select 
          style={{width:'20%', height:'3.5rem', color:'var(--color-text)',
           border: '1px solid var(--color-border)', backgroundColor:'var(--color-box-bg)' }}
           
             value={collectionData.type}
           
            onChange={(e)=>handleSelectChange(e)}
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
             value={collectionData.url}
              onChange={(e)=>onUrlChange(e)}
            />
                                             {/* SendButton */}
          <Button 
          size="large" style={{height:'3.5rem', width:'20%', color:'white',
          border:'1px solid var(--color-border)',
          backgroundColor:'var(--color-primary)' }}
          onClick={async()=>await onAddRequest()}
          >Add</Button>

        </Box>
        <Box style={{margin:'0 0.75rem'}}>

                                        {/*   Tabs  */}

                <Tabs value={tabsValue} onChange={handleChange} >
                    <Tab label="Params" style={{color:'var(--color-text)'}}/>
                    <Tab label="Headers" style={{color:'var(--color-text)'}}/>
                    <Tab label="Body" style={{color:'var(--color-text)'}}/>
                </Tabs>
            </Box>

                                         {/*   Query Params  */}
            <Box
                role="tabpanel"
                hidden={tabsValue !== 0}
                id={`simple-tabpanel-${0}`}
                aria-labelledby={`simple-tab-${0}`}
                style={{ width: '90%',margin:'0 0.75rem',borderRadius:'5px'}}>
            
                <AddTable text={'Query Params'}  data={collectionParamData} setData={setCollectionParamData}/>
            </Box>

                                         {/*   Headers  */}
            <Box
                role="tabpanel"
                hidden={tabsValue !== 1}
                id={`simple-tabpanel-${1}`}
                aria-labelledby={`simple-tab-${1}`}
                style={{ width: '90%',margin:'0 0.75rem',borderRadius:'5px'}}>

                <AddTable text={'Headers'}  data={collectionHeaderData} setData={setCollectionHeaderData}/>
            </Box>

                                        {/*   JSON Body  */}
            <Box
                role="tabpanel"
                hidden={tabsValue !== 2}
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
        </div>       
        
        <div >
            
                <button type='button' className='btn cancel-button' onClick={()=>addNewRequest(false)}>Cancel</button>
              
        </div>
        
        {error && <SnackBar error={error} setError={setError} errorMsg={errorMsg} />}
    </div>
  )
}
  