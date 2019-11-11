// Voting for and creating new anecdotes does not need to work

import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { showNoti, hideNoti } from '../reducers/notiReducer'

const AnecdoteList = (props) => {
    //const { anec, filter } = props.store.getState()
    const anecToShow = () => {
      if (props.filter === 'ALL') {
        return props.anec
      }
      return props.anec.filter(anec => anec.content.includes(props.filter))
    }

    const vote = (content) => {
        props.store.dispatch(addVote(content))
        //props.store.dispatch(showNoti(content))
        //setTimeout(() => props.store.dispatch(hideNoti()), 5000)
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

const mapStateToProps = state => {
  console.log(state)
  return {
    anec: state.anec,
    filter: state.filter
  }
}

const ConnectedAnec = connect(mapStateToProps)(AnecdoteList)
export default ConnectedAnec
/*
const mapStateToProps = (state) => {
  // sometimes it is useful to console log from mapStateToProps
  console.log(state)
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}*/