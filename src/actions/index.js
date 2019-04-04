export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const RECEIVE_THREAD = 'RECEIVE_THREAD'
export const TOGGLE_MESSAGE_DETAIL = 'TOGGLE_MESSAGE_DETAIL'

/*

Actions are JS objects with at least a key called type and a value which is 
the name of the action (they might have some other key and values). 
Each of the following functions  return an action. These functions are called
action creators

*/

export const receiveThread = (thread) => ({
    type: 'RECEIVE_THREAD',
    thread
})

export const receiveConversation = (conversation) => ({
    type: 'RECEIVE_CONVERSATION',
    conversation
})

export const toggleMessageDetail = () => ({
    type: TOGGLE_MESSAGE_DETAIL,
})

export const receiveMessage = (message) => ({
    type: RECEIVE_MESSAGE,
    message
})
