import React from 'react'
import { addVote, newAnec } from './reducers/anecdoteReducer'

const App = (props) => {
  //const store = props.store
  const anecdotes = props.store.getState()

  const vote = (id) => {
    props.store.dispatch(addVote(id))
  }

  const addAnec = (event) => {
    event.preventDefault()
    props.store.dispatch(newAnec(event.target.anec.value))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
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
      <h2>create new</h2>
      <form onSubmit={addAnec}>
        <div><input name='anec' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App