// import { useState, useEffect } from 'react';
import '../App.css';
import { Typography, Box, TextField, Autocomplete } from '@mui/material'
// import FilterPrducts from './filterProducts';
// import { fetchdata } from './fetchdata';


function App() {

 return (
    <div className = "total"> 
   <Box className="App">
     <Typography variant='h4' component={'h1'}>Surveys</Typography>
     <Autocomplete
       disablePortal
       id="combo-box-demo"

       renderInput={(params) => <TextField {...params}
         label="Search title"
 />}
     />
   </Box>
   </div>
 );
}

export default App;

  
  


