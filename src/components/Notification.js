import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (props.notiState === 'SHOW') {
    return (
      <div style={style}>
        {props.content}
      </div>
    )
  }
  return null
}

const mapStateToProps = state => {
  return {
    noti: state.noti,
    notiState: state.noti.notiState,
    content: state.noti.content
  }
}

const ConnectedNoti = connect(mapStateToProps)(Notification)
export default ConnectedNoti