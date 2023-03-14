import React, {useState} from 'react';
import Navbar from './Navbar.js';

export default function Text(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
  }

  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
}

    const handleOnChange = (event)=>{
      console.log("On change");
      setText(event.target.value); 
  } 

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
}

  // eslint-disable-next-line react-hooks/rules-of-hooks, no-unused-vars
  let [text, setText] = useState("");
  // setText = "mahima";
    return (
      <>

<Navbar className="navbar-brand" plain ="mahima"> </Navbar>
    <div className="container my-6" style = {{color: props.mode === 'dark'? 'white': 'black'}}>
      {/* <h1> {props.heading} </h1> */}
      <div className="mb-3">

    <textarea className="form-control my-4" value={text} onChange={handleOnChange} id="myBox" rows="8"> </textarea>
</div>
      <button className="btn btn-primary mx-2 my-6" onClick={handleUpClick}>Upper</button>
      <button className="btn btn-primary my-6" onClick={handleLowClick}>Lower</button>
      <button className="btn btn-primary mx-2 my-6" onClick={handleClearClick}>Clear</button>
      <button className="btn btn-primary my-6" onClick={downloadTxtFile}>Download</button>
    </div>
    {/* <p plain = "kadwe" ></p> */}
    {/* <Navbar className="navbar-mahi" title ="kadwe"> </Navbar> */}
    
    <div className="container" style = {{color: props.mode === 'dark'? 'white': 'black'}} >
       <h3> Text Summary </h3>
      <p> {text.split(" ").length} words and {text.length} characters</p>
     </div> 

    <div className="contain1" style = {{color: props.mode === 'dark'? 'white': 'black'}}>
       <h3> Preview </h3>
      {text}
   
</div>
    </>
  )
}


// export Text;

