import React from 'react'

const Notification = ({store}) => {
  const { noti } = store.getState()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (noti.notiState === 'SHOW') {
    return (
      <div style={style}>
        {noti.content}
      </div>
    )
  }
  return null
}

export default Notification