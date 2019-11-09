import React from 'react'
import { newAnec, hideNoti } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {
    const addAnec = (event) => {
        event.preventDefault()
        props.store.dispatch(newAnec(event.target.anec.value))
        setTimeout(() => props.store.dispatch(hideNoti()), 5000)
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

export default AnecdoteForm