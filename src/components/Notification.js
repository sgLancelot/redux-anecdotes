import React from 'react'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
 
  if (!props.store.getState().anec.find(anec => anec.noti === 'SHOW')) {
    return null
  }
  return (
    <div style={style}>
      {props.store.getState().anec.map(anec => anec.noti === 'SHOW' ? anec.content : null)}
    </div>
  )
}

export default Notification