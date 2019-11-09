const initialState = {
    notiState: 'HIDE',
    content: 'not supposed to appear'
}

const notiReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SHOW_NOTI':
            const showNotiContent = {
                notiState: 'SHOW',
                content: action.data.content
            }
            return showNotiContent
        case 'HIDE_NOTI':
            const hideNotiContent = {
                notiState: 'HIDE',
                content: 'not supposed to appear'
            }
            return hideNotiContent
        default:
            return state
    }
}

export const showNoti = content => {
    return {
        type: 'SHOW_NOTI',
        data: { content }
    }
}

export const hideNoti = () => {
    return {
        type: 'HIDE_NOTI'
    }
}

export default notiReducer