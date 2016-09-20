const setState = (state, newState) => {
  return Object.assign({}, state, newState)
}

const reducer = (state = {}, {type, payload}) => {
  switch (type) {
  case 'SET_STATE':
    return setState(state, payload.state)
  }
  return state
}

export default reducer