import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

function CreateTweet( {input, setInput, submit, setSubmit}) {
  
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setSubmit([...submit, {message:input, id:uuidv4()}]);

    setInput('')
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <textarea
          value={input}
          onChange={inputHandler}
          cols="30"
          rows="10"
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateTweet;
