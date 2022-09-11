import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick =()=>{
    // console.log("Uppercase was clicked" + text);
    let newText= text.toUpperCase();
    setText(newText)
  }

  const handleDownClick =()=>{
    // console.log("Lowercase was clicked" + text);
    let newText= text.toLowerCase();
    setText(newText)
  }
  
  const handleonChange =(event)=>{
    // console.log("Onchange");
    setText(event.target.value);
  }
  const[text, setText] = useState('Enter text here2');

  // setText("New Text");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
      {/* <label for="myBox" class="form-label">Enter Your Text</label> */}
      <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Upper Case</button>
      <button className="btn btn-primary mx-1" onClick={handleDownClick} >Convert to Lower Case</button>
    </div>
    <div className="container">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>



  )
}
