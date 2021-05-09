import React from 'react'

function Tweet( {name, tweet, setSubmit, submit}) {
    const deleteTweet = () =>{
    
        setSubmit(submit.filter((f) => f.id !== tweet.id))
    }
    return (
        <div className="tweet">
             <h2>{name}</h2>
             <h3>{tweet.message}</h3>
            <button onClick={deleteTweet}>Delete</button>
            <button>like</button>
        </div>
    )
}

export default Tweet
