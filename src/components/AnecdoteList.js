import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {
    const anecdotes = props.store.getState()

    const vote = (id) => {
        props.store.dispatch(addVote(id))
    }

    return (
        <>
        {anecdotes.sort((a,b) => b.votes - a.votes).map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>
        )}
        </>
    )
}

export default AnecdoteList