import { Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { tableCellClasses } from '@mui/material/TableCell';
import { blue, blueGrey } from '@mui/material/colors';
import axios from 'axios';
import Addmovie from './Addmovie';

const Movies = () => {
    var[update,setUpdate]=useState([false])
    var[single,setSingle]=useState([])
    var [movies, setMovies] = useState([])
    const color = blue[400];
    const color2 = blueGrey[900];
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: color2,
            color: color,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));
    
    useEffect(() => {
        axios.get("http://localhost:3006/movies")
            .then(response => {
                console.log(response.data)
                setMovies(movies = response.data)
            })
            .catch(err => console.log(err))
    })
    const deleteMovies=(id)=>{
        console.log("delete clicked"+id);
        axios.delete("http://localhost:3006/movies/"+id)
        .then(response=>{
            alert("Deleted")
            window.location.reload(false)
        })}
    const updatevalues =(value)=>{
        console.log("update",value)
        setSingle(value)
        console.log("update clicked",single)
        setUpdate(true)
    }
    var FinalJSX=<TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Director</StyledTableCell>
                <StyledTableCell>Language</StyledTableCell>
                <StyledTableCell>Genere</StyledTableCell>
                <StyledTableCell>Release year</StyledTableCell>
                <StyledTableCell>Update</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {movies.map((value, index) => {
                return <TableRow key={index}>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.movie}</TableCell>
                    <TableCell>{value.director}</TableCell>
                    <TableCell>{value.language}</TableCell>
                    <TableCell>{value.genere}</TableCell>
                    <TableCell>{value.release}</TableCell>
                    <TableCell>
                        <Button variant='contained' color='success' onClick={()=>updatevalues(value)}>Update</Button>
                    </TableCell>
                    <TableCell>
                        <Button variant='contained' color='error'onClick={()=>deleteMovies(value.id)} >Delete</Button>
                    </TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>
</TableContainer>
if(update)
FinalJSX=<Addmovie data={single} method="put"/>
  return (
    <div>
      <br></br>
      <br></br>
{FinalJSX}
                
    </div>
  )
                    }
                
export default Movies