import React from 'react'
import Tweet from './Tweet'

function TweetList({submit, name, setSubmit, message}) {
    
    return (
        <div className="tweetList">
            {submit.map((m)=><Tweet name={name} message={message} setSubmit={setSubmit} submit={submit} />)}
        </div>
    )
}

export default TweetList