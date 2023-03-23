import {Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addmovie = (props) => {
   var [movies,setMovies]=useState(props.data)
   const handleChange=(e)=>{
    const {name,value}=e.target
    setMovies({...movies,[name]:value})
    console.log(movies)
   }
   const saveData=()=>{
    console.log("Button clicked");
    if(props.method==="post"){
    axios.post("http://localhost:3006/movies",movies)
    .then(response=>{
        alert("successfully added")
    })
    .catch(error=>{
        alert("failed")
    })
}else if(props.method==="put"){
    axios.post("http://localhost:3006/movies/"+movies.id,movies)
    .then(response=>{
        console.log("put data"+response.data)
        window.location.reload(false)
    })
}
   }
  return (
        <div>     
      <Typography variant='h5'>ADD MOVIE</Typography><br></br>
      <TextField label='id' variant='outlined' name='id' value={movies.id} onChange={handleChange} ></TextField>
      <br></br>
      <br></br>
      <TextField label='movie' variant='outlined' name='movie' value={movies.movie} onChange={handleChange} ></TextField>
      <br></br>
      <br></br>
      <TextField label='director' variant='outlined' name='director' value={movies.director} onChange={handleChange} ></TextField>
      <br></br>
      <br></br>
      <TextField label='language' variant='outlined' name='language' value={movies.language} onChange={handleChange} ></TextField>
      <br></br>
      <br></br>
      <TextField label='genere' variant='outlined' name='genere' value={movies.genere} onChange={handleChange} ></TextField>
      <br></br>
      <br></br>
      <TextField label='release' variant='outlined' name='release' value={movies.release} onChange={handleChange} ></TextField>
      <br></br>
      <br></br>
      <Button variant='contained' color='success' onClick={saveData}>SUBMIT</Button>
      </div>
    
  )
}

export default Addmovie