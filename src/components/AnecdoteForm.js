import React from 'react'
import { connect } from 'react-redux'
import { newAnec } from '../reducers/anecdoteReducer'
import { showNoti, hideNoti } from '../reducers/notiReducer'

const AnecdoteForm = (props) => {
    const addAnec = (event) => {
        event.preventDefault()
        props.newAnec(event.target.anec.value)
        props.showNoti(event.target.anec.value)
        setTimeout(() => props.hideNoti(), 5000)
    }

    return (
        <>
        <h2>create new</h2>
        <form onSubmit={addAnec}>
            <div><input name='anec' /></div>
            <button type='submit'>create</button>
        </form>
        </>
    )
}

const mapDispatchToProps = {
    showNoti,
    hideNoti,
    newAnec
}

const ConnectedAnecForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecForm