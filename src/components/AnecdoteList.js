import React from 'react'
import { addVote, hideNoti } from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {
    const { anec, filter } = props.store.getState()
    const anecToShow = () => {
      if (filter === 'ALL') {
        return anec
      }
      return anec.filter(anec => anec.content.includes(filter))
    }

    const vote = (id) => {
        props.store.dispatch(addVote(id))
        setTimeout(() => props.store.dispatch(hideNoti()), 5000)
    }

    return (
        <>
        {anecToShow().sort((a,b) => b.votes - a.votes).map(anecdote =>
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

/*

*/