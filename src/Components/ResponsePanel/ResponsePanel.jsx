
import { TextareaAutosize } from '@mui/material';
import React from 'react'
import './responsepanel.css'

export const ResponsePanel = ({ data }) => {
  let obj = data;
  let readableObj = '{\n';
  for (let key in obj) {
    readableObj += '\t'
    readableObj += (typeof obj[key] === 'string') ? `${key}: "${obj[key]}"` :
      `${key} : ${obj[key]}`;
    if (Object.keys(obj).pop() !== key.toString()) {
      readableObj += ',\n'
    }
    
  }
  readableObj += '\n}'
  return (
    <>
      <div className='res-container'>
      
        <TextareaAutosize
          minRows={13}
          value={String(readableObj)}
          className="lined-textarea"
          style={{backgroundColor:' var(--color-box-bg)',border: '1px solid var(--color-border)' }} 
        />
      </div>
    </>
  )
}
