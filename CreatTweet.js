
import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
function CreatTweet({input, setInput, submit, setSubmit}) {
    
    const inputHandler =(e) =>{
        setInput(e.target.value)
    }
    const submitHandler = (e) =>{
        
        e.preventDefault()
        setSubmit([...submit, { message1 :input, id:uuidv4()} ])
        setInput('')
    }
    return (
        <form  onSubmit={submitHandler}>
            <textarea key={input} value={input} onChange={inputHandler} cols="30" rows="5"></textarea>
            <button>Submit</button>
            <h1>{input}</h1>
            
        </form>
    )
}

export default CreatTweet