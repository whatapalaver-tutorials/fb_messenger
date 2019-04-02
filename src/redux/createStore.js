// This is an simplified version of Redux, there is no initial state, middleware, etc.
// The idea is to show the basics of Redux

export const createStore = (reducer) => {
  let state = reducer(undefined, { type: '@INIT' })
  let listeners = []

  const getState = () => { return state }

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  const subscribe = listener => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(item => item !== listener)
    }
  }

  return {getState, dispatch, subscribe}
}
