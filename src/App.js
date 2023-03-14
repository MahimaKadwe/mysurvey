/* eslint-disable no-const-assign */
import './App.css';
import Navbar from './component/Navbar.js';
// eslint-disable-next-line no-unused-vars
// import Text from './component/Text.js';

import Cardss from './component/Cardss.js';
// import Card from 'react-bootstrap/Card';
import React, {useState} from 'react';
import Table from './component/Table.js';
import Search from './component/Search.js';
function App() {
  // eslint-disable-next-line no-unused-vars
  const [mode, setMode] = useState('light');

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
  return (
    <>
    <Navbar className="navbar-brand" title = "square" mode={mode} togglemode= {togglemode}> </Navbar>
    {/* <Navbar className="navbar-brand" title ="square" mode={mode} switchd= {switchd}> </Navbar> */}
    <div className="container">
  <nav className="comp">
    <div className="container-fluid ">
      <span className="navbar-brand" href="/" style = {{color: mode === 'dark'? 'white': 'black'}} > Lets Analyze Together ! </span>
    </div> 
  </nav>
  <Cardss> </Cardss>
 {/* <button className="btn btn-primary"></button> */}
 {/* <Text mode={mode} togglemode= {togglemode}> </Text> */}

 <Table> <Search> </Search> </Table>
 

</div>
<p plain = "kadwe" ></p>
     </>

  );
}

export default App;
