import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { showNoti, hideNoti } from '../reducers/notiReducer'

const AnecdoteList = (props) => {
    const anecToShow = () => {
      if (props.filter === 'ALL') {
        return props.anec
      }
      return props.anec.filter(anec => anec.content.includes(props.filter))
    }

    const vote = (content) => {
        props.addVote(content)
        props.showNoti(content)
        setTimeout(() => props.hideNoti(), 5000)
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
  return {
    anec: state.anec,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  showNoti,
  hideNoti,
  addVote
}

const ConnectedAnec = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnec