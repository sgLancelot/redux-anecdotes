import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import anecService from './services/anec'
import { initAnec } from './reducers/anecdoteReducer'

const App = (props) => {
  useEffect(() => {
    anecService.getAll().then(anec => props.initAnec(anec))
  },[props])


  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification  />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default connect(null, {initAnec})(App)