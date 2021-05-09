import React from 'react'
import Tweet from './Tweet'

function TweetList( { name, submit, setSubmit }) {
   
    return (
        <div className="tweet-list">
            {submit.map(tweet => 
            <Tweet setSubmit={setSubmit} name={name} tweet={tweet} submit={submit} key={tweet.id}/>)}
        </div>
    )
}

export default TweetList
