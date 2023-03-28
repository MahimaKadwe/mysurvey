
import React from 'react';
import SearchComponent from "react-material-ui-searchbar";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import './Search.css';


// function Searchs() {
// const Increment = () => {
//     const [count, setCount] = useState(0);
  
//     const handleClick = () => {
//       setCount(count + 1);
//     };
  

 function Search() {
  return (
    <div className="App">
      <div className='total'>
        
      <SearchComponent 
       placeholder="Search by Survey Name"
      />
       {/* <button variant="btn btn-outline-primary" className='add'  onClick={handleClick}><AddIcon > </AddIcon></button> */}

      <button variant="btn btn-outline-primary" className='add' ><AddIcon > </AddIcon></button> 
       <button variant="btn btn-outline-primary" className='add'><FilterAltIcon> </FilterAltIcon></button>
      </div>
    </div>
  );
}
// }
// }

export default Search;

 



// import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
// import SearchIcon from '@material-ui/icons/Search';
// import AddIcon from '@material-ui/icons/Add';
// import FilterAltIcon from '@material-ui/icons/FilterAlt';

// function NavScrollExample() {
// return (
// <Navbar bg="light" expand="lg">
// <Container fluid>
// <Navbar.Brand href="#">
// <h1>Surveys</h1>
// </Navbar.Brand>
// <Navbar.Toggle aria-controls="navbarScroll" />
// <Navbar.Collapse id="navbarScroll">
// <Nav
// className="me-auto my-2 my-lg-0"
// style={{ maxHeight: '100px' }}
// navbarScroll
// >
// <Nav.Link href="#action1">
// {/* Home /}
// </Nav.Link>
// <Nav.Link href="#action2">
// {/ Link /}
// </Nav.Link>
// <NavDropdown title="Link" id="navbarScrollingDropdown">
// <NavDropdown.Item href="#action3">
// {/ Action /}
// </NavDropdown.Item>
// <NavDropdown.Item href="#action4">
// {/ Another action /}
// </NavDropdown.Item>
// <NavDropdown.Divider />
// <NavDropdown.Item href="#action5">
// {/ Something else here /}
// </NavDropdown.Item>
// </NavDropdown>
// <Nav.Link href="#" disabled>
// {/ Link */}
// </Nav.Link>
// </Nav>
// <Form className="d-flex">
// <div className="wrapper">
// <SearchIcon className="search" />
// <Form.Control
// type="search"
// placeholder="Search by Survey Name"
// className="me-2"
// aria-label="Search"
// />
// </div>
// <Button variant="outline-primary" className='add'>
// <AddIcon />
// </Button>
// <Button variant="outline-primary" className='add'>
// <FilterAltIcon />
// </Button>
// </Form>
// </Navbar.Collapse>
// </Container>
// </Navbar>
// );
// }

// export default NavScrollExample;





// // // import { useState, useEffect } from 'react';
// import '../App.css';
// // // import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
// // // import { FaUserAlt } from 'react-icons/fa';
// // // import { Typography, Box, TextField, Autocomplete } from '@mui/material'
// // // import FilterPrducts from './filterProducts';
// // // import { fetchdata } from './fetchdata';
// // // import Children from './Children';
// import SearchIcon from '@mui/icons-material/Search';
// import AddIcon from '@mui/icons-material/Add';

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
// import React, { useState } from 'react';
// // import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';

// const Increment = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };
 
// function Navbar(props) {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container fluid>
//         <Navbar.Brand href="#">
//           <h1>Surveys </h1> </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//           {/* <Search> </Search> */}
//           </Nav>
//           <Form className="d-flex">
//             <div className='fun'>
//             <div className= "wrapper">
//           <SearchIcon className="search"> </SearchIcon> 
//             <Form.Control 
//               type="search"
//               placeholder="Search by Survey Name"
//               className="me-2"
//               aria-label="Search"
//             />
//           </div>
//           </div>
//             <Button variant="btn btn-outline-primary" className='add'  onClick={handleClick}><AddIcon > </AddIcon></Button>
//             <Button variant="btn btn-outline-primary" className='add'><FilterAltIcon> </FilterAltIcon></Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
// }

// export default Navbar;







  
  


