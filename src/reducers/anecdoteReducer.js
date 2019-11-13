import anecService from '../services/anec'

export const initAnec = () => {
  return async dispatch => {
    const anec = await anecService.getAll()
    dispatch({
      type: 'INIT_ANEC',
      data: anec
    })
  }
}

export const addVote = (content) => {
  return async dispatch => {
    const anec = await anecService.getAll()
    const anecToChange = await anec.find(anec => anec.content === content)
    const changedAnec = {
      ...anecToChange,
      votes: anecToChange.votes + 1,
    }
    const putAnec = await anecService.addVote(changedAnec, anecToChange.id)
    dispatch({
      type: 'VOTE',
      data: putAnec
    })
  } 
}

export const newAnec = (content) => {
  return async dispatch => {
    const postedAnec = await anecService.createNew(content)
    dispatch ({
      type: 'NEW_ANEC',
      data: postedAnec
    })
  }
}

const anecReducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE':
      const anecToChange = state.find(anec => anec.content === action.data.content)
      const changedAnec = {
        ...anecToChange,
        votes: anecToChange.votes + 1,
      }
      return state.map(anec => anec.id !== changedAnec.id ? anec : changedAnec)
    case 'NEW_ANEC':
      return state.concat(action.data)
    case 'INIT_ANEC':
      return action.data 
    default:
      return state
  }
}

export default anecReducer