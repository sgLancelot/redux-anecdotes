import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'
import { showNoti, hideNoti } from '../reducers/notiReducer'

const AnecdoteList = (props) => {
    const { anec, filter } = props.store.getState()
    const anecToShow = () => {
      if (filter === 'ALL') {
        return anec
      }
      return anec.filter(anec => anec.content.includes(filter))
    }

    const vote = (content) => {
        props.store.dispatch(addVote(content))
        props.store.dispatch(showNoti(content))
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
                <button onClick={() => vote(anecdote.content)}>vote</button>
              </div>
            </div>
        )}
        </>
    )
}

export default AnecdoteList

/*

*/