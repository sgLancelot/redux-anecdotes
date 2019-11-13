import React from 'react'
import { connect } from 'react-redux'
import { newAnec } from '../reducers/anecdoteReducer'
import { showNoti, hideNoti } from '../reducers/notiReducer'

const AnecdoteForm = (props) => {
    const addAnec = async (event) => {
        event.preventDefault()
        const content = event.target.anec.value
        event.target.anec.value = ''
        props.newAnec(content)
        props.showNoti(content)
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