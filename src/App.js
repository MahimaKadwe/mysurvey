/* eslint-disable no-const-assign */
import './App.css';
// import Navbar from './component/Navbar.js';
// eslint-disable-next-line no-unused-vars
// import Text from './component/Text.js';
// import Children from './component/Children.js';
import Cardss from './component/Cardss.js';
// import Card from 'react-bootstrap/Card';
import React, {useState} from 'react';
import BasicTable from './component/Table.js';
// import EnhancedTable from './component/Table.js';
// import Search from './component/Search.js';
import UsePagination from './component/Pagination.js';
// import PaginationLink from './component/Page.js';
// import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import PaginationRounded from './component/Pagination.js';

function App(props) {
  // eslint-disable-next-line no-unused-vars
  const [mode, setMode] = useState('light');
  const [myData, setMyData] = useState([]);


  // const swithcd = () =>{
  //   if(mode === 'green'){
  //     setMode('yellow')
  //     document.body.style.background = "white";
  //   }
  //   else{
  //     setMode('')
  //     document.body.style.background = "#0d213f";
  // }

  const togglemode = () =>{
    if(mode === 'dark'){
      setMode('light') 
      document.body.style.background = "white";
        }
    else{
      setMode('dark')
      document.body.style.background = "#0d213f";
    } 
  }

  console.log("appu");
  return (
    <>
    {/* <Navbar className="navbar-brand" title = "square" mode={mode} togglemode= {togglemode}> </Navbar> */}
    {/* <Navbar className="navbar-brand" title ="square" mode={mode} switchd= {switchd}> </Navbar> */}
    <div className="container">
  <nav className="comp">
    <div className="container-fluid ">
      <span className="navbar-brand" href="/" style = {{color: mode === 'dark'? 'white': 'black'}} >
         {/* Lets Analyze Together !  */}
         </span>
    </div> 
  </nav>
 
 {/* <button className="btn btn-primary"></button> */}
 {/* <Text mode={mode} togglemode= {togglemode}> </Text> */}
 <Cardss> </Cardss>

 <BasicTable>  </BasicTable>

 {/* <Pagination
  data={[]}
  itemsPerPage={10}
  onPageChange={(page) => console.log(`Page ${page} clicked`)}
/> */}

<UsePagination>  </UsePagination>

</div>
<p plain = "kadwe" > </p>
     </>

  );
}

export default App;
