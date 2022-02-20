import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import './Description.css'
export default function Description(props) {
  const [description,setDescription] = useState("")
  useEffect(()=>{
    if(props.location !== "")
    {
      const name = props.location
      var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch('http://127.0.0.1:8000/api/location?location='+name, requestOptions)
          .then(response => response.text())
          .then(result => setDescription(JSON.parse(result).description))
          .catch(error => console.log('error', error));
    }
  },[props.location])
  return (
    <div className='description'>
        <h4>Description</h4>
        <TextField sx={{width:"100%"}} label={description} disabled/>
    </div>
  )
}
