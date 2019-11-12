export const initAnec = (anec) => {
  return {
    type: 'INIT_ANEC',
    data: anec
  }
}

export const addVote = (content) => {
  return {
    type: 'VOTE',
    data: { content }
  } 
}

export const newAnec = (data) => {
  return {
    type: 'NEW_ANEC',
    data
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