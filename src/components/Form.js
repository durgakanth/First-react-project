import React, { useState } from 'react';

export default function Form(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
   
    setText(" ");
  };
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  
  const [text, setText] = useState("enter text");

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="6"></textarea>
          <button className="btn btn-secondary mx-1" onClick={handleUpClick}>CONVERT TO UP</button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>CONVERT TO LOW</button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>CLEAR</button>
        </div>
      </div>
      <div className="container my-3">
        <h3>your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
      </div>
    </>
  );
}
