import React from 'react'

function Tweet( {name, message, input, submit, setSubmit}) {
    const deleteBtn = () =>{
        console.log(message)
        setSubmit(submit.filter(t => t !== message))
    }
    return (
        <div className="tweet">
            <h2>{name}</h2>
            <h3>{message}</h3>
            <button onClick={deleteBtn}>Delete</button>
            <button>Like</button>
        </div>
    )
}

export default Tweet
